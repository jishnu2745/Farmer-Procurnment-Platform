package com.farmerprocurement.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "farmers")
public class Farmer {

     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true, length = 10)
    private String mobileNumber;

    @Column(nullable = false, unique = true, length = 12)
    private String aadhaarNumber;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private KycStatus kycStatus;

    @Column(nullable = false)
    private boolean mobileVerified;

    @Column(nullable = false)
    private boolean aadhaarVerified;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public Farmer() {
        this.kycStatus = KycStatus.PENDING;
        this.mobileVerified = false;
        this.aadhaarVerified = false;
        this.createdAt = LocalDateTime.now();
    }
    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getAadhaarNumber() {
        return aadhaarNumber;
    }

    public void setAadhaarNumber(String aadhaarNumber) {
        this.aadhaarNumber = aadhaarNumber;
    }

    public KycStatus getKycStatus() {
        return kycStatus;
    }

    public void setKycStatus(KycStatus kycStatus) {
        this.kycStatus = kycStatus;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public boolean isMobileVerified() {
    return mobileVerified;
}

public void setMobileVerified(boolean mobileVerified) {
    this.mobileVerified = mobileVerified;
}

public boolean isAadhaarVerified() {
    return aadhaarVerified;
}

public void setAadhaarVerified(boolean aadhaarVerified) {
    this.aadhaarVerified = aadhaarVerified;
}

}