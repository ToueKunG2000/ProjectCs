package com.kaset.backendProject.repository;

import com.kaset.backendProject.model.entity.TbUsers;
import com.kaset.backendProject.model.payload.UserPayload;
import com.kaset.backendProject.repositoryImpl.CustomUserRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserRepository extends JpaRepository<TbUsers, Integer>, CustomUserRepository {

    @Query(nativeQuery = true)
    public UserPayload findUserByUsername(@Param(value = "username") String username);

    @Query(nativeQuery = true)
    public List<UserPayload> getAllUser();

    @Query(value = "SELECT TU.vesId FROM TbUsers TU WHERE TU.userId = :userId")
    public Integer findVesselByUserId(Integer userId);

}
