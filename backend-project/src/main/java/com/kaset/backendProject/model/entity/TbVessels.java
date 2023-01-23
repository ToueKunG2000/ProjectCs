package com.kaset.backendProject.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.Objects;

@Entity
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "TB_VESSELS", schema = "dbo", catalog = "Navsho")
public class TbVessels implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ves_id", nullable = false)
    private int vesId;
    @Basic
    @Column(name = "ves_name_th", nullable = true, length = 20)
    private String vesNameTh;
    @Basic
    @Column(name = "big_machine_num", nullable = true)
    private Integer bigMachineNum;
    @Basic
    @Column(name = "electric_machine_num", nullable = true)
    private Integer electricMachineNum;
    @Basic
    @Column(name = "big_machine_used", nullable = true)
    private Integer bigMachineUsed;
    @Basic
    @Column(name = "electric_machine_used", nullable = true)
    private Integer electricMachineUsed;
    @Basic
    @Column(name = "air_conditioner", nullable = true)
    private Integer airConditioner;
    @Basic
    @Column(name = "air_compressor", nullable = true)
    private Integer airCompressor;
    @Basic
    @Column(name = "freezer", nullable = true)
    private Integer freezer;
    @Basic
    @Column(name = "ship_engine", nullable = true)
    private Integer shipEngine;
    @Basic
    @Column(name = "pump", nullable = true)
    private Integer pump;
    @Basic
    @Column(name = "rudder", nullable = true)
    private Integer rudder;
    @Basic
    @Column(name = "water_purifier", nullable = true)
    private Integer waterPurifier;
    @Basic
    @Column(name = "diesel_oil_separator", nullable = true)
    private Integer dieselOilSeparator;
    @Basic
    @Column(name = "gear", nullable = true)
    private Integer gear;
    @Basic
    @Column(name = "get_of_diesel", nullable = true, precision = 0)
    private BigInteger getOfDiesel;
    @Basic
    @Column(name = "get_of_benzine", nullable = true, precision = 0)
    private BigInteger getOfBenzine;
    @Basic
    @Column(name = "get_of_gadinia", nullable = true, precision = 0)
    private BigInteger getOfGadinia;
    @Basic
    @Column(name = "get_of_tellus", nullable = true, precision = 0)
    private BigInteger getOfTellus;
    @Basic
    @Column(name = "get_of_fresh_water", nullable = true, precision = 0)
    private BigInteger getOfFreshWater;
    @Basic
    @Column(name = "give_of_diesel", nullable = true, precision = 0)
    private BigInteger giveOfDiesel;
    @Basic
    @Column(name = "give_of_benzine", nullable = true, precision = 0)
    private BigInteger giveOfBenzine;
    @Basic
    @Column(name = "give_of_gadinia", nullable = true, precision = 0)
    private BigInteger giveOfGadinia;
    @Basic
    @Column(name = "give_of_tellus", nullable = true, precision = 0)
    private BigInteger giveOfTellus;
    @Basic
    @Column(name = "give_of_fresh_water", nullable = true, precision = 0)
    private BigInteger giveOfFreshWater;
    @Basic
    @Column(name = "month_year", nullable = true, length = 20)
    private String monthYear;
    @Basic
    @Column(name = "counsel", nullable = true, length = 255)
    private String counsel;
    @Basic
    @Column(name = "current_position", nullable = true)
    private Integer currentPosition;
    @Basic
    @Column(name = "ves_status", nullable = true)
    private Integer vesStatus;
    @Basic
    @Column(name = "used_of_diesel", nullable = true, precision = 0)
    private BigInteger usedOfDiesel;
    @Basic
    @Column(name = "used_of_benzine", nullable = true, precision = 0)
    private BigInteger usedOfBenzine;
    @Basic
    @Column(name = "used_of_gadinia", nullable = true, precision = 0)
    private BigInteger usedOfGadinia;
    @Basic
    @Column(name = "used_of_tellus", nullable = true, precision = 0)
    private BigInteger usedOfTellus;
    @Basic
    @Column(name = "used_of_fresh_water", nullable = true, precision = 0)
    private BigInteger usedOfFreshWater;
    @Basic
    @Column(name = "left_of_diesel", nullable = true, precision = 0)
    private BigInteger leftOfDiesel;
    @Basic
    @Column(name = "left_of_benzine", nullable = true, precision = 0)
    private BigInteger leftOfBenzine;
    @Basic
    @Column(name = "left_of_gadinia", nullable = true, precision = 0)
    private BigInteger leftOfGadinia;
    @Basic
    @Column(name = "left_of_tellus", nullable = true, precision = 0)
    private BigInteger leftOfTellus;
    @Basic
    @Column(name = "left_of_fresh_water", nullable = true, precision = 0)
    private BigInteger leftOfFreshWater;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TbVessels tbVessels)) return false;
        return getVesId() == tbVessels.getVesId() && Objects.equals(getVesNameTh(), tbVessels.getVesNameTh()) && Objects.equals(getBigMachineNum(), tbVessels.getBigMachineNum()) && Objects.equals(getElectricMachineNum(), tbVessels.getElectricMachineNum()) && Objects.equals(getBigMachineUsed(), tbVessels.getBigMachineUsed()) && Objects.equals(getElectricMachineUsed(), tbVessels.getElectricMachineUsed()) && Objects.equals(getAirConditioner(), tbVessels.getAirConditioner()) && Objects.equals(getAirCompressor(), tbVessels.getAirCompressor()) && Objects.equals(getFreezer(), tbVessels.getFreezer()) && Objects.equals(getShipEngine(), tbVessels.getShipEngine()) && Objects.equals(getPump(), tbVessels.getPump()) && Objects.equals(getRudder(), tbVessels.getRudder()) && Objects.equals(getWaterPurifier(), tbVessels.getWaterPurifier()) && Objects.equals(getDieselOilSeparator(), tbVessels.getDieselOilSeparator()) && Objects.equals(getGear(), tbVessels.getGear()) && Objects.equals(getGetOfDiesel(), tbVessels.getGetOfDiesel()) && Objects.equals(getGetOfBenzine(), tbVessels.getGetOfBenzine()) && Objects.equals(getGetOfGadinia(), tbVessels.getGetOfGadinia()) && Objects.equals(getGetOfTellus(), tbVessels.getGetOfTellus()) && Objects.equals(getGetOfFreshWater(), tbVessels.getGetOfFreshWater()) && Objects.equals(getGiveOfDiesel(), tbVessels.getGiveOfDiesel()) && Objects.equals(getGiveOfBenzine(), tbVessels.getGiveOfBenzine()) && Objects.equals(getGiveOfGadinia(), tbVessels.getGiveOfGadinia()) && Objects.equals(getGiveOfTellus(), tbVessels.getGiveOfTellus()) && Objects.equals(getGiveOfFreshWater(), tbVessels.getGiveOfFreshWater()) && Objects.equals(getMonthYear(), tbVessels.getMonthYear()) && Objects.equals(getCounsel(), tbVessels.getCounsel()) && Objects.equals(getCurrentPosition(), tbVessels.getCurrentPosition()) && Objects.equals(getVesStatus(), tbVessels.getVesStatus()) && Objects.equals(getUsedOfDiesel(), tbVessels.getUsedOfDiesel()) && Objects.equals(getUsedOfBenzine(), tbVessels.getUsedOfBenzine()) && Objects.equals(getUsedOfGadinia(), tbVessels.getUsedOfGadinia()) && Objects.equals(getUsedOfTellus(), tbVessels.getUsedOfTellus()) && Objects.equals(getUsedOfFreshWater(), tbVessels.getUsedOfFreshWater()) && Objects.equals(getLeftOfDiesel(), tbVessels.getLeftOfDiesel()) && Objects.equals(getLeftOfBenzine(), tbVessels.getLeftOfBenzine()) && Objects.equals(getLeftOfGadinia(), tbVessels.getLeftOfGadinia()) && Objects.equals(getLeftOfTellus(), tbVessels.getLeftOfTellus()) && Objects.equals(getLeftOfFreshWater(), tbVessels.getLeftOfFreshWater());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getVesId(), getVesNameTh(), getBigMachineNum(), getElectricMachineNum(), getBigMachineUsed(), getElectricMachineUsed(), getAirConditioner(), getAirCompressor(), getFreezer(), getShipEngine(), getPump(), getRudder(), getWaterPurifier(), getDieselOilSeparator(), getGear(), getGetOfDiesel(), getGetOfBenzine(), getGetOfGadinia(), getGetOfTellus(), getGetOfFreshWater(), getGiveOfDiesel(), getGiveOfBenzine(), getGiveOfGadinia(), getGiveOfTellus(), getGiveOfFreshWater(), getMonthYear(), getCounsel(), getCurrentPosition(), getVesStatus(), getUsedOfDiesel(), getUsedOfBenzine(), getUsedOfGadinia(), getUsedOfTellus(), getUsedOfFreshWater(), getLeftOfDiesel(), getLeftOfBenzine(), getLeftOfGadinia(), getLeftOfTellus(), getLeftOfFreshWater());
    }
}
