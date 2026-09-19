package com.farmerprocurement.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class LandRequest {

    @NotBlank
    private String surveyNumber;

    private String subDivisionNumber;

    @NotNull
    private Double landArea;

    @NotBlank
    private String landUnit;

    @NotBlank
    private String ownershipType;

    @NotBlank
    private String crop;

    // getters and setters

    public String getSurveyNumber() {
        return surveyNumber;
    }

    public void setSurveyNumber(String surveyNumber) {
        this.surveyNumber = surveyNumber;
    }

    public String getSubDivisionNumber() {
        return subDivisionNumber;
    }

    public void setSubDivisionNumber(String subDivisionNumber) {
        this.subDivisionNumber = subDivisionNumber;
    }

    public Double getLandArea() {
        return landArea;
    }

    public void setLandArea(Double landArea) {
        this.landArea = landArea;
    }

    public String getLandUnit() {
        return landUnit;
    }

    public void setLandUnit(String landUnit) {
        this.landUnit = landUnit;
    }

    public String getOwnershipType() {
        return ownershipType;
    }

    public void setOwnershipType(String ownershipType) {
        this.ownershipType = ownershipType;
    }

    public String getCrop() {
        return crop;
    }

    public void setCrop(String crop) {
        this.crop = crop;
    }
}