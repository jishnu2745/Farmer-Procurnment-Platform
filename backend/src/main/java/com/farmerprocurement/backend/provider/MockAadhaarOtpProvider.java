package com.farmerprocurement.backend.provider;

import org.springframework.stereotype.Component;

@Component
public class MockAadhaarOtpProvider implements AadhaarOtpProvider {

    private static final String DEMO_OTP = "123456";

    @Override
    public boolean sendOtp(String aadhaarNumber) {

        /*
         * DEMO ONLY
         *
         * In a real implementation, this request would be
         * sent to an authorized Aadhaar authentication provider.
         */

        return true;
    }

    @Override
    public boolean verifyOtp(String aadhaarNumber, String otp) {

        /*
         * DEMO ONLY
         *
         * For testing:
         * OTP = 123456
         */

        return DEMO_OTP.equals(otp);
    }
}