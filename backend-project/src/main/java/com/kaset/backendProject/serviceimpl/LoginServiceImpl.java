package com.kaset.backendProject.serviceimpl;

import com.kaset.backendProject.model.entity.TbUsers;
import com.kaset.backendProject.repository.UserRepository;
import com.kaset.backendProject.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private UserRepository userRepository;

    public TbUsers checkUser(String username){
        return userRepository.findByUsername(username);
    }

}
