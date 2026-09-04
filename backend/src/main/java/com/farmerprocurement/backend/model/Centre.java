package com.farmerprocurement.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "centres")
public class Centre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String location;

    @Column(name = "avg_processing_minutes")
    private Integer avgProcessingMinutes;

    @Column(name = "daily_capacity")
    private Integer dailyCapacity;

    @Column(name = "active_counters")
    private Integer activeCounters;

    @Column(name = "supported_crops")
    private String supportedCrops;

    @Column(nullable = false)
    private boolean active = true;


    public Centre() {
    }

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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Integer getAvgProcessingMinutes() {
        return avgProcessingMinutes;
    }

    public void setAvgProcessingMinutes(Integer avgProcessingMinutes) {
        this.avgProcessingMinutes = avgProcessingMinutes;
    }

    public Integer getDailyCapacity() {
        return dailyCapacity;
    }

    public void setDailyCapacity(Integer dailyCapacity) {
        this.dailyCapacity = dailyCapacity;
    }

    public Integer getActiveCounters() {
        return activeCounters;
    }

    public void setActiveCounters(Integer activeCounters) {
        this.activeCounters = activeCounters;
    }

    public String getSupportedCrops() {
        return supportedCrops;
    }

    public void setSupportedCrops(String supportedCrops) {
        this.supportedCrops = supportedCrops;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}