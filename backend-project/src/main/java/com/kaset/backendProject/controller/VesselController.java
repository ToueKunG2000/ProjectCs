package com.kaset.backendProject.controller;

import com.kaset.backendProject.model.payload.Vessel;
import com.kaset.backendProject.serviceimpl.VesselServiceImpl;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@Log4j2
@RequestMapping("/api/v1")
public class VesselController {

    @Autowired
    private VesselServiceImpl vesselService;

    @PutMapping("/createReport")
    public void updateToReport(@RequestBody Vessel vessel){
        vesselService.updateToTbVessel(vessel);
    }

}
