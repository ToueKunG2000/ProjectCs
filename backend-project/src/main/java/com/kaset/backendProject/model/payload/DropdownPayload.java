package com.kaset.backendProject.model.payload;

import lombok.Data;

@Data
public class DropdownPayload {
    private Integer value;
    private String label;

    public DropdownPayload() {
    }

    public DropdownPayload(Integer value, String label) {
        this.value = value;
        this.label = label;
    }
}
