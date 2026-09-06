package com.farmerprocurement.backend.service;

import com.farmerprocurement.backend.dto.AadhaarOtpRequest;
import com.farmerprocurement.backend.dto.AadhaarOtpResponse;
import com.farmerprocurement.backend.dto.AadhaarOtpVerifyRequest;

public interface AadhaarService {

    AadhaarOtpResponse sendOtp(AadhaarOtpRequest request);

    AadhaarOtpResponse verifyOtp(AadhaarOtpVerifyRequest request);
}