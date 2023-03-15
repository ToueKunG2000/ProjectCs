package com.kaset.backendProject.repositoryImpl;

import com.kaset.backendProject.model.payload.AddVesselPayload;
import com.kaset.backendProject.model.payload.UpdateVesselPayload;
import com.kaset.backendProject.model.payload.Vessel;

public interface CustomVesselRepository {
    void createReport(Vessel vessel);
    void openStatusVessel(Vessel vessel);
    void updateApproveInTbVessel(UpdateVesselPayload approveForm);
    void updateApproveInTbVesselWithCommander(UpdateVesselPayload approveForm);
    void resetToTbVessel(Vessel vessel);

    void closeStatusVessel(Vessel vessel);
    Integer insertNewVessel(AddVesselPayload addVesselPayload);
}
