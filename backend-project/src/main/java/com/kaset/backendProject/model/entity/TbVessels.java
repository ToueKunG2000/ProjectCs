package com.kaset.backendProject.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigInteger;
import java.util.Objects;

@Entity
@Data
@Table(name = "TB_VESSELS", schema = "dbo", catalog = "Navsho")
public class TbVessels {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ves_id")
    private int vesId;
    @Basic
    @Column(name = "ves_name_en")
    private String vesNameEn;
    @Basic
    @Column(name = "ves_name_th")
    private String vesNameTh;
    @Basic
    @Column(name = "big_machine_num")
    private Integer bigMachineNum;
    @Basic
    @Column(name = "electric_machine_num")
    private Integer electricMachineNum;
    @Basic
    @Column(name = "big_machine_used")
    private Integer bigMachineUsed;
    @Basic
    @Column(name = "electric_machine_used")
    private Integer electricMachineUsed;
    @Basic
    @Column(name = "air_conditioner")
    private Integer airConditioner;
    @Basic
    @Column(name = "air_compressor")
    private Integer airCompressor;
    @Basic
    @Column(name = "freezer")
    private Integer freezer;
    @Basic
    @Column(name = "ship_engine")
    private Integer shipEngine;
    @Basic
    @Column(name = "pump")
    private Integer pump;
    @Basic
    @Column(name = "rudder")
    private Integer rudder;
    @Basic
    @Column(name = "water_purifier")
    private Integer waterPurifier;
    @Basic
    @Column(name = "diesel_oil_separator")
    private Integer dieselOilSeparator;
    @Basic
    @Column(name = "gear")
    private Integer gear;
    @Basic
    @Column(name = "get_of_diesel")
    private BigInteger getOfDiesel;
    @Basic
    @Column(name = "get_of_benzine")
    private BigInteger getOfBenzine;
    @Basic
    @Column(name = "get_of_gadinia")
    private BigInteger getOfGadinia;
    @Basic
    @Column(name = "get_of_tellus")
    private BigInteger getOfTellus;
    @Basic
    @Column(name = "get_of_fresh_water")
    private BigInteger getOfFreshWater;
    @Basic
    @Column(name = "give_of_diesel")
    private BigInteger giveOfDiesel;
    @Basic
    @Column(name = "give_of_benzine")
    private BigInteger giveOfBenzine;
    @Basic
    @Column(name = "give_of_gadinia")
    private BigInteger giveOfGadinia;
    @Basic
    @Column(name = "give_of_tellus")
    private BigInteger giveOfTellus;
    @Basic
    @Column(name = "give_of_fresh_water")
    private BigInteger giveOfFreshWater;
    @Basic
    @Column(name = "month_year")
    private String monthYear;
    @Basic
    @Column(name = "counsel")
    private String counsel;
    @Basic
    @Column(name = "current_role")
    private Integer currentRole;
    @Basic
    @Column(name = "ce_id")
    private Integer ceId;
    @Basic
    @Column(name = "co_id")
    private Integer coId;
    @Basic
    @Column(name = "tech_id")
    private Integer techId;
    @Basic
    @Column(name = "cdr_id")
    private Integer cdrId;
    @Basic
    @Column(name = "current_position")
    private Integer currentPosition;
    @Basic
    @Column(name = "ves_status")
    private Integer vesStatus;
    @Basic
    @Column(name = "used_of_diesel")
    private BigInteger usedOfDiesel;
    @Basic
    @Column(name = "used_of_benzine")
    private BigInteger usedOfBenzine;
    @Basic
    @Column(name = "used_of_gadinia")
    private BigInteger usedOfGadinia;
    @Basic
    @Column(name = "used_of_tellus")
    private BigInteger usedOfTellus;
    @Basic
    @Column(name = "used_of_fresh_water")
    private BigInteger usedOfFreshWater;
    @Basic
    @Column(name = "left_of_diesel")
    private BigInteger leftOfDiesel;
    @Basic
    @Column(name = "left_of_benzine")
    private BigInteger leftOfBenzine;
    @Basic
    @Column(name = "left_of_gadinia")
    private BigInteger leftOfGadinia;
    @Basic
    @Column(name = "left_of_tellus")
    private BigInteger leftOfTellus;
    @Basic
    @Column(name = "left_of_fresh_water")
    private BigInteger leftOfFreshWater;

