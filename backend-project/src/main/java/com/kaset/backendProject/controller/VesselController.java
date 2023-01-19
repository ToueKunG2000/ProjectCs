package com.kaset.backendProject.controller;

import com.kaset.backendProject.model.entity.TbVessels;
import com.kaset.backendProject.repository.VesselRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Log4j2
@RequestMapping("/api/v1")
public class VesselController {

    @Autowired
    private VesselRepository vesselRepository;

    @PostMapping("/createReport")
    public void updateToReport(){
        TbVessels vessel = vesselRepository.getReferenceById(1);
        log.info(vessel);
    }

    @GetMapping("/getUser")
    public TbVessels getUser(){
        return null;
    }

}
