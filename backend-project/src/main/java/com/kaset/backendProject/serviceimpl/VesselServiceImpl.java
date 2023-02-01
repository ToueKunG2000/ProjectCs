package com.kaset.backendProject.serviceimpl;

import com.kaset.backendProject.model.entity.TbVessels;
import com.kaset.backendProject.model.payload.MonthYearVesIdPayload;
import com.kaset.backendProject.model.payload.UpdateVesselPayload;
import com.kaset.backendProject.model.payload.Vessel;
import com.kaset.backendProject.repository.LogVesselRepository;
import com.kaset.backendProject.repository.VesselRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j2
public class VesselServiceImpl {

    @Autowired
    private VesselRepository vesselRepository;

    @Autowired
    private LogVesselRepository logVesselRepository;

    public List<Vessel> getVesselFromVesId(Integer vesId){
        return vesselRepository.getVesselByVesId(vesId);
    }

    public List<Vessel> getAllVessel(){
        return vesselRepository.getAllVessel();
    }

    public void updateToTbVessel(Vessel vessel){
        vesselRepository.updateToTbVessel(vessel);
    }

    public void updateApproveToTbVessel(UpdateVesselPayload approveForm){
        vesselRepository.updateApproveInTbVessel(approveForm);
    }

    public void resetReport(Vessel vessel){
        vesselRepository.resetToTbVessel(vessel);
    }

    public void insertToTbLogVessel(Vessel vessel){
        logVesselRepository.insertToTbLogVessel(vessel);
    }

    public TbVessels getDataVessel(Integer vesId){
        return vesselRepository.getDataVessel(vesId);
    }

    public Vessel getDataLog(MonthYearVesIdPayload payload){
        return logVesselRepository.getDataLog(payload.getVesId(), payload.getMonthYear());
    }
}
