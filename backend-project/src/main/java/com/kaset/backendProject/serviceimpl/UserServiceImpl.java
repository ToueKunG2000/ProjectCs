package com.kaset.backendProject.serviceimpl;

import com.kaset.backendProject.model.payload.DropdownPayload;
import com.kaset.backendProject.model.payload.UserList;
import com.kaset.backendProject.model.payload.UserPayload;
import com.kaset.backendProject.repository.UserRepository;
import com.kaset.backendProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;


    public Integer getVesselFromUserId(UserPayload userPayload){
        return userRepository.findVesselByUserId(userPayload.getUserId());
    }

    public void changeVesId(Integer vesId, Integer userId){
        userRepository.changeVesId(vesId,userId);
    }

    public void changeUserStatus(UserPayload userPayload){
        if(userPayload.getUserStatus() == 1) {
            userRepository.changeUserStatus(userPayload);

        }else{
            userRepository.disableUserStatus(userPayload);
        }
    }

    public void addNewUser(UserPayload userPayload){
        userRepository.insertNewUser(userPayload);
    }


    public List<UserPayload> getAllUser(){
        return  userRepository.getAllUser();
    }

    public List<DropdownPayload> getUserDropdown(Integer positionId){
        List<DropdownPayload> newDropdown = new ArrayList<>();
        newDropdown.add(new DropdownPayload(0,"ไม่มีผู้ใช้"));
        newDropdown.addAll(userRepository.getUserDropdown(positionId));
        return newDropdown;
    }

    public Integer checkUserIdInVessel(Integer positionId, Integer vesId){
        return userRepository.checkUserIdInVessel(positionId,vesId);
    }

    public UserList getUserInfo(Integer userId){
        UserList user = new UserList();
        user.setCommandOffName(userRepository.getUserInfo(userId));
        user.setCommanderName(userRepository.getUserInfo(1));
        user.setTechnicalName(userRepository.getUserInfo(5));
        return user;
    }

}
