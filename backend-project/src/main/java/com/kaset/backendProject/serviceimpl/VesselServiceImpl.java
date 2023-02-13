package com.kaset.backendProject.serviceimpl;

import com.kaset.backendProject.model.entity.TbVessels;
import com.kaset.backendProject.model.payload.*;
import com.kaset.backendProject.repository.LogVesselRepository;
import com.kaset.backendProject.repository.VesselRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
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
        List<Vessel> newVessel = vesselRepository.getAllVessel();
        for(Vessel vessel: newVessel){
            if(vessel.getVesPhoto() != null){
                String text = vessel.getVesPhoto();
                String result[]  = text.split("ฟ");
                vessel.setVesPhoto(result[1]);
            }
        }
        return newVessel;
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

    public List<Integer> checkMonthYear(String monthYear){
        return logVesselRepository.checkMonthLog(monthYear);
    }

    public List<DropdownPayload> getDropdownVessel(){
        List<DropdownPayload> dropdown = new ArrayList<>();
        dropdown.add(new DropdownPayload(0 ,"ทั้งหมด"));
        dropdown.addAll(vesselRepository.getDropdownVessel());
        return dropdown;
    }

    public List<Vessel> getVesselStatus(){
        List<Vessel> newVessel = vesselRepository.getStatusVessel();
        for(Vessel vessel: newVessel){
            if(vessel.getVesPhoto() != null){
                String text = vessel.getVesPhoto();
                String result[]  = text.split("ฟ");
                vessel.setVesPhoto(result[1]);
            }
        }
        return newVessel;
    }

    public List<LogVesselPayload> getLogVesselList(MonthYearVesIdPayload monthYearVesIdPayload){
        return logVesselRepository.getVesselLog(monthYearVesIdPayload.getVesId(),monthYearVesIdPayload.getMonthYear());
    }

    public void changeStatus(Vessel vessel){
        vesselRepository.changeStatusVessel(vessel);
    }
}
