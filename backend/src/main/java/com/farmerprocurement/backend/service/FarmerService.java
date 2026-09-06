package com.farmerprocurement.backend.service;

import com.farmerprocurement.backend.dto.FarmerRegistrationRequest;
import com.farmerprocurement.backend.entity.Farmer;
import com.farmerprocurement.backend.repository.FarmerRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class FarmerService {

    private final FarmerRepository farmerRepository;

    public FarmerService(FarmerRepository farmerRepository) {
        this.farmerRepository = farmerRepository;
    }

    @Transactional
    public Farmer registerFarmer(FarmerRegistrationRequest request) {

        // Check whether mobile number already exists
        if (farmerRepository.existsByMobileNumber(request.getMobileNumber())) {
            throw new RuntimeException(
                "A farmer with this mobile number already exists"
            );
        }

        // Check whether Aadhaar already exists
        if (farmerRepository.existsByAadhaarNumber(request.getAadhaarNumber())) {
            throw new RuntimeException(
                "A farmer with this Aadhaar number already exists"
            );
        }

        // Create Farmer entity
        Farmer farmer = new Farmer();

        farmer.setName(request.getName());
        farmer.setMobileNumber(request.getMobileNumber());
        farmer.setAadhaarNumber(request.getAadhaarNumber());

        // Save farmer
        return farmerRepository.save(farmer);
    }
}