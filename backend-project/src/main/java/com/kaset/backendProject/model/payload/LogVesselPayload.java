package com.kaset.backendProject.model.payload;

import lombok.Data;

import java.io.Serializable;
import java.util.Objects;

@Data
public class LogVesselPayload implements Serializable {

    private Integer vesId;
    private String monthYear;
    private String vesName;

    public LogVesselPayload() {
    }

    public LogVesselPayload(Integer vesId, String monthYear, String vesName) {
        this.vesId = vesId;
        this.monthYear = monthYear;
        this.vesName = vesName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof LogVesselPayload that)) return false;
        return Objects.equals(getVesId(), that.getVesId()) && Objects.equals(getMonthYear(), that.getMonthYear()) && Objects.equals(getVesName(), that.getVesName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getVesId(), getMonthYear(), getVesName());
    }
}
