package com.kaset.backendProject.repository;

import com.kaset.backendProject.model.entity.TbLogVessels;
import com.kaset.backendProject.repositoryImpl.CustomLogVesselRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LogVesselRepository extends JpaRepository<TbLogVessels, Integer>, CustomLogVesselRepository {
}
