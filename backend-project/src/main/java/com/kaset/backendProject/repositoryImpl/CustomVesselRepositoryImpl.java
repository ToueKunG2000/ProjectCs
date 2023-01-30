package com.kaset.backendProject.repositoryImpl;

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
    public void resetToTbVessel(Vessel vessel){
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
                " used_of_tellus = :usedOfTellus, used_of_fresh_water = :usedOfFreshWater," +
                " left_of_tellus = :leftOfTellus, left_of_fresh_water = :leftOfFreshWater," +
                " left_of_benzine = :leftOfBenzine, left_of_diesel = :leftOfDiesel," +
                " left_of_gadinia = :leftOfGadinia"+
                " WHERE ves_id = :vesId ";
        Query query = entityManager.createNativeQuery(sql);
        query.setParameter("vesId",vessel.getVesId());
        query.setParameter("monthYear",null);
        query.setParameter("currentPosition",1);
        query.setParameter("electricMachineUsed",null);
        query.setParameter("bigMachineUsed",null);

        query.setParameter("airCompressor",null);
        query.setParameter("airConditioner",null);
        query.setParameter("waterPurifier",null);
        query.setParameter("shipEngine",null);
        query.setParameter("dieselOilSeparator",null);
        query.setParameter("pump",null);
        query.setParameter("gear",null);
        query.setParameter("freezer",null);
        query.setParameter("rudder",null);
//        รับมาจากฝั่ง
        query.setParameter("getOfBenzine",null);
        query.setParameter("getOfDiesel",null);
        query.setParameter("getOfGadinia",null);
        query.setParameter("getOfTellus",null);
        query.setParameter("getOfFreshWater",vessel.getGetOfFreshWater());
//        ให้เรือลำอื่น
        query.setParameter("giveOfBenzine",null);
        query.setParameter("giveOfDiesel",null);
        query.setParameter("giveOfGadinir",null);
        query.setParameter("giveOfTellus",null);
        query.setParameter("giveOfFreshWater",null);
//        ใช้ไป
        query.setParameter("usedOfBenzine",null);
        query.setParameter("usedOfDiesel",null);
        query.setParameter("usedOfGadinia",null);
        query.setParameter("usedOfTellus",null);
        query.setParameter("usedOfFreshWater",null);

        query.setParameter("leftOfBenzine",vessel.getLeftOfBenzine());
        query.setParameter("leftOfDiesel",vessel.getLeftOfDiesel());
        query.setParameter("leftOfGadinia",vessel.getLeftOfGadinia());
        query.setParameter("leftOfTellus",vessel.getLeftOfTellus());
        query.setParameter("leftOfFreshWater",vessel.getLeftOfFreshWater());
        query.executeUpdate();

    }

    @Modifying
    @Transactional
    public void updateApproveInTbVessel(UpdateVesselPayload approveForm){
        String sql = "UPDATE TB_VESSELS SET current_position = :currentPosition, " +
                " counsel = :counsel WHERE ves_id = :vesId";
        Query query = entityManager.createNativeQuery(sql);
        query.setParameter("currentPosition",approveForm.getCurrentPosition());
        query.setParameter("vesId",approveForm.getVesId());
        query.setParameter("counsel",approveForm.getCounsel());
        query.executeUpdate();
        log.info("Done");
    }


}
