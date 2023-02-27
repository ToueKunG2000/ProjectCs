package com.kaset.backendProject.controller;

import com.kaset.backendProject.serviceimpl.VesselServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GraphController {

    @Autowired
    private VesselServiceImpl vesselService;



}