    public int getVesId() {
        return vesId;
    }

    public void setVesId(int vesId) {
        this.vesId = vesId;
    }

    public String getVesNameEn() {
        return vesNameEn;
    }

    public void setVesNameEn(String vesNameEn) {
        this.vesNameEn = vesNameEn;
    }

    public String getVesNameTh() {
        return vesNameTh;
    }

    public void setVesNameTh(String vesNameTh) {
        this.vesNameTh = vesNameTh;
    }

    public Integer getBigMachineNum() {
        return bigMachineNum;
    }

    public void setBigMachineNum(Integer bigMachineNum) {
        this.bigMachineNum = bigMachineNum;
    }

    public Integer getElectricMachineNum() {
        return electricMachineNum;
    }

    public void setElectricMachineNum(Integer electricMachineNum) {
        this.electricMachineNum = electricMachineNum;
    }

    public Integer getBigMachineUsed() {
        return bigMachineUsed;
    }

    public void setBigMachineUsed(Integer bigMachineUsed) {
        this.bigMachineUsed = bigMachineUsed;
    }

    public Integer getElectricMachineUsed() {
        return electricMachineUsed;
    }

    public void setElectricMachineUsed(Integer electricMachineUsed) {
        this.electricMachineUsed = electricMachineUsed;
    }

    public Integer getAirConditioner() {
        return airConditioner;
    }

    public void setAirConditioner(Integer airConditioner) {
        this.airConditioner = airConditioner;
    }

    public Integer getAirCompressor() {
        return airCompressor;
    }

    public void setAirCompressor(Integer airCompressor) {
        this.airCompressor = airCompressor;
    }

    public Integer getFreezer() {
        return freezer;
    }

    public void setFreezer(Integer freezer) {
        this.freezer = freezer;
    }

    public Integer getShipEngine() {
        return shipEngine;
    }

    public void setShipEngine(Integer shipEngine) {
        this.shipEngine = shipEngine;
    }

    public Integer getPump() {
        return pump;
    }

    public void setPump(Integer pump) {
        this.pump = pump;
    }

    public Integer getRudder() {
        return rudder;
    }

    public void setRudder(Integer rudder) {
        this.rudder = rudder;
    }

    public Integer getWaterPurifier() {
        return waterPurifier;
    }

    public void setWaterPurifier(Integer waterPurifier) {
        this.waterPurifier = waterPurifier;
    }

    public Integer getDieselOilSeparator() {
        return dieselOilSeparator;
    }

    public void setDieselOilSeparator(Integer dieselOilSeparator) {
        this.dieselOilSeparator = dieselOilSeparator;
    }

    public Integer getGear() {
        return gear;
    }

    public void setGear(Integer gear) {
        this.gear = gear;
    }

    public BigInteger getGetOfDiesel() {
        return getOfDiesel;
    }

    public void setGetOfDiesel(BigInteger getOfDiesel) {
        this.getOfDiesel = getOfDiesel;
    }

    public BigInteger getGetOfBenzine() {
        return getOfBenzine;
    }

    public void setGetOfBenzine(BigInteger getOfBenzine) {
        this.getOfBenzine = getOfBenzine;
    }

    public BigInteger getGetOfGadinia() {
        return getOfGadinia;
    }

    public void setGetOfGadinia(BigInteger getOfGadinia) {
        this.getOfGadinia = getOfGadinia;
    }

    public BigInteger getGetOfTellus() {
        return getOfTellus;
    }

