package com.kaset.backendProject.controller;

import com.kaset.backendProject.entity.TbUsers;
import com.kaset.backendProject.serviceimpl.LoginServiceImpl;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Log4j2
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private LoginServiceImpl loginService;


    @GetMapping("/user")
    public TbUsers getU(){
        return loginService.checkUser("admin");
    }


    @GetMapping("/login")
    public TbUsers getUser(@RequestParam(value = "username") String username, @RequestParam(value = "password") String password){
        return loginService.checkUser(username);
    }
}
