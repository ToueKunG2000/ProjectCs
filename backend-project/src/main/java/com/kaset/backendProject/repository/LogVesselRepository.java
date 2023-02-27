package com.kaset.backendProject.repository;

import com.kaset.backendProject.model.entity.TbLogVessels;
import com.kaset.backendProject.model.payload.ColumnData;
import com.kaset.backendProject.model.payload.Vessel;
import com.kaset.backendProject.repositoryImpl.CustomLogVesselRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.awt.image.ColorModel;
import java.util.List;

@Repository
public interface LogVesselRepository extends JpaRepository<TbLogVessels, Integer>, CustomLogVesselRepository {


    @Query(nativeQuery = true)
    List<Integer> checkMonthLog(@Param(value = "monthYear")String monthYear);

    @Query(nativeQuery = true)
    Vessel getDataLog(@Param(value = "vesId")Integer vesId, @Param(value = "monthYear")String monthYear);

    @Query(nativeQuery = true)
    List<TbLogVessels> getColumnData(@Param(value = "year")String year ,@Param(value = "vesId")Integer vesId);

//    @Query(nativeQuery = true)
//    List<Vessel> getDataLogList(@Param(value = "vesId")Integer vesId, @Param(value = "monthYear")String monthYear);
}
