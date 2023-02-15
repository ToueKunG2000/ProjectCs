package com.kaset.backendProject.model.payload;

import lombok.Data;

@Data
public class AddVesselPayload {
    private String vesName;
    private Integer bigMachineNum;
    private Integer electricMachineNum;
    private String vesPhoto;
    private Integer crewId;
    private Integer engineerId;
    private Integer commanderId;
}
