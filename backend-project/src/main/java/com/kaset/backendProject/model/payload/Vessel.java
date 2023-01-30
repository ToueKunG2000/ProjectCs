package com.kaset.backendProject.model.payload;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class Vessel {
    private Integer vesId;
    private String vesNameTh;
    private Integer bigMachineUsed;
    private Integer bigMachineNum;
    private Integer electricMachineUsed;
    private Integer electricMachineNum;
    private Integer airConditioner;
    private Integer airCompressor;
    private Integer freezer;
    private Integer shipEngine;
    private Integer pump;
    private Integer rudder;
    private Integer waterPurifier;
    private Integer dieselOilSeparator;
    private Integer gear;
    private Integer currentPosition;
    private String monthYear;
    private String counsel;
    private BigDecimal getOfDiesel;
    private BigDecimal getOfBenzine;
    private BigDecimal getOfGadinia;
    private BigDecimal getOfTellus;
    private BigDecimal getOfFreshWater;
    private BigDecimal giveOfDiesel;
    private BigDecimal giveOfBenzine;
    private BigDecimal giveOfGadinia;
    private BigDecimal giveOfTellus;
    private BigDecimal giveOfFreshWater;
    private BigDecimal leftOfDiesel;
    private BigDecimal leftOfBenzine;
    private BigDecimal leftOfGadinia;
    private BigDecimal leftOfTellus;
    private BigDecimal leftOfFreshWater;
    private BigDecimal usedOfDiesel;
    private BigDecimal usedOfBenzine;
    private BigDecimal usedOfGadinia;
    private BigDecimal usedOfTellus;
    private BigDecimal usedOfFreshWater;
}