    public void setGetOfTellus(BigInteger getOfTellus) {
        this.getOfTellus = getOfTellus;
    }

    public BigInteger getGetOfFreshWater() {
        return getOfFreshWater;
    }

    public void setGetOfFreshWater(BigInteger getOfFreshWater) {
        this.getOfFreshWater = getOfFreshWater;
    }

    public BigInteger getGiveOfDiesel() {
        return giveOfDiesel;
    }

    public void setGiveOfDiesel(BigInteger giveOfDiesel) {
        this.giveOfDiesel = giveOfDiesel;
    }

    public BigInteger getGiveOfBenzine() {
        return giveOfBenzine;
    }

    public void setGiveOfBenzine(BigInteger giveOfBenzine) {
        this.giveOfBenzine = giveOfBenzine;
    }

    public BigInteger getGiveOfGadinia() {
        return giveOfGadinia;
    }

    public void setGiveOfGadinia(BigInteger giveOfGadinia) {
        this.giveOfGadinia = giveOfGadinia;
    }

    public BigInteger getGiveOfTellus() {
        return giveOfTellus;
    }

    public void setGiveOfTellus(BigInteger giveOfTellus) {
        this.giveOfTellus = giveOfTellus;
    }

    public BigInteger getGiveOfFreshWater() {
        return giveOfFreshWater;
    }

    public void setGiveOfFreshWater(BigInteger giveOfFreshWater) {
        this.giveOfFreshWater = giveOfFreshWater;
    }

    public String getMonthYear() {
        return monthYear;
    }

    public void setMonthYear(String monthYear) {
        this.monthYear = monthYear;
    }

    public String getCounsel() {
        return counsel;
    }

