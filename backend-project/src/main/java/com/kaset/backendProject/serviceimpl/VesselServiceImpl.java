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

    public boolean checkMonthYearLog(MonthYearVesIdPayload payload){
        List<String> monthYearList = logVesselRepository.findMonthYear(payload.getVesId());
        if(monthYearList.contains(payload.getMonthYear())){
            return true;
        }
        else{
            return false;
        }
    }

    public Vessel getDataLog(MonthYearVesIdPayload payload){
        return logVesselRepository.getDataLog(payload.getVesId(), payload.getMonthYear());
    }
}
