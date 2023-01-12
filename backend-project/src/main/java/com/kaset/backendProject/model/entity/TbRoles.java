package com.kaset.backendProject.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Objects;

@Entity
@Data
@Table(name = "TB_ROLES", schema = "dbo", catalog = "Navsho")
public class TbRoles {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "role_id")
    private int roleId;
    @Basic
    @Column(name = "role_name_th")
    private String roleNameTh;
    @Basic
    @Column(name = "role_name_en")
    private String roleNameEn;
    @Basic
    @Column(name = "role_desc")
    private String roleDesc;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TbRoles tbRoles)) return false;
        return getRoleId() == tbRoles.getRoleId() && Objects.equals(getRoleNameTh(), tbRoles.getRoleNameTh()) && Objects.equals(getRoleNameEn(), tbRoles.getRoleNameEn()) && Objects.equals(getRoleDesc(), tbRoles.getRoleDesc());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getRoleId(), getRoleNameTh(), getRoleNameEn(), getRoleDesc());
    }
}
