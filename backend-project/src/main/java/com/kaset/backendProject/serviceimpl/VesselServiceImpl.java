package com.kaset.backendProject.serviceimpl;

import com.kaset.backendProject.model.entity.TbVessels;
import com.kaset.backendProject.model.payload.UpdateVesselPayload;
import com.kaset.backendProject.model.payload.Vessel;
import com.kaset.backendProject.repository.LogVesselRepository;
import com.kaset.backendProject.repository.VesselRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VesselServiceImpl {

    @Autowired
    private VesselRepository vesselRepository;

    @Autowired
    private LogVesselRepository logVesselRepository;

    public List<TbVessels> getVesselFromVesId(Integer vesId){
        return vesselRepository.getVesselByVesId(vesId);
    }

    public List<TbVessels> getAllVessel(){
        return vesselRepository.findAll();
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
}
