package com.kaset.backendProject.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.kaset.backendProject.model.payload.DropdownPayload;
import com.kaset.backendProject.model.payload.Vessel;
import com.kaset.backendProject.model.payload.VesselStatus;
import jakarta.persistence.*;
import lombok.Data;


import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "TB_VESSELS", schema = "dbo", catalog = "Navsho")
@NamedNativeQueries({
        @NamedNativeQuery(
                name = "TbVessels.getVesselByVesId",
                query = "SELECT ves_id, ves_name, current_position, ves_status, month_year, counsel," +
                        "left_of_benzine, left_of_diesel, left_of_gadinia, left_of_tellus, left_of_fresh_water, " +
                        " CAST(ves_photo as VARCHAR(max)) as vesPhoto " +
                        " FROM TB_VESSELS WHERE ves_id = :vesId",
                resultSetMapping = "VesselDisplay"
        ),
        @NamedNativeQuery(
                name = "TbVessels.getAllVessel",
                query = "SELECT ves_id, ves_name, current_position, ves_status, month_year, counsel, " +
                        "left_of_benzine, left_of_diesel, left_of_gadinia, left_of_tellus, left_of_fresh_water, " +
                        " CAST(ves_photo as VARCHAR(max)) as vesPhoto" +
                        " FROM TB_VESSELS ",
                resultSetMapping = "VesselDisplay"
        ),
        @NamedNativeQuery(
                name = "TbVessels.getDropdownVessel",
                query = "SELECT ves_id, ves_name FROM TB_VESSELS",
                resultSetMapping = "DropdownMapping"
        ),
        @NamedNativeQuery(
                name = "TbVessels.getStatusVessel",
                query = "SELECT TV.ves_id, TV.ves_status , TV.ves_name," +
                        "(SELECT concat(TP.rank_th,' ',first_name,' ',last_name)  FROM TB_USERS TU INNER JOIN TB_POSITIONS TP on TP.position_id = TU.position_id WHERE TU.position_id = 3 and TV.ves_id = TU.ves_id) " +
                        " as name, CAST(ves_photo as VARCHAR(max)) as vesPhoto, " +
                        "(SELECT TU.user_id FROM TB_USERS TU WHERE TU.position_id = 1 and TV.ves_id = TU.ves_id) as crewId, " +
                        "(SELECT TU.user_id FROM TB_USERS TU WHERE TU.position_id = 2 and TV.ves_id = TU.ves_id) as engineerId," +
                        "(SELECT TU.user_id FROM TB_USERS TU WHERE TU.position_id = 3 and TV.ves_id = TU.ves_id) as commanderId " +
                        "FROM TB_VESSELS TV ",
                resultSetMapping = "VesselStatus"
        ),
        @NamedNativeQuery(
                name = "TbVessels.getVesselInfo",
                query = "SELECT ves_id, ves_name, big_machine_num, electric_machine_num, big_machine_used, electric_machine_used," +
                        " air_conditioner, air_compressor, freezer, ship_engine, pump," +
                        " rudder, water_purifier,diesel_oil_separator, gear, "+
                        " get_of_diesel, get_of_benzine, get_of_tellus, get_of_gadinia, get_of_fresh_water, " +
                        " give_of_diesel, give_of_benzine, give_of_tellus, give_of_gadinia, give_of_fresh_water," +
                        " used_of_diesel, used_of_benzine, used_of_tellus, used_of_gadinia, used_of_fresh_water," +
                        " left_of_diesel, left_of_benzine, left_of_tellus, left_of_gadinia, left_of_fresh_water," +
                        " month_year, counsel, current_position " +
                        " FROM TB_VESSELS WHERE ves_id = :vesId ",
                resultSetMapping = "VesselInfo"
        )
})
@SqlResultSetMappings(
        {
            @SqlResultSetMapping(name = "VesselDisplay",classes = {
                @ConstructorResult(targetClass = Vessel.class, columns = {
                        @ColumnResult(name = "ves_id"),
                        @ColumnResult(name = "ves_name"),
                        @ColumnResult(name = "current_position"),
                        @ColumnResult(name = "month_year"),
                        @ColumnResult(name = "counsel"),
                        @ColumnResult(name = "left_of_diesel"),
                        @ColumnResult(name = "left_of_benzine"),
                        @ColumnResult(name = "left_of_gadinia"),
                        @ColumnResult(name = "left_of_tellus"),
                        @ColumnResult(name = "ves_status"),
                        @ColumnResult(name = "left_of_fresh_water"),
                        @ColumnResult(name = "vesPhoto",type = String.class),

                })
            }),
            @SqlResultSetMapping(name = "DropdownMapping",classes = {
                    @ConstructorResult(targetClass = DropdownPayload.class, columns = {
                            @ColumnResult(name = "ves_id",type = Integer.class),
                            @ColumnResult(name = "ves_name",type = String.class),
                    })
            }),
            @SqlResultSetMapping(name = "VesselStatus",classes = {
                    @ConstructorResult(targetClass = VesselStatus.class, columns = {
                            @ColumnResult(name = "ves_id",type = Integer.class),
                            @ColumnResult(name = "ves_name",type = String.class),
                            @ColumnResult(name = "name",type = String.class),
                            @ColumnResult(name = "crewId",type = Integer.class),
                            @ColumnResult(name = "engineerId",type = Integer.class),
                            @ColumnResult(name = "commanderId",type = Integer.class),
                            @ColumnResult(name = "ves_status",type = Integer.class),
                            @ColumnResult(name = "vesPhoto",type = String.class),
                    })
            }),
            @SqlResultSetMapping(name = "VesselInfo", classes = {
                    @ConstructorResult(targetClass = Vessel.class, columns = {
                        @ColumnResult(name = "ves_id"),
                        @ColumnResult(name = "ves_name"),
                        @ColumnResult(name = "big_machine_used"),
                        @ColumnResult(name = "big_machine_num"),
                        @ColumnResult(name = "electric_machine_used"),
                        @ColumnResult(name = "electric_machine_num"),
                        @ColumnResult(name = "air_conditioner"),
                        @ColumnResult(name = "air_compressor"),
                        @ColumnResult(name = "freezer"),
                        @ColumnResult(name = "ship_engine"),
                        @ColumnResult(name = "pump"),
                        @ColumnResult(name = "rudder"),
                        @ColumnResult(name = "water_purifier"),
                        @ColumnResult(name = "diesel_oil_separator"),
                        @ColumnResult(name = "gear"),
                        @ColumnResult(name = "current_position"),
                        @ColumnResult(name = "month_year"),
                        @ColumnResult(name = "counsel"),
                        @ColumnResult(name = "get_of_benzine"),
                        @ColumnResult(name = "get_of_diesel"),
                        @ColumnResult(name = "get_of_gadinia"),
                        @ColumnResult(name = "get_of_tellus"),
                        @ColumnResult(name = "get_of_fresh_water"),
                        @ColumnResult(name = "give_of_benzine"),
                        @ColumnResult(name = "give_of_diesel"),
                        @ColumnResult(name = "give_of_gadinia"),
                        @ColumnResult(name = "give_of_tellus"),
                        @ColumnResult(name = "give_of_fresh_water"),
                        @ColumnResult(name = "left_of_benzine"),
                        @ColumnResult(name = "left_of_diesel"),
                        @ColumnResult(name = "left_of_gadinia"),
                        @ColumnResult(name = "left_of_tellus"),
                        @ColumnResult(name = "left_of_fresh_water"),
                        @ColumnResult(name = "used_of_benzine"),
                        @ColumnResult(name = "used_of_diesel"),
                        @ColumnResult(name = "used_of_gadinia"),
                        @ColumnResult(name = "used_of_tellus"),
                        @ColumnResult(name = "used_of_fresh_water"),
                    } )
            })
        }
)
public class TbVessels implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ves_id")
    private int vesId;
    @Basic
    @Column(name = "ves_name")
    private String vesName;
    @Basic
    @Column(name = "big_machine_num")
    private int bigMachineNum;
    @Basic
    @Column(name = "electric_machine_num")
    private int electricMachineNum;
    @Basic
    @Column(name = "big_machine_used")
    private int bigMachineUsed;
    @Basic
    @Column(name = "electric_machine_used")
    private int electricMachineUsed;
    @Basic
    @Column(name = "air_conditioner")
    private int airConditioner;
    @Basic
    @Column(name = "air_compressor")
    private int airCompressor;
    @Basic
    @Column(name = "freezer")
    private int freezer;
    @Basic
    @Column(name = "ship_engine")
    private int shipEngine;
    @Basic
    @Column(name = "pump")
    private int pump;
    @Basic
    @Column(name = "rudder")
    private int rudder;
    @Basic
    @Column(name = "water_purifier")
    private int waterPurifier;
    @Basic
    @Column(name = "diesel_oil_separator")
    private int dieselOilSeparator;
    @Basic
    @Column(name = "gear")
    private int gear;
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
    @Basic
    @Column(name = "ves_photo")
    private String vesPhoto;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TbVessels tbVessels)) return false;
        return getVesId() == tbVessels.getVesId() && getBigMachineNum() == tbVessels.getBigMachineNum() && getElectricMachineNum() == tbVessels.getElectricMachineNum() && getBigMachineUsed() == tbVessels.getBigMachineUsed() && getElectricMachineUsed() == tbVessels.getElectricMachineUsed() && getAirConditioner() == tbVessels.getAirConditioner() && getAirCompressor() == tbVessels.getAirCompressor() && getFreezer() == tbVessels.getFreezer() && getShipEngine() == tbVessels.getShipEngine() && getPump() == tbVessels.getPump() && getRudder() == tbVessels.getRudder() && getWaterPurifier() == tbVessels.getWaterPurifier() && getDieselOilSeparator() == tbVessels.getDieselOilSeparator() && getGear() == tbVessels.getGear() && Objects.equals(getVesName(), tbVessels.getVesName()) && Objects.equals(getGetOfDiesel(), tbVessels.getGetOfDiesel()) && Objects.equals(getGetOfBenzine(), tbVessels.getGetOfBenzine()) && Objects.equals(getGetOfGadinia(), tbVessels.getGetOfGadinia()) && Objects.equals(getGetOfTellus(), tbVessels.getGetOfTellus()) && Objects.equals(getGetOfFreshWater(), tbVessels.getGetOfFreshWater()) && Objects.equals(getGiveOfDiesel(), tbVessels.getGiveOfDiesel()) && Objects.equals(getGiveOfBenzine(), tbVessels.getGiveOfBenzine()) && Objects.equals(getGiveOfGadinia(), tbVessels.getGiveOfGadinia()) && Objects.equals(getGiveOfTellus(), tbVessels.getGiveOfTellus()) && Objects.equals(getGiveOfFreshWater(), tbVessels.getGiveOfFreshWater()) && Objects.equals(getMonthYear(), tbVessels.getMonthYear()) && Objects.equals(getCounsel(), tbVessels.getCounsel()) && Objects.equals(getCurrentPosition(), tbVessels.getCurrentPosition()) && Objects.equals(getVesStatus(), tbVessels.getVesStatus()) && Objects.equals(getUsedOfDiesel(), tbVessels.getUsedOfDiesel()) && Objects.equals(getUsedOfBenzine(), tbVessels.getUsedOfBenzine()) && Objects.equals(getUsedOfGadinia(), tbVessels.getUsedOfGadinia()) && Objects.equals(getUsedOfTellus(), tbVessels.getUsedOfTellus()) && Objects.equals(getUsedOfFreshWater(), tbVessels.getUsedOfFreshWater()) && Objects.equals(getLeftOfDiesel(), tbVessels.getLeftOfDiesel()) && Objects.equals(getLeftOfBenzine(), tbVessels.getLeftOfBenzine()) && Objects.equals(getLeftOfGadinia(), tbVessels.getLeftOfGadinia()) && Objects.equals(getLeftOfTellus(), tbVessels.getLeftOfTellus()) && Objects.equals(getLeftOfFreshWater(), tbVessels.getLeftOfFreshWater()) && Objects.equals(getVesPhoto(), tbVessels.getVesPhoto());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getVesId(), getVesName(), getBigMachineNum(), getElectricMachineNum(), getBigMachineUsed(), getElectricMachineUsed(), getAirConditioner(), getAirCompressor(), getFreezer(), getShipEngine(), getPump(), getRudder(), getWaterPurifier(), getDieselOilSeparator(), getGear(), getGetOfDiesel(), getGetOfBenzine(), getGetOfGadinia(), getGetOfTellus(), getGetOfFreshWater(), getGiveOfDiesel(), getGiveOfBenzine(), getGiveOfGadinia(), getGiveOfTellus(), getGiveOfFreshWater(), getMonthYear(), getCounsel(), getCurrentPosition(), getVesStatus(), getUsedOfDiesel(), getUsedOfBenzine(), getUsedOfGadinia(), getUsedOfTellus(), getUsedOfFreshWater(), getLeftOfDiesel(), getLeftOfBenzine(), getLeftOfGadinia(), getLeftOfTellus(), getLeftOfFreshWater(), getVesPhoto());
    }
}
