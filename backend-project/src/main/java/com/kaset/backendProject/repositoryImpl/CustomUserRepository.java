package com.kaset.backendProject.repositoryImpl;

import com.kaset.backendProject.model.payload.UserPayload;

public interface CustomUserRepository {

    void changeUserStatus(UserPayload userPayload);

    void insertNewUser(UserPayload userPayload);
}
