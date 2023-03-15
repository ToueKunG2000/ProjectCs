package com.kaset.backendProject.controller;


import com.kaset.backendProject.model.payload.UserPayload;
import com.kaset.backendProject.service.LoginService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@Log4j2
@RequestMapping("/api/v1")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @GetMapping("/checkUsernameDup")
    public ResponseEntity<Boolean> checkUsernameDup(@RequestParam(value = "username")String username){
        if(loginService.checkUsernameDup(username)){
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(false,HttpStatus.BAD_REQUEST);
        }
    }


    @GetMapping("/login")
    public ResponseEntity<UserPayload> getUser(@RequestParam(value = "username") String username, @RequestParam(value = "password") String password){
        UserPayload user = loginService.checkUser(username,password);
        if (user != null){
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
}
