package com.farmerprocurement.backend.provider;

public interface AadhaarOtpProvider {

    boolean sendOtp(String aadhaarNumber);

    boolean verifyOtp(String aadhaarNumber, String otp);
}