package com.farmerprocurement.backend.service.impl;

import com.farmerprocurement.backend.dto.AadhaarOtpRequest;
import com.farmerprocurement.backend.dto.AadhaarOtpResponse;
import com.farmerprocurement.backend.dto.AadhaarOtpVerifyRequest;
import com.farmerprocurement.backend.entity.AadhaarVerification;
import com.farmerprocurement.backend.provider.AadhaarOtpProvider;
import com.farmerprocurement.backend.repository.AadhaarVerificationRepository;
import com.farmerprocurement.backend.service.AadhaarService;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
public class AadhaarServiceImpl implements AadhaarService {

    private final AadhaarVerificationRepository repository;
    private final AadhaarOtpProvider otpProvider;

    public AadhaarServiceImpl(
            AadhaarVerificationRepository repository,
            AadhaarOtpProvider otpProvider) {

        this.repository = repository;
        this.otpProvider = otpProvider;
    }

    @Override
    @Transactional
    public AadhaarOtpResponse sendOtp(AadhaarOtpRequest request) {

        String aadhaarNumber = request.getAadhaarNumber();

        // Validate Aadhaar
        if (aadhaarNumber == null ||
                !aadhaarNumber.matches("\\d{12}")) {

            return new AadhaarOtpResponse(
                    false,
                    "Aadhaar number must contain exactly 12 digits"
            );
        }

        // Check whether Aadhaar is already verified
        AadhaarVerification existing =
                repository.findByAadhaarNumber(aadhaarNumber)
                        .orElse(null);

        if (existing != null && existing.isVerified()) {

            return new AadhaarOtpResponse(
                    false,
                    "Aadhaar number is already verified"
            );
        }

        // Call Aadhaar OTP provider
        boolean otpSent =
                otpProvider.sendOtp(aadhaarNumber);

        if (!otpSent) {

            return new AadhaarOtpResponse(
                    false,
                    "Unable to send OTP"
            );
        }

        AadhaarVerification verification;

        if (existing == null) {

            verification = new AadhaarVerification();

            verification.setAadhaarNumber(aadhaarNumber);

        } else {

            verification = existing;
        }

        verification.setOtpSent(true);
        verification.setOtpSentAt(LocalDateTime.now());

        repository.save(verification);

        return new AadhaarOtpResponse(
                true,
                "OTP sent successfully"
        );
    }

    @Override
    @Transactional
    public AadhaarOtpResponse verifyOtp(
            AadhaarOtpVerifyRequest request) {

        String aadhaarNumber =
                request.getAadhaarNumber();

        String otp =
                request.getOtp();

        // Validate Aadhaar
        if (aadhaarNumber == null ||
                !aadhaarNumber.matches("\\d{12}")) {

            return new AadhaarOtpResponse(
                    false,
                    "Invalid Aadhaar number"
            );
        }

        // Validate OTP
        if (otp == null ||
                !otp.matches("\\d{6}")) {

            return new AadhaarOtpResponse(
                    false,
                    "OTP must contain exactly 6 digits"
            );
        }

        // Find verification record
        AadhaarVerification verification =
                repository.findByAadhaarNumber(aadhaarNumber)
                        .orElse(null);

        if (verification == null) {

            return new AadhaarOtpResponse(
                    false,
                    "Please request OTP first"
            );
        }

        if (!verification.isOtpSent()) {

            return new AadhaarOtpResponse(
                    false,
                    "OTP has not been sent"
            );
        }

        if (verification.isVerified()) {

            return new AadhaarOtpResponse(
                    true,
                    "Aadhaar is already verified"
            );
        }

        // Verify OTP
        boolean validOtp =
                otpProvider.verifyOtp(
                        aadhaarNumber,
                        otp
                );

        if (!validOtp) {

            return new AadhaarOtpResponse(
                    false,
                    "Invalid OTP"
            );
        }

        // Mark Aadhaar as verified
        verification.setVerified(true);
        verification.setVerifiedAt(LocalDateTime.now());

        repository.save(verification);

        return new AadhaarOtpResponse(
                true,
                "Aadhaar verified successfully"
        );
    }
}