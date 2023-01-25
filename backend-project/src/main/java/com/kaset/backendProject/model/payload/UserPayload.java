package com.kaset.backendProject.model.payload;

import lombok.Data;

@Data
public class UserPayload {
    private Integer userId;
    private Integer vesId;
    private String userName;
    private String positionName;

    private String password;

    public UserPayload() {
    }

    public UserPayload(Integer userId, Integer vesId, String userName, String positionName, String password) {
        this.userId = userId;
        this.vesId = vesId;
        this.userName = userName;
        this.positionName = positionName;
        this.password = password;
    }

}
