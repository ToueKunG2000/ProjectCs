package com.kaset.backendProject.repositoryImpl;

import com.kaset.backendProject.model.entity.TbVessels;
import com.kaset.backendProject.model.payload.AddVesselPayload;
import com.kaset.backendProject.model.payload.UpdateVesselPayload;
import com.kaset.backendProject.model.payload.Vessel;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
@Log4j2
public class CustomVesselRepositoryImpl implements CustomVesselRepository{

    @PersistenceContext
    private EntityManager entityManager;
    @Modifying
    @Transactional
    public void updateToTbVessel(Vessel vessel){
        String sql = "UPDATE TB_VESSELS SET air_compressor = :airCompressor,"+
                " air_conditioner = :airConditioner, big_machine_used = :bigMachineUsed, "+
                " current_position = :currentPosition, diesel_oil_separator = :dieselOilSeparator, "+
                " gear = :gear, pump = :pump, rudder = :rudder, freezer = :freezer, "+
                " month_year = :monthYear, "+
                " electric_machine_used = :electricMachineUsed, "+
                " water_purifier = :waterPurifier, ship_engine = :shipEngine,"+
                " get_of_benzine = :getOfBenzine, get_of_diesel = :getOfDiesel, "+
                " get_of_gadinia = :getOfGadinia, get_of_tellus = :getOfTellus, "+
                " get_of_fresh_water = :getOfFreshWater, "+
                " give_of_benzine = :giveOfBenzine, give_of_diesel = :giveOfDiesel, "+
                " give_of_gadinia = :giveOfGadinir, give_of_tellus = :giveOfTellus, "+
                " give_of_fresh_water = :giveOfFreshWater, used_of_benzine = :usedOfBenzine, "+
                " used_of_diesel = :usedOfDiesel, used_of_gadinia = :usedOfGadinia, "+
                " used_of_tellus = :usedOfTellus, used_of_fresh_water = :usedOfFreshWater"+
                " WHERE ves_id = :vesId ";
        Query query = entityManager.createNativeQuery(sql);
        query.setParameter("vesId",vessel.getVesId());
        query.setParameter("monthYear",vessel.getMonthYear());
        query.setParameter("currentPosition",vessel.getCurrentPosition());
        query.setParameter("electricMachineUsed",vessel.getElectricMachineUsed());
        query.setParameter("bigMachineUsed",vessel.getBigMachineUsed());

        query.setParameter("airCompressor",vessel.getAirCompressor());
        query.setParameter("airConditioner",vessel.getAirConditioner());
        query.setParameter("waterPurifier",vessel.getWaterPurifier());
        query.setParameter("shipEngine",vessel.getShipEngine());
        query.setParameter("dieselOilSeparator",vessel.getDieselOilSeparator());
        query.setParameter("pump",vessel.getPump());
        query.setParameter("gear",vessel.getGear());
        query.setParameter("freezer",vessel.getFreezer());
        query.setParameter("rudder",vessel.getRudder());
//        รับมาจากฝั่ง
        query.setParameter("getOfBenzine",vessel.getGetOfBenzine());
        query.setParameter("getOfDiesel",vessel.getGetOfDiesel());
        query.setParameter("getOfGadinia",vessel.getGetOfGadinia());
        query.setParameter("getOfTellus",vessel.getGetOfTellus());
        query.setParameter("getOfFreshWater",vessel.getGetOfFreshWater());
//        ให้เรือลำอื่น
        query.setParameter("giveOfBenzine",vessel.getGiveOfBenzine());
        query.setParameter("giveOfDiesel",vessel.getGiveOfDiesel());
        query.setParameter("giveOfGadinir",vessel.getGiveOfGadinia());
        query.setParameter("giveOfTellus",vessel.getGiveOfTellus());
        query.setParameter("giveOfFreshWater",vessel.getGiveOfFreshWater());
//        ใช้ไป
        query.setParameter("usedOfBenzine",vessel.getUsedOfBenzine());
        query.setParameter("usedOfDiesel",vessel.getUsedOfDiesel());
        query.setParameter("usedOfGadinia",vessel.getUsedOfGadinia());
        query.setParameter("usedOfTellus",vessel.getUsedOfTellus());
        query.setParameter("usedOfFreshWater",vessel.getUsedOfFreshWater());
        query.executeUpdate();

    }

