package com.farmerprocurement.backend.repository;

import com.farmerprocurement.backend.entity.OtpPurpose;
import com.farmerprocurement.backend.entity.OtpVerification;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OtpRepository extends JpaRepository<OtpVerification, Long> {

    Optional<OtpVerification> findTopByMobileNumberAndPurposeAndVerifiedFalseOrderByCreatedAtDesc(
            String mobileNumber,
            OtpPurpose purpose
    );
}