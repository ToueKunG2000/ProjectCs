package com.kaset.backendProject.model.payload;

import lombok.Data;

@Data
public class MonthYearVesIdPayload {
    private String monthYear;
    private Integer vesId;

    public MonthYearVesIdPayload() {
    }

    public MonthYearVesIdPayload(String monthYear, Integer vesId) {
        this.monthYear = monthYear;
        this.vesId = vesId;
    }
}

