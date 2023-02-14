package com.kaset.backendProject.model.payload;

import lombok.Data;

@Data
public class UserPayload {
    private Integer userId;
    private Integer vesId;

    private String name;

    private String username;
    private String positionName;

    private String firstName;

    private String lastName;

    private Integer positionId;

    private String password;

    private Integer userStatus;

    private String userPhoto;

    public UserPayload() {
    }

    public UserPayload(Integer userId, Integer vesId, String name, String positionName, Integer positionId, String password, String userPhoto) {
        this.userId = userId;
        this.vesId = vesId;
        this.name = name;
        this.positionName = positionName;
        this.positionId = positionId;
        this.password = password;
        this.userPhoto = userPhoto;
    }

    public UserPayload(Integer userId, String name, Integer positionId, Integer userStatus, String positionNameTh, String userPhoto) {
        this.userId = userId;
        this.name = name;
        this.positionId = positionId;
        this.userStatus = userStatus;
        this.positionName = positionNameTh;
        this.userPhoto = userPhoto;
    }
}
