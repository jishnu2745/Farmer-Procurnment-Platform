package com.farmerprocurement.backend.service;

import com.farmerprocurement.backend.dto.FarmerRegistrationRequest;
import com.farmerprocurement.backend.entity.BankAccountDetails;
import com.farmerprocurement.backend.entity.FarmerDetails;
import com.farmerprocurement.backend.entity.LandDetails;
import com.farmerprocurement.backend.repository.BankAccountRepository;
import com.farmerprocurement.backend.repository.FarmerRepository;
import com.farmerprocurement.backend.repository.LandRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class FarmerService {

    private final FarmerRepository farmerRepository;
    private final LandRepository landRepository;
    private final BankAccountRepository bankAccountRepository;


    // Constructor Injection
    public FarmerService(
            FarmerRepository farmerRepository,
            LandRepository landRepository,
            BankAccountRepository bankAccountRepository) {

        this.farmerRepository = farmerRepository;
        this.landRepository = landRepository;
        this.bankAccountRepository = bankAccountRepository;
    }


    @Transactional
    public FarmerDetails registerFarmer(
            FarmerRegistrationRequest request) {

        // ==========================================
        // 1. Check Mobile Number
        // ==========================================

        if (farmerRepository.existsByMobileNumber(
                request.getMobileNumber())) {

            throw new RuntimeException(
                    "A farmer with this mobile number already exists");
        }


        // ==========================================
        // 2. Check Aadhaar Number
        // ==========================================

        if (farmerRepository.existsByAadhaarNumber(
                request.getAadhaarNumber())) {

            throw new RuntimeException(
                    "A farmer with this Aadhaar number already exists");
        }


        // ==========================================
        // 3. Create Farmer
        // ==========================================

        FarmerDetails farmer = new FarmerDetails();

        farmer.setName(request.getName());
        farmer.setAadhaarNumber(request.getAadhaarNumber());
        farmer.setDateOfBirth(request.getDateOfBirth());
        farmer.setMobileNumber(request.getMobileNumber());
        farmer.setAlternativeMobileNumber(
                request.getAlternativeMobileNumber());
        farmer.setVillage(request.getVillage());
        farmer.setDistrict(request.getDistrict());
        farmer.setState(request.getState());


        // ==========================================
        // 4. Save Farmer
        // ==========================================

        FarmerDetails savedFarmer =
                farmerRepository.save(farmer);


        // ==========================================
        // 5. Create Land Details
        // ==========================================

        LandDetails land = new LandDetails();

        land.setSurveyNumber(
                request.getLand().getSurveyNumber());

        land.setSubDivisionNumber(
                request.getLand().getSubDivisionNumber());

        land.setLandArea(
                request.getLand().getLandArea());

        land.setLandUnit(
                request.getLand().getLandUnit());

        land.setOwnershipType(
                request.getLand().getOwnershipType());


        // Connect land to farmer
        land.setFarmer(savedFarmer);


        // Save land
        landRepository.save(land);


        // ==========================================
        // 6. Create Bank Account Details
        // ==========================================

        BankAccountDetails bankAccount =
                new BankAccountDetails();

        bankAccount.setAccountHolderName(
                request.getBankAccount().getAccountHolderName());

        bankAccount.setBankName(
                request.getBankAccount().getBankName());

        bankAccount.setBranchName(
                request.getBankAccount().getBranchName());

        bankAccount.setIfscCode(
                request.getBankAccount().getIfscCode());

        bankAccount.setAccountNumber(
                request.getBankAccount().getAccountNumber());


        // Connect bank account to farmer
        bankAccount.setFarmer(savedFarmer);


        // Save bank account
        bankAccountRepository.save(bankAccount);


        // ==========================================
        // 7. Return Farmer
        // ==========================================

        return savedFarmer;
    }
}