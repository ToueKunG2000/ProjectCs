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

    public Vessel() {
    }

    public Vessel(String vesNameTh, Integer bigMachineUsed, Integer bigMachineNum, Integer electricMachineUsed, Integer electricMachineNum, Integer airConditioner, Integer airCompressor, Integer freezer, Integer shipEngine, Integer pump, Integer rudder, Integer waterPurifier, Integer dieselOilSeparator, Integer gear, String monthYear, BigDecimal getOfDiesel, BigDecimal getOfBenzine, BigDecimal getOfGadinia, BigDecimal getOfTellus, BigDecimal getOfFreshWater, BigDecimal giveOfDiesel, BigDecimal giveOfBenzine, BigDecimal giveOfGadinia, BigDecimal giveOfTellus, BigDecimal giveOfFreshWater, BigDecimal leftOfDiesel, BigDecimal leftOfBenzine, BigDecimal leftOfGadinia, BigDecimal leftOfTellus, BigDecimal leftOfFreshWater, BigDecimal usedOfDiesel, BigDecimal usedOfBenzine, BigDecimal usedOfGadinia, BigDecimal usedOfTellus, BigDecimal usedOfFreshWater) {
        this.vesNameTh = vesNameTh;
        this.bigMachineUsed = bigMachineUsed;
        this.bigMachineNum = bigMachineNum;
        this.electricMachineUsed = electricMachineUsed;
        this.electricMachineNum = electricMachineNum;
        this.airConditioner = airConditioner;
        this.airCompressor = airCompressor;
        this.freezer = freezer;
        this.shipEngine = shipEngine;
        this.pump = pump;
        this.rudder = rudder;
        this.waterPurifier = waterPurifier;
        this.dieselOilSeparator = dieselOilSeparator;
        this.gear = gear;
        this.monthYear = monthYear;
        this.getOfDiesel = getOfDiesel;
        this.getOfBenzine = getOfBenzine;
        this.getOfGadinia = getOfGadinia;
        this.getOfTellus = getOfTellus;
        this.getOfFreshWater = getOfFreshWater;
        this.giveOfDiesel = giveOfDiesel;
        this.giveOfBenzine = giveOfBenzine;
        this.giveOfGadinia = giveOfGadinia;
        this.giveOfTellus = giveOfTellus;
        this.giveOfFreshWater = giveOfFreshWater;
        this.leftOfDiesel = leftOfDiesel;
        this.leftOfBenzine = leftOfBenzine;
        this.leftOfGadinia = leftOfGadinia;
        this.leftOfTellus = leftOfTellus;
        this.leftOfFreshWater = leftOfFreshWater;
        this.usedOfDiesel = usedOfDiesel;
        this.usedOfBenzine = usedOfBenzine;
        this.usedOfGadinia = usedOfGadinia;
        this.usedOfTellus = usedOfTellus;
        this.usedOfFreshWater = usedOfFreshWater;
    }
}
