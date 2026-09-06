package com.farmerprocurement.backend.service;

import com.farmerprocurement.backend.dto.SendOtpRequest;
import com.farmerprocurement.backend.dto.VerifyOtpRequest;
import com.farmerprocurement.backend.entity.OtpPurpose;
import com.farmerprocurement.backend.entity.OtpVerification;
import com.farmerprocurement.backend.repository.OtpRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.SecureRandom;
import java.time.LocalDateTime;

@Service
public class OtpService {

    private final OtpRepository otpRepository;

    private final SecureRandom secureRandom = new SecureRandom();

    public OtpService(OtpRepository otpRepository) {
        this.otpRepository = otpRepository;
    }


    @Transactional
    public String generateOtp(
            String mobileNumber,
            OtpPurpose purpose
    ) {

        // Generate 6-digit OTP
        String otp = String.format(
                "%06d",
                secureRandom.nextInt(1_000_000)
        );

        OtpVerification otpVerification = new OtpVerification();

        otpVerification.setMobileNumber(mobileNumber);
        otpVerification.setOtp(otp);
        otpVerification.setPurpose(purpose);

        // OTP valid for 5 minutes
        otpVerification.setExpiresAt(
                LocalDateTime.now().plusMinutes(5)
        );

        otpRepository.save(otpVerification);

        // DEVELOPMENT ONLY
        System.out.println(
                "[DEV OTP] " +
                purpose +
                " OTP for " +
                mobileNumber +
                " = " +
                otp
        );

        return otp;
    }


    @Transactional
    public boolean verifyOtp(
            VerifyOtpRequest request,
            OtpPurpose purpose
    ) {

        OtpVerification otpVerification =
                otpRepository
                        .findTopByMobileNumberAndPurposeAndVerifiedFalseOrderByCreatedAtDesc(
                                request.getMobileNumber(),
                                purpose
                        )
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "No valid OTP found"
                                )
                        );


        // Check expiration
        if (LocalDateTime.now().isAfter(
                otpVerification.getExpiresAt())) {

            throw new RuntimeException("OTP has expired");
        }


        // Check maximum attempts
        if (otpVerification.getAttempts() >= 5) {

            throw new RuntimeException(
                    "Maximum OTP attempts exceeded"
            );
        }


        // Check OTP
        if (!otpVerification
                .getOtp()
                .equals(request.getOtp())) {

            otpVerification.setAttempts(
                    otpVerification.getAttempts() + 1
            );

            otpRepository.save(otpVerification);

            throw new RuntimeException(
                    "Invalid OTP"
            );
        }


        // OTP is correct
        otpVerification.setVerified(true);

        otpRepository.save(otpVerification);

        return true;
    }
}