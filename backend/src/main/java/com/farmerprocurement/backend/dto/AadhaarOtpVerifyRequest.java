
package com.farmerprocurement.backend.dto;

public class AadhaarOtpVerifyRequest {

    private String aadhaarNumber;
    private String otp;

    public AadhaarOtpVerifyRequest() {
    }

    public String getAadhaarNumber() {
        return aadhaarNumber;
    }

    public void setAadhaarNumber(String aadhaarNumber) {
        this.aadhaarNumber = aadhaarNumber;
    }

    public String getOtp() {
        return otp;
    }

    public void setOtp(String otp) {
        this.otp = otp;
    }
}