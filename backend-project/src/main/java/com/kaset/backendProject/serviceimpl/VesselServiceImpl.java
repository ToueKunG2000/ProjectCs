package com.kaset.backendProject.serviceimpl;

import com.kaset.backendProject.model.entity.TbLogVessels;
import com.kaset.backendProject.model.payload.*;
import com.kaset.backendProject.repository.LogVesselRepository;
import com.kaset.backendProject.repository.VesselRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        List<Vessel> oldVessel =  vesselRepository.getVesselByVesId(vesId);
        return oldVessel;
    }

    public List<Vessel> getAllVessel(){
        List<Vessel> oldVessel = vesselRepository.getAllVessel();
        return oldVessel;
    }

    public void createReport(Vessel vessel){
        vesselRepository.createReport(vessel);
    }

    public void updateApproveToTbVessel(UpdateVesselPayload approveForm){
        if(approveForm.getCommanderValidateUserId() != null){
            vesselRepository.updateApproveInTbVesselWithCommander(approveForm);
        }
        else{
            vesselRepository.updateApproveInTbVessel(approveForm);
        }
    }

    public void resetReport(Vessel vessel){
        vesselRepository.resetToTbVessel(vessel);
    }

    public void insertToTbLogVessel(Vessel vessel){
        logVesselRepository.insertToTbLogVessel(vessel);
    }

    public Vessel getDataVessel(Integer vesId){
        return vesselRepository.getVesselInfo(vesId);
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

    public List<VesselStatus> getVesselStatus(){
        return vesselRepository.getStatusVessel();
    }

    public List<LogVesselPayload> getLogVesselList(MonthYearVesIdPayload monthYearVesIdPayload){
        return logVesselRepository.getVesselLog(monthYearVesIdPayload.getVesId(),monthYearVesIdPayload.getMonthYear());
    }

    public void changeStatus(Vessel vessel){
        if(vessel.getVesStatus() == 1){
            vesselRepository.openStatusVessel(vessel);
        }
        else{
            vesselRepository.closeStatusVessel(vessel);
        }
    }

    public Integer addVessel(AddVesselPayload addVesselPayload){
        return vesselRepository.insertNewVessel(addVesselPayload);
    }

    public List<TbLogVessels> getColumnData(String year, Integer vesId){
        return logVesselRepository.getColumnData(year,vesId);
    }
}
