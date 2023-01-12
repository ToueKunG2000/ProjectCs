package com.kaset.backendProject.repository;

import com.kaset.backendProject.model.entity.TbVessels;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VesselRepository extends JpaRepository<TbVessels, Integer> {
}
