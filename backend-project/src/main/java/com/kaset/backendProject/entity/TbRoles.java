/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.kaset.backendProject.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "TB_ROLES", schema = "dbo", catalog = "Navsho")
@NamedQueries({
        @NamedQuery(name = "TbRoles.findAll", query = "SELECT t FROM TbRoles t"),
        @NamedQuery(name = "TbRoles.findByRoleId", query = "SELECT t FROM TbRoles t WHERE t.roleId = :roleId"),
        @NamedQuery(name = "TbRoles.findByRoleNameTh", query = "SELECT t FROM TbRoles t WHERE t.roleNameTh = :roleNameTh"),
        @NamedQuery(name = "TbRoles.findByRoleNameEn", query = "SELECT t FROM TbRoles t WHERE t.roleNameEn = :roleNameEn"),
        @NamedQuery(name = "TbRoles.findByRoleDesc", query = "SELECT t FROM TbRoles t WHERE t.roleDesc = :roleDesc")})
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

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    public String getRoleNameTh() {
        return roleNameTh;
    }

    public void setRoleNameTh(String roleNameTh) {
        this.roleNameTh = roleNameTh;
    }

    public String getRoleNameEn() {
        return roleNameEn;
    }

    public void setRoleNameEn(String roleNameEn) {
        this.roleNameEn = roleNameEn;
    }

    public String getRoleDesc() {
        return roleDesc;
    }

    public void setRoleDesc(String roleDesc) {
        this.roleDesc = roleDesc;
    }


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