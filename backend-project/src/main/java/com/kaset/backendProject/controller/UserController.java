package com.kaset.backendProject.controller;

import com.kaset.backendProject.model.entity.TbVessels;
import com.kaset.backendProject.serviceimpl.LoginServiceImpl;
import com.kaset.backendProject.serviceimpl.UserServiceImpl;
import com.kaset.backendProject.serviceimpl.VesselServiceImpl;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Log4j2
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private LoginServiceImpl loginService;

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private VesselServiceImpl vesselService;

    @GetMapping("/login")
    public HttpStatus getUser(@RequestParam(value = "username") String username, @RequestParam(value = "password") String password){
        if (loginService.checkUser(username,password)){
            return HttpStatus.OK;
        }
        return HttpStatus.BAD_REQUEST;
    }

    @GetMapping("/checkUser")
    public List<TbVessels> getUser(@RequestParam(value = "userId") Integer userId) {
        Integer vesId = userService.getVesselFromUserId(userId);
        if(vesId == null){
            return vesselService.getAllVessel();
        }
        return (vesselService.getVesselFromVesId(vesId));
    }
}
