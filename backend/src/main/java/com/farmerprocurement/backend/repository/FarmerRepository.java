package com.farmerprocurement.backend.repository;

import com.farmerprocurement.backend.entity.Farmer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FarmerRepository extends JpaRepository<Farmer, Long> {

    Optional<Farmer> findByMobileNumber(String mobileNumber);

    Optional<Farmer> findByAadhaarNumber(String aadhaarNumber);

    boolean existsByMobileNumber(String mobileNumber);

    boolean existsByAadhaarNumber(String aadhaarNumber);
}