    public void setCounsel(String counsel) {
        this.counsel = counsel;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TbVessels tbVessels)) return false;
        return getVesId() == tbVessels.getVesId() && Objects.equals(getVesNameEn(), tbVessels.getVesNameEn()) && Objects.equals(getVesNameTh(), tbVessels.getVesNameTh()) && Objects.equals(getBigMachineNum(), tbVessels.getBigMachineNum()) && Objects.equals(getElectricMachineNum(), tbVessels.getElectricMachineNum()) && Objects.equals(getBigMachineUsed(), tbVessels.getBigMachineUsed()) && Objects.equals(getElectricMachineUsed(), tbVessels.getElectricMachineUsed()) && Objects.equals(getAirConditioner(), tbVessels.getAirConditioner()) && Objects.equals(getAirCompressor(), tbVessels.getAirCompressor()) && Objects.equals(getFreezer(), tbVessels.getFreezer()) && Objects.equals(getShipEngine(), tbVessels.getShipEngine()) && Objects.equals(getPump(), tbVessels.getPump()) && Objects.equals(getRudder(), tbVessels.getRudder()) && Objects.equals(getWaterPurifier(), tbVessels.getWaterPurifier()) && Objects.equals(getDieselOilSeparator(), tbVessels.getDieselOilSeparator()) && Objects.equals(getGear(), tbVessels.getGear()) && Objects.equals(getGetOfDiesel(), tbVessels.getGetOfDiesel()) && Objects.equals(getGetOfBenzine(), tbVessels.getGetOfBenzine()) && Objects.equals(getGetOfGadinia(), tbVessels.getGetOfGadinia()) && Objects.equals(getGetOfTellus(), tbVessels.getGetOfTellus()) && Objects.equals(getGetOfFreshWater(), tbVessels.getGetOfFreshWater()) && Objects.equals(getGiveOfDiesel(), tbVessels.getGiveOfDiesel()) && Objects.equals(getGiveOfBenzine(), tbVessels.getGiveOfBenzine()) && Objects.equals(getGiveOfGadinia(), tbVessels.getGiveOfGadinia()) && Objects.equals(getGiveOfTellus(), tbVessels.getGiveOfTellus()) && Objects.equals(getGiveOfFreshWater(), tbVessels.getGiveOfFreshWater()) && Objects.equals(getMonthYear(), tbVessels.getMonthYear()) && Objects.equals(getCounsel(), tbVessels.getCounsel()) && Objects.equals(getCurrentRole(), tbVessels.getCurrentRole()) && Objects.equals(getCeId(), tbVessels.getCeId()) && Objects.equals(getCoId(), tbVessels.getCoId()) && Objects.equals(getTechId(), tbVessels.getTechId()) && Objects.equals(getCdrId(), tbVessels.getCdrId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getVesId(), getVesNameEn(), getVesNameTh(), getBigMachineNum(), getElectricMachineNum(), getBigMachineUsed(), getElectricMachineUsed(), getAirConditioner(), getAirCompressor(), getFreezer(), getShipEngine(), getPump(), getRudder(), getWaterPurifier(), getDieselOilSeparator(), getGear(), getGetOfDiesel(), getGetOfBenzine(), getGetOfGadinia(), getGetOfTellus(), getGetOfFreshWater(), getGiveOfDiesel(), getGiveOfBenzine(), getGiveOfGadinia(), getGiveOfTellus(), getGiveOfFreshWater(), getMonthYear(), getCounsel(), getCurrentRole(), getCeId(), getCoId(), getTechId(), getCdrId());
    }

    public Integer getCurrentPosition() {
        return currentPosition;
    }

    public void setCurrentPosition(Integer currentPosition) {
        this.currentPosition = currentPosition;
    }

    public Integer getVesStatus() {
        return vesStatus;
    }

    public void setVesStatus(Integer vesStatus) {
        this.vesStatus = vesStatus;
    }

    public BigInteger getUsedOfDiesel() {
        return usedOfDiesel;
    }

    public void setUsedOfDiesel(BigInteger usedOfDiesel) {
        this.usedOfDiesel = usedOfDiesel;
    }

    public BigInteger getUsedOfBenzine() {
        return usedOfBenzine;
    }

    public void setUsedOfBenzine(BigInteger usedOfBenzine) {
        this.usedOfBenzine = usedOfBenzine;
    }

    public BigInteger getUsedOfGadinia() {
        return usedOfGadinia;
    }

    public void setUsedOfGadinia(BigInteger usedOfGadinia) {
        this.usedOfGadinia = usedOfGadinia;
    }

    public BigInteger getUsedOfTellus() {
        return usedOfTellus;
    }

    public void setUsedOfTellus(BigInteger usedOfTellus) {
        this.usedOfTellus = usedOfTellus;
    }

    public BigInteger getUsedOfFreshWater() {
        return usedOfFreshWater;
    }

    public void setUsedOfFreshWater(BigInteger usedOfFreshWater) {
        this.usedOfFreshWater = usedOfFreshWater;
    }

    public BigInteger getLeftOfDiesel() {
        return leftOfDiesel;
    }

    public void setLeftOfDiesel(BigInteger leftOfDiesel) {
        this.leftOfDiesel = leftOfDiesel;
    }

    public BigInteger getLeftOfBenzine() {
        return leftOfBenzine;
    }

    public void setLeftOfBenzine(BigInteger leftOfBenzine) {
        this.leftOfBenzine = leftOfBenzine;
    }

    public BigInteger getLeftOfGadinia() {
        return leftOfGadinia;
    }

    public void setLeftOfGadinia(BigInteger leftOfGadinia) {
        this.leftOfGadinia = leftOfGadinia;
    }

    public BigInteger getLeftOfTellus() {
        return leftOfTellus;
    }

    public void setLeftOfTellus(BigInteger leftOfTellus) {
        this.leftOfTellus = leftOfTellus;
    }

    public BigInteger getLeftOfFreshWater() {
        return leftOfFreshWater;
    }

    public void setLeftOfFreshWater(BigInteger leftOfFreshWater) {
        this.leftOfFreshWater = leftOfFreshWater;
    }
}
