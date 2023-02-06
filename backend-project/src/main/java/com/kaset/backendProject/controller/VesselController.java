package com.kaset.backendProject.controller;

import com.kaset.backendProject.model.entity.TbVessels;
import com.kaset.backendProject.model.payload.*;
import com.kaset.backendProject.repository.LogVesselRepository;
import com.kaset.backendProject.serviceimpl.VesselServiceImpl;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.relational.core.sql.In;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PutMapping("/updateReport")
    public void updateToApprove(@RequestBody UpdateVesselPayload approveForm){
        vesselService.updateApproveToTbVessel(approveForm);
    }

    @PutMapping("/resetReport")
    public void resetTbVessel(@RequestBody Vessel vessel){
        vesselService.resetReport(vessel);
    }

    @GetMapping("/getDataVessel")
    public TbVessels getDataVessel(@RequestParam(value = "vesId")Integer vesId){
        return vesselService.getDataVessel(vesId);
    }

    @PostMapping("/addToLog")
    public void addToTbLogVessel(@RequestBody Vessel vessel){
        vesselService.insertToTbLogVessel(vessel);
    }

    @PostMapping("/getDataLog")
    public ResponseEntity<Vessel> getDataLog(@RequestBody MonthYearVesIdPayload monthYearVesIdPayload){
        Vessel vessel = vesselService.getDataLog(monthYearVesIdPayload);
        if(vessel == null){
            return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
        }
        else{
            return new ResponseEntity<>(vessel,HttpStatus.OK);
        }
    }

    @PostMapping("/getLogVesselList")
    public ResponseEntity<List<LogVesselPayload>> getDataLogList(@RequestBody MonthYearVesIdPayload monthYearVesIdPayload){
        return new ResponseEntity<>(vesselService.getLogVesselList(monthYearVesIdPayload), HttpStatus.OK);

    }

    @GetMapping("/getDropdownVessel")
    public ResponseEntity<List<DropdownPayload>> getDropdownVessel(){
        return new ResponseEntity<>(vesselService.getDropdownVessel(), HttpStatus.OK);
    }


    @GetMapping("/checkMonthYear")
    public List<Integer> checkMonthYear(@RequestParam(name = "monthYear")String monthYear){
        return vesselService.checkMonthYear(monthYear);
    }

}
