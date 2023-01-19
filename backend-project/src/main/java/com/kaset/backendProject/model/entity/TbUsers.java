package com.kaset.backendProject.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Objects;

@Entity
@Data
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
    @Basic
    @Column(name = "ves_id")
    private Integer vesId;

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

    public Integer getVesId() {
        return vesId;
    }

    public void setVesId(Integer vesId) {
        this.vesId = vesId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TbUsers tbUsers)) return false;
        return getUserId() == tbUsers.getUserId() && Objects.equals(getUsername(), tbUsers.getUsername()) && Objects.equals(getPasscode(), tbUsers.getPasscode()) && Objects.equals(getFirstName(), tbUsers.getFirstName()) && Objects.equals(getLastName(), tbUsers.getLastName()) && Objects.equals(getStatusId(), tbUsers.getStatusId()) && Objects.equals(getRoleId(), tbUsers.getRoleId()) && Objects.equals(getVesId(), tbUsers.getVesId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getUserId(), getUsername(), getPasscode(), getFirstName(), getLastName(), getStatusId(), getRoleId(), getVesId());
    }
}
