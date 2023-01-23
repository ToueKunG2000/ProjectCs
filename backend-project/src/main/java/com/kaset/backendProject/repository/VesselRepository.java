package com.kaset.backendProject.repository;

import com.kaset.backendProject.model.entity.TbVessels;
import com.kaset.backendProject.repositoryImpl.CustomVesselRepository;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VesselRepository extends JpaRepository<TbVessels, Integer>, CustomVesselRepository {

    @Query("SELECT TU FROM TbVessels TU WHERE TU.vesId = :vesId")
    public List<TbVessels> getVesselByVesId(@Param(value = "vesId")Integer vesId);


    @Query("UPDATE TbVessels SET vesId = :vesId ")
    public void updateHere();
}
