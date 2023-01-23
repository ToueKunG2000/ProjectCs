package com.kaset.backendProject.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.Objects;

@Entity
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "TB_STATUS", schema = "dbo", catalog = "Navsho")
public class TbStatus implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "status_id", nullable = false)
    private int statusId;
    @Basic
    @Column(name = "status_code", nullable = true, length = 20)
    private String statusCode;
    @Basic
    @Column(name = "status_desc", nullable = true, length = 20)
    private String statusDesc;

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
