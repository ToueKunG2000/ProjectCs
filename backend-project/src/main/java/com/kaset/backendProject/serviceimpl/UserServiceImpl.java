package com.kaset.backendProject.serviceimpl;

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
}
