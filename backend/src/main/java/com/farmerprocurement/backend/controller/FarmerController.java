package com.farmerprocurement.backend.controller;

import com.farmerprocurement.backend.dto.FarmerRegistrationRequest;
import com.farmerprocurement.backend.entity.Farmer;
import com.farmerprocurement.backend.service.FarmerService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/farmers")
@CrossOrigin(origins = "http://localhost:3000")
public class FarmerController {

    private final FarmerService farmerService;

    public FarmerController(FarmerService farmerService) {
        this.farmerService = farmerService;
    }

    @PostMapping("/register")
    public ResponseEntity<Farmer> registerFarmer(
            @Valid @RequestBody FarmerRegistrationRequest request) {

        Farmer farmer = farmerService.registerFarmer(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(farmer);
    }
}