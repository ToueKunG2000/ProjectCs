package com.kaset.backendProject.model.payload;

import lombok.Data;

@Data
public class UpdateVesselPayload {
    private Integer vesId;
    private Integer currentPosition;
    private String counsel;

    private Integer rejectByPositionId;

    public UpdateVesselPayload() {
    }

    public UpdateVesselPayload(Integer vesId, Integer currentPosition, String counsel, Integer rejectByPositionId) {
        this.vesId = vesId;
        this.currentPosition = currentPosition;
        this.counsel = counsel;
        this.rejectByPositionId = rejectByPositionId;
    }
}
