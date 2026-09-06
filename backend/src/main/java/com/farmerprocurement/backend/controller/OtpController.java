package com.farmerprocurement.backend.controller;

import com.farmerprocurement.backend.dto.SendOtpRequest;
import com.farmerprocurement.backend.dto.VerifyOtpRequest;
import com.farmerprocurement.backend.entity.OtpPurpose;
import com.farmerprocurement.backend.service.OtpService;

import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/otp")
@CrossOrigin(origins = "http://localhost:3000")
public class OtpController {

    private final OtpService otpService;

    public OtpController(OtpService otpService) {
        this.otpService = otpService;
    }


    @PostMapping("/send/registration")
    public ResponseEntity<?> sendRegistrationOtp(
            @Valid @RequestBody SendOtpRequest request) {

        otpService.generateOtp(
                request.getMobileNumber(),
                OtpPurpose.REGISTRATION
        );

        return ResponseEntity.ok(
                new OtpResponse(
                        true,
                        "Registration OTP sent successfully"
                )
        );
    }


    @PostMapping("/verify/registration")
    public ResponseEntity<?> verifyRegistrationOtp(
            @Valid @RequestBody VerifyOtpRequest request) {

        otpService.verifyOtp(
                request,
                OtpPurpose.REGISTRATION
        );

        return ResponseEntity.ok(
                new OtpResponse(
                        true,
                        "Mobile number verified successfully"
                )
        );
    }


    @PostMapping("/send/login")
    public ResponseEntity<?> sendLoginOtp(
            @Valid @RequestBody SendOtpRequest request) {

        otpService.generateOtp(
                request.getMobileNumber(),
                OtpPurpose.LOGIN
        );

        return ResponseEntity.ok(
                new OtpResponse(
                        true,
                        "Login OTP sent successfully"
                )
        );
    }


    @PostMapping("/verify/login")
    public ResponseEntity<?> verifyLoginOtp(
            @Valid @RequestBody VerifyOtpRequest request) {

        otpService.verifyOtp(
                request,
                OtpPurpose.LOGIN
        );

        return ResponseEntity.ok(
                new OtpResponse(
                        true,
                        "Login OTP verified successfully"
                )
        );
    }


    public static class OtpResponse {

        private boolean success;
        private String message;

        public OtpResponse(
                boolean success,
                String message) {

            this.success = success;
            this.message = message;
        }

        public boolean isSuccess() {
            return success;
        }

        public String getMessage() {
            return message;
        }
    }
}