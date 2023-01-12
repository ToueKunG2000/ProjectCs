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
}
