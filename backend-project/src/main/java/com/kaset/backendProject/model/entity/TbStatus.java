package com.kaset.backendProject.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Objects;

@Entity
@Data
@Table(name = "TB_STATUS", schema = "dbo", catalog = "Navsho")
public class TbStatus {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "status_id")
    private int statusId;
    @Basic
    @Column(name = "status_code")
    private String statusCode;
    @Basic
    @Column(name = "status_desc")
    private String statusDesc;

    public String getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(String statusCode) {
        this.statusCode = statusCode;
    }

    public String getStatusDesc() {
        return statusDesc;
    }

    public void setStatusDesc(String statusDesc) {
        this.statusDesc = statusDesc;
    }

    public int getStatusId() {
        return statusId;
    }

    public void setStatusId(int statusId) {
        this.statusId = statusId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TbStatus tbStatus)) return false;
        return getStatusId() == tbStatus.getStatusId() && Objects.equals(getStatusCode(), tbStatus.getStatusCode()) && Objects.equals(getStatusDesc(), tbStatus.getStatusDesc());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getStatusId(), getStatusCode(), getStatusDesc());
    }
}
