package com.farmerprocurement.backend.repository;

import com.farmerprocurement.backend.entity.LandDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LandRepository
        extends JpaRepository<LandDetails, Long> {
}