package com.kaset.backendProject.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.Objects;

@Entity
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "TB_POSITIONS", schema = "dbo", catalog = "Navsho")
public class TbPositions implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "position_id", nullable = false)
    private int positionId;
    @Basic
    @Column(name = "position_name_th", nullable = true, length = 100)
    private String positionNameTh;
    @Basic
    @Column(name = "position_name_en", nullable = true, length = 100)
    private String positionNameEn;
    @Basic
    @Column(name = "position_desc", nullable = true, length = 100)
    private String positionDesc;
    @Basic
    @Column(name = "rank_th", nullable = true, length = 20)
    private String rankTh;
    @Basic
    @Column(name = "rank_en", nullable = true, length = 20)
    private String rankEn;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TbPositions that)) return false;
        return getPositionId() == that.getPositionId() && Objects.equals(getPositionNameTh(), that.getPositionNameTh()) && Objects.equals(getPositionNameEn(), that.getPositionNameEn()) && Objects.equals(getPositionDesc(), that.getPositionDesc()) && Objects.equals(getRankTh(), that.getRankTh()) && Objects.equals(getRankEn(), that.getRankEn());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPositionId(), getPositionNameTh(), getPositionNameEn(), getPositionDesc(), getRankTh(), getRankEn());
    }
}
