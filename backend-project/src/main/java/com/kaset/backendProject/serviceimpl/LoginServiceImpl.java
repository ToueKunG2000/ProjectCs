package com.kaset.backendProject.serviceimpl;

import com.kaset.backendProject.model.payload.UserPayload;
import com.kaset.backendProject.repository.UserRepository;
import com.kaset.backendProject.service.LoginService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j2
public class LoginServiceImpl implements LoginService {

    @Autowired
    private UserRepository userRepository;

    public UserPayload checkUser(String username, String password){
        UserPayload user = userRepository.findUserByUsername(username);
        Pbkdf2PasswordEncoder encoder = Pbkdf2PasswordEncoder.defaultsForSpringSecurity_v5_8();
        if(encoder.matches(password,user.getPassword())){
            user.setPassword(null);
            return user;
        }
        return null;
    }

    public Boolean checkUsernameDup(String username){
        List<String> usernameList = userRepository.checkUsernameDup();
        if(usernameList.contains(username)){
            return false;
        }
        else{
            return true;
        }
    }

}
