package com.kaset.backendProject.model.payload;

import lombok.Data;

@Data
public class UserList {
    private String commanderName;
    private String technicalName;
    private String commandOffName;

    public UserList() {
    }

    public UserList(String commanderName, String technicalName, String commandOffName) {
        this.commanderName = commanderName;
        this.technicalName = technicalName;
        this.commandOffName = commandOffName;
    }
}
