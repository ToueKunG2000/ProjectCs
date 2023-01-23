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
                " current_position = :currentPosition, diesel_oil_separator = :dieselOilSeparator "+
                " WHERE ves_id = :vesId ";
        Query q = entityManager.createNativeQuery(sql);
        q.setParameter("vesId",vessel.getVesId());
        q.setParameter("airCompressor",vessel.getAirCompressor());
        q.setParameter("airConditioner",vessel.getAirConditioner());
        q.setParameter("bigMachineUsed",vessel.getBigMachineUsed());
        q.setParameter("currentPosition",vessel.getCurrentPosition());
        q.setParameter("dieselOilSeparator",vessel.getDieselOilSeparator());
        q.executeUpdate();

    }


}
