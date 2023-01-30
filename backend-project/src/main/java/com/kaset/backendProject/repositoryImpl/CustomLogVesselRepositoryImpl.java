package com.kaset.backendProject.repositoryImpl;

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
public class CustomLogVesselRepositoryImpl implements CustomLogVesselRepository{

    @PersistenceContext
    private EntityManager entityManager;

    @Modifying
    @Transactional
    public void insertToTbLogVessel(Vessel vessel){
        String sql = "INSERT INTO TB_LOG_VESSELS VALUES (" +
                " :vesId, :vesNameTh, :bigMachineNum, " +
                " :electricMachineNum,  :bigMachineUsed," +
                " :electricMachineUsed,  :airConditioner, :airCompressor,  :freezer," +
                " :shipEngine, :pump, :rudder, :waterPurifier, :dieselOilSeperator, :gear, :monthYear, " +
                " :getOfBenzine, :getOfDiesel, :getOfGadinia, :getOfTellus," +
                " :getOfFreshWater," +
                " :giveOfBenzine, :giveOfDiesel, :giveOfGadinia, :giveOfTellus," +
                " :giveOfFreshWater, +" +
                " :usedOfBenzine, :usedOfDiesel, :usedOfGadinia, :usedOfTellus," +
                " :usedOfFreshWater," +
                " :leftOfBenzine, :leftOfDiesel, :leftOfGadinia, :leftOfTellus," +
                " :leftOfFreshWater" +
                ")";
        Query query = entityManager.createNativeQuery(sql);
        query.setParameter("vesId",vessel.getVesId());
        query.setParameter("vesNameTh",vessel.getVesNameTh());
        query.setParameter("shipEngine",vessel.getShipEngine());
        query.setParameter("waterPurifier",vessel.getWaterPurifier());
        query.setParameter("freezer",vessel.getFreezer());
        query.setParameter("rudder",vessel.getRudder());
        query.setParameter("pump",vessel.getPump());
        query.setParameter("gear",vessel.getGear());
        query.setParameter("airCompressor",vessel.getAirCompressor());
        query.setParameter("airConditioner",vessel.getAirConditioner());
        query.setParameter("dieselOilSeperator",vessel.getDieselOilSeparator());
        query.setParameter("bigMachineNum",vessel.getBigMachineNum());
        query.setParameter("bigMachineUsed",vessel.getBigMachineUsed());
        query.setParameter("electricMachineNum",vessel.getElectricMachineNum());
        query.setParameter("electricMachineUsed",vessel.getElectricMachineUsed());
        query.setParameter("monthYear",vessel.getMonthYear());
        query.setParameter("giveOfBenzine",vessel.getGiveOfBenzine());
        query.setParameter("giveOfDiesel",vessel.getGiveOfDiesel());
        query.setParameter("giveOfGadinia",vessel.getGiveOfGadinia());
        query.setParameter("giveOfTellus",vessel.getGiveOfTellus());
        query.setParameter("giveOfFreshWater",vessel.getGiveOfFreshWater());
        query.setParameter("usedOfBenzine",vessel.getUsedOfBenzine());
        query.setParameter("usedOfDiesel",vessel.getUsedOfDiesel());
        query.setParameter("usedOfTellus",vessel.getUsedOfTellus());
        query.setParameter("usedOfGadinia",vessel.getUsedOfGadinia());
        query.setParameter("usedOfFreshWater",vessel.getUsedOfFreshWater());
        query.setParameter("leftOfBenzine",vessel.getLeftOfBenzine());
        query.setParameter("leftOfDiesel",vessel.getLeftOfDiesel());
        query.setParameter("leftOfTellus",vessel.getLeftOfTellus());
        query.setParameter("leftOfGadinia",vessel.getLeftOfGadinia());
        query.setParameter("leftOfFreshWater",vessel.getLeftOfFreshWater());
        query.setParameter("getOfBenzine",vessel.getGetOfBenzine());
        query.setParameter("getOfDiesel",vessel.getGetOfDiesel());
        query.setParameter("getOfTellus",vessel.getGetOfTellus());
        query.setParameter("getOfGadinia",vessel.getGetOfGadinia());
        query.setParameter("getOfFreshWater",vessel.getGetOfFreshWater());
        query.executeUpdate();
    }
}
