package com.farmerprocurement.backend.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "aadhaar_verifications")
public class AadhaarVerification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 12)
    private String aadhaarNumber;

    @Column(nullable = false)
    private boolean otpSent;

    @Column(nullable = false)
    private boolean verified;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    private LocalDateTime otpSentAt;

    private LocalDateTime verifiedAt;

    public AadhaarVerification() {
        this.createdAt = LocalDateTime.now();
        this.otpSent = false;
        this.verified = false;
    }

    public Long getId() {
        return id;
    }

    public String getAadhaarNumber() {
        return aadhaarNumber;
    }

    public void setAadhaarNumber(String aadhaarNumber) {
        this.aadhaarNumber = aadhaarNumber;
    }

    public boolean isOtpSent() {
        return otpSent;
    }

    public void setOtpSent(boolean otpSent) {
        this.otpSent = otpSent;
    }

    public boolean isVerified() {
        return verified;
    }

    public void setVerified(boolean verified) {
        this.verified = verified;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getOtpSentAt() {
        return otpSentAt;
    }

    public void setOtpSentAt(LocalDateTime otpSentAt) {
        this.otpSentAt = otpSentAt;
    }

    public LocalDateTime getVerifiedAt() {
        return verifiedAt;
    }

    public void setVerifiedAt(LocalDateTime verifiedAt) {
        this.verifiedAt = verifiedAt;
    }
}