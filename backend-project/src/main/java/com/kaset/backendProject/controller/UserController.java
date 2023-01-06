package com.kaset.backendProject.controller;

import com.kaset.backendProject.Model.User;
import com.kaset.backendProject.repo.UserRepo;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Log4j2
public class UserController {

    @Autowired
    private UserRepo repo;

    @GetMapping("/user")
    public List<User> getUser(){
        List<User> user = repo.findAll();
        log.info(user);
        return null;
    }
}
