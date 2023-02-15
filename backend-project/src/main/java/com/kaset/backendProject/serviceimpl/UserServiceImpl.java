package com.kaset.backendProject.serviceimpl;

import com.kaset.backendProject.model.payload.DropdownPayload;
import com.kaset.backendProject.model.payload.UserPayload;
import com.kaset.backendProject.model.payload.Vessel;
import com.kaset.backendProject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl {

    @Autowired
    private UserRepository userRepository;


    public Integer getVesselFromUserId(UserPayload userPayload){
        return userRepository.findVesselByUserId(userPayload.getUserId());
    }

    public void changeVesId(Integer vesId, Integer userId){
        userRepository.changeVesId(vesId,userId);
    }

    public void changeUserStatus(UserPayload userPayload){
        userRepository.changeUserStatus(userPayload);
    }

    public void addNewUser(UserPayload userPayload){
        userRepository.insertNewUser(userPayload);
    }


    public List<UserPayload> getAllUser(){
        List<UserPayload> oldUser = userRepository.getAllUser();
        return oldUser;
    }

    public List<DropdownPayload> getUserDropdown(Integer positionId){
        return userRepository.getUserDropdown(positionId);
    }

    public Integer checkUserIdInVessel(Integer positionId, Integer vesId){
        return userRepository.checkUserIdInVessel(positionId,vesId);
    }
}