    @Modifying
    @Transactional
    public Integer insertNewVessel(AddVesselPayload addVesselPayload){
        String sql = "INSERT INTO TB_VESSELS OUTPUT (inserted.ves_id) VALUES(:vesName, :bigMachineNum, :electricMachineNum,0,0," +
                "0,0,0,0,0," +
                "0,0,0,0,0," +
                "0,0,0,0,0," +
                "0,0,0,0," +
                "null,null,1,1,0," +
                "0,0,0,0,0," +
                "0,0,0,0,:vesPhoto,null) ";
        Query query = entityManager.createNativeQuery(sql);
        query.setParameter("vesName",addVesselPayload.getVesName());
        query.setParameter("bigMachineNum",addVesselPayload.getBigMachineNum());
        query.setParameter("electricMachineNum",addVesselPayload.getElectricMachineNum());
        query.setParameter("vesPhoto",addVesselPayload.getVesPhoto());
        return (Integer) query.getSingleResult();
    }

    @Modifying
    @Transactional
    public void resetToTbVessel(Vessel vessel){
        String sql = "UPDATE TB_VESSELS SET air_compressor = :airCompressor,"+
                " air_conditioner = :airConditioner, big_machine_used = :bigMachineUsed, "+
                " current_position = :currentPosition, diesel_oil_separator = :dieselOilSeparator, "+
                " gear = :gear, pump = :pump, rudder = :rudder, freezer = :freezer, "+
                " month_year = :monthYear, counsel = :counsel, "+
                " electric_machine_used = :electricMachineUsed, "+
                " water_purifier = :waterPurifier, ship_engine = :shipEngine,"+
                " get_of_benzine = :getOfBenzine, get_of_diesel = :getOfDiesel, "+
                " get_of_gadinia = :getOfGadinia, get_of_tellus = :getOfTellus, "+
                " get_of_fresh_water = :getOfFreshWater, "+
                " give_of_benzine = :giveOfBenzine, give_of_diesel = :giveOfDiesel, "+
                " give_of_gadinia = :giveOfGadinir, give_of_tellus = :giveOfTellus, "+
                " give_of_fresh_water = :giveOfFreshWater, used_of_benzine = :usedOfBenzine, "+
                " used_of_diesel = :usedOfDiesel, used_of_gadinia = :usedOfGadinia, "+
                " used_of_tellus = :usedOfTellus, used_of_fresh_water = :usedOfFreshWater," +
                " left_of_tellus = :leftOfTellus, left_of_fresh_water = :leftOfFreshWater," +
                " left_of_benzine = :leftOfBenzine, left_of_diesel = :leftOfDiesel," +
                " left_of_gadinia = :leftOfGadinia, reject_by_positionId = null "+
                " WHERE ves_id = :vesId ";
        Query query = entityManager.createNativeQuery(sql);
        query.setParameter("vesId",vessel.getVesId());
        query.setParameter("monthYear",null);
        query.setParameter("currentPosition",1);
        query.setParameter("electricMachineUsed",0);
        query.setParameter("bigMachineUsed",0);
        query.setParameter("counsel",null);

        query.setParameter("airCompressor",0);
        query.setParameter("airConditioner",0);
        query.setParameter("waterPurifier",0);
        query.setParameter("shipEngine",0);
        query.setParameter("dieselOilSeparator",0);
        query.setParameter("pump",0);
        query.setParameter("gear",0);
        query.setParameter("freezer",0);
        query.setParameter("rudder",0);
//        รับมาจากฝั่ง
        query.setParameter("getOfBenzine",0);
        query.setParameter("getOfDiesel",0);
        query.setParameter("getOfGadinia",0);
        query.setParameter("getOfTellus",0);
        query.setParameter("getOfFreshWater",0);
//        ให้เรือลำอื่น
        query.setParameter("giveOfBenzine",0);
        query.setParameter("giveOfDiesel",0);
        query.setParameter("giveOfGadinir",0);
        query.setParameter("giveOfTellus",0);
        query.setParameter("giveOfFreshWater",0);
//        ใช้ไป
        query.setParameter("usedOfBenzine",0);
        query.setParameter("usedOfDiesel",0);
        query.setParameter("usedOfGadinia",0);
        query.setParameter("usedOfTellus",0);
        query.setParameter("usedOfFreshWater",0);

        query.setParameter("leftOfBenzine",vessel.getLeftOfBenzine());
        query.setParameter("leftOfDiesel",vessel.getLeftOfDiesel());
        query.setParameter("leftOfGadinia",vessel.getLeftOfGadinia());
        query.setParameter("leftOfTellus",vessel.getLeftOfTellus());
        query.setParameter("leftOfFreshWater",vessel.getLeftOfFreshWater());
        query.executeUpdate();

    }

