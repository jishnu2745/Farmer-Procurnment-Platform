package com.farmerprocurement.backend.repository;

import com.farmerprocurement.backend.entity.BankAccountDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankAccountRepository
        extends JpaRepository<BankAccountDetails, Long> {
}