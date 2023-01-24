package com.kaset.backendProject.repositoryImpl;

import com.kaset.backendProject.model.payload.Vessel;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
public class CustomVesselRepositoryImpl implements CustomVesselRepository{

    @PersistenceContext
    private EntityManager entityManager;
//
//
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
        Query q = entityManager.createNativeQuery(sql);
        q.setParameter("vesId",vessel.getVesId());
        q.setParameter("monthYear",vessel.getMonthYear());
        q.setParameter("currentPosition",vessel.getCurrentPosition());
        q.setParameter("electricMachineUsed",vessel.getElectricMachineUsed());
        q.setParameter("bigMachineUsed",vessel.getBigMachineUsed());

        q.setParameter("airCompressor",vessel.getAirCompressor());
        q.setParameter("airConditioner",vessel.getAirConditioner());
        q.setParameter("waterPurifier",vessel.getWaterPurifier());
        q.setParameter("shipEngine",vessel.getShipEngine());
        q.setParameter("dieselOilSeparator",vessel.getDieselOilSeparator());
        q.setParameter("pump",vessel.getPump());
        q.setParameter("gear",vessel.getGear());
        q.setParameter("freezer",vessel.getFreezer());
        q.setParameter("rudder",vessel.getRudder());
//        รับมาจากฝั่ง
        q.setParameter("getOfBenzine",vessel.getGetOfBenzine());
        q.setParameter("getOfDiesel",vessel.getGetOfDiesel());
        q.setParameter("getOfGadinia",vessel.getGetOfGadinia());
        q.setParameter("getOfTellus",vessel.getGetOfTellus());
        q.setParameter("getOfFreshWater",vessel.getGetOfFreshWater());
//        ให้เรือลำอื่น
        q.setParameter("giveOfBenzine",vessel.getGiveOfBenzine());
        q.setParameter("giveOfDiesel",vessel.getGiveOfDiesel());
        q.setParameter("giveOfGadinir",vessel.getGiveOfGadinia());
        q.setParameter("giveOfTellus",vessel.getGiveOfTellus());
        q.setParameter("giveOfFreshWater",vessel.getGiveOfFreshWater());
//        ใช้ไป
        q.setParameter("usedOfBenzine",vessel.getUsedOfBenzine());
        q.setParameter("usedOfDiesel",vessel.getUsedOfDiesel());
        q.setParameter("usedOfGadinia",vessel.getUsedOfGadinia());
        q.setParameter("usedOfTellus",vessel.getUsedOfTellus());
        q.setParameter("usedOfFreshWater",vessel.getUsedOfFreshWater());
        q.executeUpdate();

    }


}
