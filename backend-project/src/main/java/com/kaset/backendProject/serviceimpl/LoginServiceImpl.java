package com.kaset.backendProject.serviceimpl;

import com.kaset.backendProject.model.entity.TbUsers;
import com.kaset.backendProject.repository.UserRepository;
import com.kaset.backendProject.service.LoginService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Log4j2
public class LoginServiceImpl implements LoginService {

    @Autowired
    private UserRepository userRepository;

    public boolean checkUser(String username, String password){
        TbUsers user = userRepository.findByUsername(username);
        log.info(user.getPasscode());
        if(user.getPasscode().equals(password)){
            return true;
        }
        return false;
    }

}
