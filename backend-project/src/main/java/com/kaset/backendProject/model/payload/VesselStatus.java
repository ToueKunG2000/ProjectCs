package com.kaset.backendProject.model.payload;

import lombok.Data;

@Data
public class VesselStatus {

    private Integer vesId;

    private String vesName;

    private String name;

    private Integer crewId;

    private Integer engineerId;

    private Integer commanderId;

    private Integer vesStatus;

    private String vesPhoto;

    public VesselStatus() {
    }

    public VesselStatus(Integer vesId, String vesName, String name, Integer vesStatus, String vesPhoto) {
        this.vesId = vesId;
        this.vesName = vesName;
        this.vesStatus = vesStatus;
        this.name = name;
        this.vesPhoto = vesPhoto;
    }

    public VesselStatus(Integer vesId, String vesName, String name, Integer crewId, Integer engineerId, Integer commanderId, Integer vesStatus, String vesPhoto) {
        this.vesId = vesId;
        this.vesName = vesName;
        this.name = name;
        this.crewId = crewId;
        this.engineerId = engineerId;
        this.commanderId = commanderId;
        this.vesStatus = vesStatus;
        this.vesPhoto = vesPhoto;
    }

}