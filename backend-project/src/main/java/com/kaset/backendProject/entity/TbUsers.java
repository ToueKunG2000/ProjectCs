/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.kaset.backendProject.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "TB_USERS", schema = "dbo", catalog = "Navsho")
public class TbUsers {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user_id")
    private int userId;
    @Basic
    @Column(name = "username")
    private String username;
    @Basic
    @Column(name = "passcode")
    private String passcode;
    @Basic
    @Column(name = "first_name")
    private String firstName;
    @Basic
    @Column(name = "last_name")
    private String lastName;
    @Basic
    @Column(name = "status_id")
    private Integer statusId;
    @Basic
    @Column(name = "role_id")
    private Integer roleId;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPasscode() {
        return passcode;
    }

    public void setPasscode(String passcode) {
        this.passcode = passcode;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Integer getStatusId() {
        return statusId;
    }

    public void setStatusId(Integer statusId) {
        this.statusId = statusId;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TbUsers tbUsers)) return false;
        return getUserId() == tbUsers.getUserId() && Objects.equals(getUsername(), tbUsers.getUsername()) && Objects.equals(getPasscode(), tbUsers.getPasscode()) && Objects.equals(getFirstName(), tbUsers.getFirstName()) && Objects.equals(getLastName(), tbUsers.getLastName()) && Objects.equals(getStatusId(), tbUsers.getStatusId()) && Objects.equals(getRoleId(), tbUsers.getRoleId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getUserId(), getUsername(), getPasscode(), getFirstName(), getLastName(), getStatusId(), getRoleId());
    }
}
