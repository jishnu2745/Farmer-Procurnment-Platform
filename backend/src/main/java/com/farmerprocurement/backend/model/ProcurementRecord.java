package com.farmerprocurement.backend.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "procurement_records")
public class ProcurementRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "queue_entry_id", nullable = false, unique = true)
    private QueueEntry queueEntry;

    @Column(nullable = false)
    private String crop;

    @Column(name = "quantity_accepted", nullable = false)
    private Double quantityAccepted;

    @Column(name = "quality_grade")
    private String qualityGrade;

    @Column(name = "price_per_unit")
    private Double pricePerUnit;

    @Column(name = "total_amount")
    private Double totalAmount;

    @Column(nullable = false)
    private String status;

    @Column(name = "procured_at")
    private LocalDateTime procuredAt;


    public ProcurementRecord() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public QueueEntry getQueueEntry() {
        return queueEntry;
    }

    public void setQueueEntry(QueueEntry queueEntry) {
        this.queueEntry = queueEntry;
    }

    public String getCrop() {
        return crop;
    }

    public void setCrop(String crop) {
        this.crop = crop;
    }

    public Double getQuantityAccepted() {
        return quantityAccepted;
    }

    public void setQuantityAccepted(Double quantityAccepted) {
        this.quantityAccepted = quantityAccepted;
    }

    public String getQualityGrade() {
        return qualityGrade;
    }

    public void setQualityGrade(String qualityGrade) {
        this.qualityGrade = qualityGrade;
    }

    public Double getPricePerUnit() {
        return pricePerUnit;
    }

    public void setPricePerUnit(Double pricePerUnit) {
        this.pricePerUnit = pricePerUnit;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getProcuredAt() {
        return procuredAt;
    }

    public void setProcuredAt(LocalDateTime procuredAt) {
        this.procuredAt = procuredAt;
    }
}