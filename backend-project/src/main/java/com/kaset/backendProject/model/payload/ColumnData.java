package com.kaset.backendProject.model.payload;

import lombok.Data;

@Data
public class ColumnData {

    private Float data;

    private String monthYear;

    public ColumnData() {

    }

    public ColumnData(Float data, String monthYear) {
        this.data = data;
        this.monthYear = monthYear;
    }
}
