package com.farmerprocurement.backend.controller;

import com.farmerprocurement.backend.dto.AadhaarOtpRequest;
import com.farmerprocurement.backend.dto.AadhaarOtpResponse;
import com.farmerprocurement.backend.dto.AadhaarOtpVerifyRequest;
import com.farmerprocurement.backend.service.AadhaarService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/aadhaar")
@CrossOrigin(origins = "http://localhost:3000")
public class AadhaarController {

    private final AadhaarService aadhaarService;

    public AadhaarController(AadhaarService aadhaarService) {
        this.aadhaarService = aadhaarService;
    }

    @PostMapping("/send-otp")
    public ResponseEntity<AadhaarOtpResponse> sendOtp(
            @RequestBody AadhaarOtpRequest request) {

        AadhaarOtpResponse response =
                aadhaarService.sendOtp(request);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<AadhaarOtpResponse> verifyOtp(
            @RequestBody AadhaarOtpVerifyRequest request) {

        AadhaarOtpResponse response =
                aadhaarService.verifyOtp(request);

        return ResponseEntity.ok(response);
    }
}