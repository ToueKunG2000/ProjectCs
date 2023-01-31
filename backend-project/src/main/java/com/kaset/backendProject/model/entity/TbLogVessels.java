package com.kaset.backendProject.model.entity;

import com.kaset.backendProject.model.payload.Vessel;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Objects;

@Entity
@Data
@Table(name = "TB_LOG_VESSELS", schema = "dbo", catalog = "Navsho")
@NamedNativeQueries(
    {
            @NamedNativeQuery(name = "TbLogVessels.findMonthYear",
                resultSetMapping = "monthYearList",
                query = "SELECT month_year FROM TB_LOG_VESSELS WHERE ves_id = :vesId"
            ),
            @NamedNativeQuery(name = "TbLogVessels.getDataLog",
                resultSetMapping = "LogVessel",
                query = "SELECT ves_name_th, big_machine_used, big_machine_num," +
                        " electric_machine_used, electric_machine_num, " +
                        "air_conditioner, air_compressor, freezer, ship_engine, pump, rudder," +
                        "water_purifier, diesel_oil_seperator, gear, " +
                        " month_year," +
                        " get_of_diesel ," +
                        "get_of_benzine, get_of_gadinia, get_of_tellus, get_of_fresh_water ," +
                        "give_of_diesel," +
                        "give_of_benzine, give_of_gadinia, give_of_tellus, give_of_fresh_water, left_of_diesel," +
                        "left_of_benzine, left_of_gadinia, left_of_tellus, left_of_fresh_water," +
                        " used_of_diesel, used_of_benzine" +
                        ",used_of_gadinia, used_of_tellus, used_of_fresh_water" +
                        "  FROM TB_LOG_VESSELS" +
                        " WHERE ves_id = :vesId AND month_year LIKE :monthYear "
            )

    }
)
@SqlResultSetMappings({
    @SqlResultSetMapping(name = "monthYearList", columns = {
            @ColumnResult(name = "month_year", type = String.class)
    }),
    @SqlResultSetMapping(name = "LogVessel",classes = {
            @ConstructorResult(targetClass = Vessel.class, columns = {
                    @ColumnResult(name = "ves_name_th",type = String.class),
                    @ColumnResult(name = "big_machine_used",type = Integer.class),
                    @ColumnResult(name = "big_machine_num",type = Integer.class),
                    @ColumnResult(name = "electric_machine_used",type = Integer.class),
                    @ColumnResult(name = "electric_machine_num",type = Integer.class),
                    @ColumnResult(name = "air_conditioner",type = Integer.class),
                    @ColumnResult(name = "air_compressor",type = Integer.class),
                    @ColumnResult(name = "freezer",type = Integer.class),
                    @ColumnResult(name = "ship_engine",type = Integer.class),
                    @ColumnResult(name = "pump",type = Integer.class),
                    @ColumnResult(name = "rudder",type = Integer.class),
                    @ColumnResult(name = "water_purifier",type = Integer.class),
                    @ColumnResult(name = "diesel_oil_seperator",type = Integer.class),
                    @ColumnResult(name = "gear",type = Integer.class),
                    @ColumnResult(name = "month_year",type = String.class),
                    @ColumnResult(name = "get_of_diesel",type = BigDecimal.class),
                    @ColumnResult(name = "get_of_benzine",type = BigDecimal.class),
                    @ColumnResult(name = "get_of_gadinia",type = BigDecimal.class),
                    @ColumnResult(name = "get_of_tellus",type = BigDecimal.class),
                    @ColumnResult(name = "get_of_fresh_water",type = BigDecimal.class),
                    @ColumnResult(name = "give_of_diesel",type = BigDecimal.class),
                    @ColumnResult(name = "give_of_benzine",type = BigDecimal.class),
                    @ColumnResult(name = "give_of_gadinia",type = BigDecimal.class),
                    @ColumnResult(name = "give_of_tellus",type = BigDecimal.class),
                    @ColumnResult(name = "give_of_fresh_water",type = BigDecimal.class),
                    @ColumnResult(name = "left_of_diesel",type = BigDecimal.class),
                    @ColumnResult(name = "left_of_benzine",type = BigDecimal.class),
                    @ColumnResult(name = "left_of_gadinia",type = BigDecimal.class),
                    @ColumnResult(name = "left_of_tellus",type = BigDecimal.class),
                    @ColumnResult(name = "left_of_fresh_water",type = BigDecimal.class),
                    @ColumnResult(name = "used_of_diesel",type = BigDecimal.class),
                    @ColumnResult(name = "used_of_benzine",type = BigDecimal.class),
                    @ColumnResult(name = "used_of_gadinia",type = BigDecimal.class),
                    @ColumnResult(name = "used_of_tellus",type = BigDecimal.class),
                    @ColumnResult(name = "used_of_fresh_water",type = BigDecimal.class),

            })
    })
})
public class TbLogVessels {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "log_id")
    private int logId;
    @Basic
    @Column(name = "ves_id")
    private Integer vesId;
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
    @Column(name = "diesel_oil_seperator")
    private Integer dieselOilSeperator;
    @Basic
    @Column(name = "gear")
    private Integer gear;
    @Basic
    @Column(name = "month_year")
    private String monthYear;
    @Basic
    @Column(name = "get_of_benzine")
    private BigInteger getOfBenzine;
    @Basic
    @Column(name = "get_of_diesel")
    private BigInteger getOfDiesel;
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
    @Column(name = "give_of_benzine")
    private BigInteger giveOfBenzine;
    @Basic
    @Column(name = "give_of_diesel")
    private BigInteger giveOfDiesel;
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
    @Column(name = "used_of_benzine")
    private BigInteger usedOfBenzine;
    @Basic
    @Column(name = "used_of_diesel")
    private BigInteger usedOfDiesel;
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
    @Column(name = "left_of_benzine")
    private BigInteger leftOfBenzine;
    @Basic
    @Column(name = "left_of_diesel")
    private BigInteger leftOfDiesel;
    @Basic
    @Column(name = "left_of_gadinia")
    private BigInteger leftOfGadinia;
    @Basic
    @Column(name = "left_of_tellus")
    private BigInteger leftOfTellus;
    @Basic
    @Column(name = "left_of_fresh_water")
    private BigInteger leftOfFreshWater;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TbLogVessels that)) return false;
        return getLogId() == that.getLogId() && Objects.equals(getVesId(), that.getVesId()) && Objects.equals(getVesNameTh(), that.getVesNameTh()) && Objects.equals(getBigMachineNum(), that.getBigMachineNum()) && Objects.equals(getElectricMachineNum(), that.getElectricMachineNum()) && Objects.equals(getBigMachineUsed(), that.getBigMachineUsed()) && Objects.equals(getElectricMachineUsed(), that.getElectricMachineUsed()) && Objects.equals(getAirConditioner(), that.getAirConditioner()) && Objects.equals(getAirCompressor(), that.getAirCompressor()) && Objects.equals(getFreezer(), that.getFreezer()) && Objects.equals(getShipEngine(), that.getShipEngine()) && Objects.equals(getPump(), that.getPump()) && Objects.equals(getRudder(), that.getRudder()) && Objects.equals(getWaterPurifier(), that.getWaterPurifier()) && Objects.equals(getDieselOilSeperator(), that.getDieselOilSeperator()) && Objects.equals(getGear(), that.getGear()) && Objects.equals(getMonthYear(), that.getMonthYear()) && Objects.equals(getGetOfBenzine(), that.getGetOfBenzine()) && Objects.equals(getGetOfDiesel(), that.getGetOfDiesel()) && Objects.equals(getGetOfGadinia(), that.getGetOfGadinia()) && Objects.equals(getGetOfTellus(), that.getGetOfTellus()) && Objects.equals(getGetOfFreshWater(), that.getGetOfFreshWater()) && Objects.equals(getGiveOfBenzine(), that.getGiveOfBenzine()) && Objects.equals(getGiveOfDiesel(), that.getGiveOfDiesel()) && Objects.equals(getGiveOfGadinia(), that.getGiveOfGadinia()) && Objects.equals(getGiveOfTellus(), that.getGiveOfTellus()) && Objects.equals(getGiveOfFreshWater(), that.getGiveOfFreshWater()) && Objects.equals(getUsedOfBenzine(), that.getUsedOfBenzine()) && Objects.equals(getUsedOfDiesel(), that.getUsedOfDiesel()) && Objects.equals(getUsedOfGadinia(), that.getUsedOfGadinia()) && Objects.equals(getUsedOfTellus(), that.getUsedOfTellus()) && Objects.equals(getUsedOfFreshWater(), that.getUsedOfFreshWater()) && Objects.equals(getLeftOfBenzine(), that.getLeftOfBenzine()) && Objects.equals(getLeftOfDiesel(), that.getLeftOfDiesel()) && Objects.equals(getLeftOfGadinia(), that.getLeftOfGadinia()) && Objects.equals(getLeftOfTellus(), that.getLeftOfTellus()) && Objects.equals(getLeftOfFreshWater(), that.getLeftOfFreshWater());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getLogId(), getVesId(), getVesNameTh(), getBigMachineNum(), getElectricMachineNum(), getBigMachineUsed(), getElectricMachineUsed(), getAirConditioner(), getAirCompressor(), getFreezer(), getShipEngine(), getPump(), getRudder(), getWaterPurifier(), getDieselOilSeperator(), getGear(), getMonthYear(), getGetOfBenzine(), getGetOfDiesel(), getGetOfGadinia(), getGetOfTellus(), getGetOfFreshWater(), getGiveOfBenzine(), getGiveOfDiesel(), getGiveOfGadinia(), getGiveOfTellus(), getGiveOfFreshWater(), getUsedOfBenzine(), getUsedOfDiesel(), getUsedOfGadinia(), getUsedOfTellus(), getUsedOfFreshWater(), getLeftOfBenzine(), getLeftOfDiesel(), getLeftOfGadinia(), getLeftOfTellus(), getLeftOfFreshWater());
    }
}