    @Modifying
    @Transactional
    public void changeStatusVessel(Vessel vessel){
        String sql = "UPDATE TB_VESSELS SET air_compressor = :airCompressor,"+
                " air_conditioner = :airConditioner, big_machine_used = :bigMachineUsed, "+
                " current_position = :currentPosition, diesel_oil_separator = :dieselOilSeparator, "+
                " gear = :gear, pump = :pump, rudder = :rudder, freezer = :freezer, "+
                " month_year = :monthYear, counsel = :counsel, "+
                " electric_machine_used = :electricMachineUsed, "+
                " water_purifier = :waterPurifier, ship_engine = :shipEngine,"+
                " get_of_benzine = :getOfBenzine, get_of_diesel = :getOfDiesel, "+
                " get_of_gadinia = :getOfGadinia, get_of_tellus = :getOfTellus, "+
                " get_of_fresh_water = :getOfFreshWater, "+
                " give_of_benzine = :giveOfBenzine, give_of_diesel = :giveOfDiesel, "+
                " give_of_gadinia = :giveOfGadinir, give_of_tellus = :giveOfTellus, "+
                " give_of_fresh_water = :giveOfFreshWater, used_of_benzine = :usedOfBenzine, "+
                " used_of_diesel = :usedOfDiesel, used_of_gadinia = :usedOfGadinia, "+
                " used_of_tellus = :usedOfTellus, used_of_fresh_water = :usedOfFreshWater, ves_status = :vesStatus" +
                " WHERE ves_id = :vesId ";
        Query query = entityManager.createNativeQuery(sql);
        query.setParameter("vesId",vessel.getVesId());
        query.setParameter("monthYear",null);
        query.setParameter("currentPosition",1);
        query.setParameter("electricMachineUsed",0);
        query.setParameter("bigMachineUsed",0);
        query.setParameter("counsel",null);

        query.setParameter("airCompressor",0);
        query.setParameter("airConditioner",0);
        query.setParameter("waterPurifier",0);
        query.setParameter("shipEngine",0);
        query.setParameter("dieselOilSeparator",0);
        query.setParameter("pump",0);
        query.setParameter("gear",0);
        query.setParameter("freezer",0);
        query.setParameter("rudder",0);
//        รับมาจากฝั่ง
        query.setParameter("getOfBenzine",0);
        query.setParameter("getOfDiesel",0);
        query.setParameter("getOfGadinia",0);
        query.setParameter("getOfTellus",0);
        query.setParameter("getOfFreshWater",0);
//        ให้เรือลำอื่น
        query.setParameter("giveOfBenzine",0);
        query.setParameter("giveOfDiesel",0);
        query.setParameter("giveOfGadinir",0);
        query.setParameter("giveOfTellus",0);
        query.setParameter("giveOfFreshWater",0);
//        ใช้ไป
        query.setParameter("usedOfBenzine",0);
        query.setParameter("usedOfDiesel",0);
        query.setParameter("usedOfGadinia",0);
        query.setParameter("usedOfTellus",0);
        query.setParameter("usedOfFreshWater",0);

        query.setParameter("vesStatus",vessel.getVesStatus());
//        query.setParameter("leftOfBenzine",vessel.getLeftOfBenzine());
//        query.setParameter("leftOfDiesel",vessel.getLeftOfDiesel());
//        query.setParameter("leftOfGadinia",vessel.getLeftOfGadinia());
//        query.setParameter("leftOfTellus",vessel.getLeftOfTellus());
//        query.setParameter("leftOfFreshWater",vessel.getLeftOfFreshWater());
        query.executeUpdate();

    }

    @Modifying
    @Transactional
    public void updateApproveInTbVessel(UpdateVesselPayload approveForm){
        String sql = "UPDATE TB_VESSELS SET current_position = :currentPosition, " +
                " counsel = :counsel, reject_by_positionId = :rejectByPositionId WHERE ves_id = :vesId";
        Query query = entityManager.createNativeQuery(sql);
        query.setParameter("currentPosition",approveForm.getCurrentPosition());
        query.setParameter("vesId",approveForm.getVesId());
        query.setParameter("counsel",approveForm.getCounsel());
        query.setParameter("rejectByPositionId",approveForm.getRejectByPositionId());
        query.executeUpdate();
    }


}
