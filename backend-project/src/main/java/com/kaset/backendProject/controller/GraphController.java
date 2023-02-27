package com.kaset.backendProject.controller;

import com.kaset.backendProject.model.entity.TbLogVessels;
import com.kaset.backendProject.model.payload.ColumnData;
import com.kaset.backendProject.model.payload.ColumnRequest;
import com.kaset.backendProject.serviceimpl.VesselServiceImpl;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Log4j2
@RequestMapping("/api/v1")
public class GraphController {

    @Autowired
    private VesselServiceImpl vesselService;

    @PostMapping("/getColumnData")
    public List<TbLogVessels> getColumnData(@RequestBody ColumnRequest request){
        return vesselService.getColumnData(request.getYear(),request.getVesId());
    }

}
