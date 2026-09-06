package com.farmerprocurement.backend.dto;

public class AadhaarOtpResponse {

    private boolean success;
    private String message;

    public AadhaarOtpResponse() {
    }

    public AadhaarOtpResponse(boolean success, String message) {
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