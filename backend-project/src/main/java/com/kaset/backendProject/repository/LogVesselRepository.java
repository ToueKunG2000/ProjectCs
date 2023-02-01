package com.kaset.backendProject.repository;

import com.kaset.backendProject.model.entity.TbLogVessels;
import com.kaset.backendProject.model.payload.Vessel;
import com.kaset.backendProject.repositoryImpl.CustomLogVesselRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.relational.core.sql.In;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LogVesselRepository extends JpaRepository<TbLogVessels, Integer>, CustomLogVesselRepository {


    @Query(nativeQuery = true)
    Vessel getDataLog(@Param(value = "vesId")Integer vesId, @Param(value = "monthYear")String monthYear);
}
