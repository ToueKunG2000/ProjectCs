package com.kaset.backendProject.repository;

import com.kaset.backendProject.model.entity.TbUsers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<TbUsers, Integer>{

    @Query(value = "SELECT TU FROM TbUsers TU WHERE TU.username LIKE :username ")
    public TbUsers findByUsername(@Param(value = "username") String username);

    @Query(value = "SELECT TU.vesId FROM TbUsers TU WHERE TU.userId = :userId")
    public Integer findVesselByUserId(Integer userId);
}
