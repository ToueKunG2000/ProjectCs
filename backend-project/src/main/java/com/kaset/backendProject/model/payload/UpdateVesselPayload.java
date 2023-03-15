package com.kaset.backendProject.model.payload;

import lombok.Data;

@Data
public class UpdateVesselPayload {
    private Integer vesId;
    private Integer currentPosition;
    private String counsel;

    private Integer rejectByPositionId;

    private Integer commanderValidateUserId;

    public UpdateVesselPayload() {
    }

    public UpdateVesselPayload(Integer vesId, Integer currentPosition, String counsel, Integer rejectByPositionId, Integer commanderValidateUserId) {
        this.vesId = vesId;
        this.currentPosition = currentPosition;
        this.counsel = counsel;
        this.rejectByPositionId = rejectByPositionId;
        this.commanderValidateUserId = commanderValidateUserId;
    }

}
