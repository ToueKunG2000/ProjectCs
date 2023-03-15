package com.kaset.backendProject.service;

import com.kaset.backendProject.model.payload.DropdownPayload;
import com.kaset.backendProject.model.payload.UserList;
import com.kaset.backendProject.model.payload.UserPayload;

import java.util.List;

public interface UserService {

    Integer getVesselFromUserId(UserPayload userPayload);

    void changeVesId(Integer vesId, Integer userId);

    void changeUserStatus(UserPayload userPayload);
    UserList getUserInfo(Integer userId);
    void addNewUser(UserPayload userPayload);

    List<UserPayload> getAllUser();

    List<DropdownPayload> getUserDropdown(Integer positionId);

    Integer checkUserIdInVessel(Integer positionId, Integer vesId);
}
