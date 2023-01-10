package com.kaset.backendProject.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Log4j2
public class UserController {

//    @Autowired
//    private UserRepo repo;

    @GetMapping("/user")
    public void getUser(){
        log.info("test");
    }
}
