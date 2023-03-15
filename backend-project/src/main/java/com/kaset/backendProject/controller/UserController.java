package com.kaset.backendProject.controller;

import com.kaset.backendProject.model.payload.*;
import com.kaset.backendProject.service.UserService;
import com.kaset.backendProject.serviceimpl.VesselServiceImpl;
import lombok.extern.log4j.Log4j2;
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
    private UserService userService;

    @Autowired
    private VesselServiceImpl vesselService;


    @GetMapping("/getAllUser")
    public ResponseEntity<List<UserPayload>> getAllUser(){
        return new ResponseEntity<>(userService.getAllUser(),HttpStatus.OK);
    }

    @GetMapping("/changeVesId")
    public void changeVesId(@RequestParam(value = "userId")Integer userId, @RequestParam(value = "vesId")Integer vesId){
        userService.changeVesId(vesId,userId);
    }

    @GetMapping("/getUserDropdown")
    public ResponseEntity<List<DropdownPayload>> getUserOption(@RequestParam(value = "positionId")Integer positionId){
        return new ResponseEntity<>(userService.getUserDropdown(positionId),HttpStatus.OK);
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
    @GetMapping("/getUserInfo")
    public UserList getUserInfo(@RequestParam(value = "userId")Integer userId){
        return userService.getUserInfo(userId);
    }

    @PostMapping("/checkUserIdInVessel")
    public void checkUserIdInVessel(@RequestBody VesselStatus vessel){
        Integer crewId = userService.checkUserIdInVessel(1,vessel.getVesId());
        if(crewId == null){
            userService.changeVesId(vessel.getVesId(), vessel.getCrewId());
        }
        else{
            userService.changeVesId(null, crewId);
            userService.changeVesId(vessel.getVesId(), vessel.getCrewId());
        }
        Integer engineerId = userService.checkUserIdInVessel(2,vessel.getVesId());
        if(engineerId == null){
            userService.changeVesId(vessel.getVesId(), vessel.getEngineerId());
        }
        else{
            userService.changeVesId(null, engineerId);
            userService.changeVesId(vessel.getVesId(), vessel.getEngineerId());
        }
        Integer commanderId = userService.checkUserIdInVessel(3,vessel.getVesId());
        if(commanderId == null){
            userService.changeVesId(vessel.getVesId(), vessel.getCommanderId());
        }
        else{
            userService.changeVesId(null, commanderId);
            userService.changeVesId(vessel.getVesId(), vessel.getCommanderId());
        }

    }
}
