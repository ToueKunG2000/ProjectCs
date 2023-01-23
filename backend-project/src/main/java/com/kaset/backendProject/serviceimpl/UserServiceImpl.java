package com.kaset.backendProject.serviceimpl;

import com.kaset.backendProject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl {

    @Autowired
    private UserRepository userRepository;


    public Integer getVesselFromUserId(Integer userId){
        return userRepository.findVesselByUserId(userId);
    }
}
