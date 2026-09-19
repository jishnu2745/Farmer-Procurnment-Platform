package com.farmerprocurement.backend.repository;

import com.farmerprocurement.backend.entity.FarmerDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FarmerRepository extends JpaRepository<FarmerDetails, Long> {

    Optional<FarmerDetails> findByMobileNumber(String mobileNumber);

    Optional<FarmerDetails> findByAadhaarNumber(String aadhaarNumber);

    boolean existsByMobileNumber(String mobileNumber);

    boolean existsByAadhaarNumber(String aadhaarNumber);
}