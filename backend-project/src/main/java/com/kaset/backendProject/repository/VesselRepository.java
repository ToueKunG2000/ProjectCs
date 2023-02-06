package com.kaset.backendProject.repository;

import com.kaset.backendProject.model.entity.TbVessels;
import com.kaset.backendProject.model.payload.DropdownPayload;
import com.kaset.backendProject.model.payload.Vessel;
import com.kaset.backendProject.repositoryImpl.CustomVesselRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VesselRepository extends JpaRepository<TbVessels, Integer>, CustomVesselRepository {

    @Query(nativeQuery = true)
    List<Vessel> getVesselByVesId(@Param(value = "vesId")Integer vesId);

    @Query(nativeQuery = true)
    List<Vessel> getAllVessel();

    @Query(nativeQuery = true)
    List<DropdownPayload> getDropdownVessel();

    @Query(value = "SELECT TV FROM TbVessels TV WHERE TV.vesId = :vesId")
    TbVessels getDataVessel(@Param(value = "vesId") Integer vesId);
}
