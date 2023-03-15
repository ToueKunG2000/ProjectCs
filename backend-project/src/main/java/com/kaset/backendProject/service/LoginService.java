package com.kaset.backendProject.service;

import com.kaset.backendProject.model.payload.UserPayload;

public interface LoginService {
    Boolean checkUsernameDup(String username);

    UserPayload checkUser(String username, String password);
}
