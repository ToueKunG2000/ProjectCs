package com.kaset.backendProject.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.kaset.backendProject.model.payload.Vessel;
import jakarta.persistence.*;
import lombok.Data;


import java.io.Serializable;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Objects;

@Entity
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "TB_VESSELS", schema = "dbo", catalog = "Navsho")
@NamedNativeQueries({
        @NamedNativeQuery(
                name = "TbVessels.getVesselByVesId",
                query = "SELECT ves_id, ves_name_th, current_position, ves_status, month_year, counsel FROM TB_VESSELS WHERE ves_id = :vesId",
                resultSetMapping = "VesselDisplay"
        ),
        @NamedNativeQuery(
                name = "TbVessels.getAllVessel",
                query = "SELECT ves_id, ves_name_th, current_position, ves_status, month_year, counsel FROM TB_VESSELS ",
                resultSetMapping = "VesselDisplay"

        )
})
@SqlResultSetMappings(
        {@SqlResultSetMapping(name = "VesselDisplay",classes = {
                @ConstructorResult(targetClass = Vessel.class, columns = {
                        @ColumnResult(name = "ves_id"),
                        @ColumnResult(name = "ves_name_th"),
                        @ColumnResult(name = "current_position"),
                        @ColumnResult(name = "month_year"),
                        @ColumnResult(name = "counsel"),
                        @ColumnResult(name = "ves_status"),
                })
        })}
)
public class TbVessels implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ves_id")
    private int vesId;
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
    private BigDecimal getOfDiesel;
    @Basic
    @Column(name = "get_of_benzine")
    private BigDecimal getOfBenzine;
    @Basic
    @Column(name = "get_of_gadinia")
    private BigDecimal getOfGadinia;
    @Basic
    @Column(name = "get_of_tellus")
    private BigDecimal getOfTellus;
    @Basic
    @Column(name = "get_of_fresh_water")
    private BigDecimal getOfFreshWater;
    @Basic
    @Column(name = "give_of_diesel")
    private BigDecimal giveOfDiesel;
    @Basic
    @Column(name = "give_of_benzine")
    private BigDecimal giveOfBenzine;
    @Basic
    @Column(name = "give_of_gadinia")
    private BigDecimal giveOfGadinia;
    @Basic
    @Column(name = "give_of_tellus")
    private BigDecimal giveOfTellus;
    @Basic
    @Column(name = "give_of_fresh_water")
    private BigDecimal giveOfFreshWater;
    @Basic
    @Column(name = "month_year")
    private String monthYear;
    @Basic
    @Column(name = "counsel")
    private String counsel;
    @Basic
    @Column(name = "current_position")
    private Integer currentPosition;
    @Basic
    @Column(name = "ves_status")
    private Integer vesStatus;
    @Basic
    @Column(name = "used_of_diesel")
    private BigDecimal usedOfDiesel;
    @Basic
    @Column(name = "used_of_benzine")
    private BigDecimal usedOfBenzine;
    @Basic
    @Column(name = "used_of_gadinia")
    private BigDecimal usedOfGadinia;
    @Basic
    @Column(name = "used_of_tellus")
    private BigDecimal usedOfTellus;
    @Basic
    @Column(name = "used_of_fresh_water")
    private BigDecimal usedOfFreshWater;
    @Basic
    @Column(name = "left_of_diesel")
    private BigDecimal leftOfDiesel;
    @Basic
    @Column(name = "left_of_benzine")
    private BigDecimal leftOfBenzine;
    @Basic
    @Column(name = "left_of_gadinia")
    private BigDecimal leftOfGadinia;
    @Basic
    @Column(name = "left_of_tellus")
    private BigDecimal leftOfTellus;
    @Basic
    @Column(name = "left_of_fresh_water")
    private BigDecimal leftOfFreshWater;

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
