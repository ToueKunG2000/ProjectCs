package com.kaset.backendProject.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.Objects;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Data
@Table(name = "TB_USERS", schema = "dbo", catalog = "Navsho")
public class TbUsers implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user_id", nullable = false)
    private int userId;
    @Basic
    @Column(name = "username", nullable = true, length = 50)
    private String username;
    @Basic
    @Column(name = "passcode", nullable = true, length = 255)
    private String passcode;
    @Basic
    @Column(name = "first_name", nullable = true, length = 100)
    private String firstName;
    @Basic
    @Column(name = "last_name", nullable = true, length = 100)
    private String lastName;
    @Basic
    @Column(name = "status_id", nullable = true)
    private Integer statusId;
    @Basic
    @Column(name = "role_id", nullable = true)
    private Integer roleId;
    @Basic
    @Column(name = "ves_id", nullable = true)
    private Integer vesId;


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
