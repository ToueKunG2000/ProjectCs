package com.kaset.backendProject.repositoryImpl;

import com.kaset.backendProject.model.payload.UserPayload;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Log4j2
public class CustomUserRepositoryImpl implements CustomUserRepository{

    @PersistenceContext
    private EntityManager entityManager;

    @Modifying
    @Transactional
    public void changeUserStatus(UserPayload userPayload){
        String sql = "UPDATE TB_USERS SET user_status = :userStatus, ves_id = :vesId WHERE user_id = :userId ";
        Query query = entityManager.createNativeQuery(sql);
        query.setParameter("userStatus",userPayload.getUserStatus());
        query.setParameter("userId",userPayload.getUserId());
        query.executeUpdate();
    }

    @Modifying
    @Transactional
    public void disableUserStatus(UserPayload userPayload){
        String sql = "UPDATE TB_USERS SET user_status = :userStatus, ves_id = :vesId WHERE user_id = :userId ";
        Query query = entityManager.createNativeQuery(sql);
        query.setParameter("userStatus",userPayload.getUserStatus());
        query.setParameter("userId",userPayload.getUserId());
        query.setParameter("vesId",null);
        query.executeUpdate();
    }

    @Modifying
    @Transactional
    public void insertNewUser(UserPayload userPayload){
        String sql = "INSERT INTO TB_USERS VALUES(:username, :password, :firstName, :lastName, 1, :positionId, null, :userPhoto )";
        Query query = entityManager.createNativeQuery(sql);
        query.setParameter("username",userPayload.getUsername());
        query.setParameter("password",userPayload.getPassword());
        query.setParameter("firstName",userPayload.getFirstName());
        query.setParameter("lastName",userPayload.getLastName());
        query.setParameter("positionId",userPayload.getPositionId());
        query.setParameter("userPhoto",userPayload.getUserPhoto());
        query.executeUpdate();
    }

    @Modifying
    @Transactional
    public void changeVesId(Integer vesId, Integer userId){
        String sql = "UPDATE TB_USERS SET ves_id = :vesId WHERE user_id = :userId";
        Query query = entityManager.createNativeQuery(sql);
        query.setParameter("vesId",vesId);
        query.setParameter("userId",userId);
        query.executeUpdate();
    }

}
