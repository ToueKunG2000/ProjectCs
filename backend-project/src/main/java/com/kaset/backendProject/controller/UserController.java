package com.kaset.backendProject.controller;

import com.kaset.backendProject.model.entity.TbVessels;
import com.kaset.backendProject.model.payload.UserPayload;
import com.kaset.backendProject.model.payload.Vessel;
import com.kaset.backendProject.serviceimpl.LoginServiceImpl;
import com.kaset.backendProject.serviceimpl.UserServiceImpl;
import com.kaset.backendProject.serviceimpl.VesselServiceImpl;
import lombok.extern.log4j.Log4j2;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<UserPayload> getUser(@RequestParam(value = "username") String username, @RequestParam(value = "password") String password){
        UserPayload user = loginService.checkUser(username,password);
        if (user != null){
            return new ResponseEntity<>(user,HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/getAllUser")
    public ResponseEntity<List<UserPayload>> getAllUser(){
        return new ResponseEntity<>(userService.getAllUser(),HttpStatus.OK);
    }

    @PostMapping("/changeUserStatus")
    public void changeUserStatus(@RequestBody UserPayload userPayload){
        userService.changeUserStatus(userPayload);
    }

    @PostMapping("/addUser")
    public void addUser(@RequestBody UserPayload userPayload){
        userService.addNewUser(userPayload);
    }

    @PostMapping("/checkUser")
    public ResponseEntity<List<Vessel>> getUser(@RequestBody UserPayload userPayload) {
        Integer vesId = userService.getVesselFromUserId(userPayload);
        if(vesId == null && ( userPayload.getPositionId() == 4 || userPayload.getPositionId() == 5) ){
            return new ResponseEntity<>(vesselService.getAllVessel(),HttpStatus.OK);
        }
        return new ResponseEntity<>(vesselService.getVesselFromVesId(vesId), HttpStatus.OK);
    }
}
