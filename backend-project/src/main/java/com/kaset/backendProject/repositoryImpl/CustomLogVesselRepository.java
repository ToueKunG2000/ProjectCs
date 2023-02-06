package com.kaset.backendProject.repositoryImpl;

import com.kaset.backendProject.model.payload.LogVesselPayload;
import com.kaset.backendProject.model.payload.Vessel;

import java.util.List;

public interface CustomLogVesselRepository {
    void insertToTbLogVessel(Vessel vessel);

    List<LogVesselPayload> getVesselLog(Integer vesId, String monthYear);
}
