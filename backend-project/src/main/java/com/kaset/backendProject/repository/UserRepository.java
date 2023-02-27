package com.kaset.backendProject.repository;

import com.kaset.backendProject.model.entity.TbUsers;
import com.kaset.backendProject.model.payload.DropdownPayload;
import com.kaset.backendProject.model.payload.UserPayload;
import com.kaset.backendProject.repositoryImpl.CustomUserRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserRepository extends JpaRepository<TbUsers, Integer>, CustomUserRepository {

    @Query(nativeQuery = true)
    UserPayload findUserByUsername(@Param(value = "username") String username);

    @Query(nativeQuery = true)
    List<UserPayload> getAllUser();

    @Query(nativeQuery = true)
    List<DropdownPayload> getUserDropdown(@Param(value = "positionId")Integer positionId);

    @Query(nativeQuery = true)
    Integer checkUserIdInVessel(@Param(value = "positionId")Integer positionId, @Param(value = "vesId")Integer vesId);

    @Query(value = "SELECT TU.vesId FROM TbUsers TU WHERE TU.userId = :userId")
    Integer findVesselByUserId(Integer userId);

    @Query(nativeQuery = true)
    List<String> checkUsernameDup();

}
