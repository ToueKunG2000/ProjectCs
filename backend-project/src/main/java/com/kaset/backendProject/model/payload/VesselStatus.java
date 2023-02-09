package com.kaset.backendProject.model.payload;

import lombok.Data;

@Data
public class VesselStatus {

    private Integer vesId;

    private String vesNameTh;

    private String name;

    private Integer vesStatus;

    public VesselStatus() {
    }

    public VesselStatus(Integer vesId, String vesNameTh, String name, Integer vesStatus) {
        this.vesId = vesId;
        this.vesNameTh = vesNameTh;
        this.name = name;
        this.vesStatus = vesStatus;
    }
}