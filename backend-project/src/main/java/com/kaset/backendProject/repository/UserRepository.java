package com.kaset.backendProject.repository;

import com.kaset.backendProject.entity.TbUsers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<TbUsers, Integer>{

    @Query(value = "SELECT TU FROM TbUsers TU WHERE TU.username LIKE :username ")
    public TbUsers findByUsername(@Param(value = "username") String username);
}
