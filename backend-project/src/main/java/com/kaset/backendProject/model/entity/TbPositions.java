package com.kaset.backendProject.model.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "TB_POSITIONS", schema = "dbo", catalog = "Navsho")
public class TbPositions {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "position_id")
    private int positionId;
    @Basic
    @Column(name = "position_name_th")
    private String positionNameTh;
    @Basic
    @Column(name = "position_name_en")
    private String positionNameEn;
    @Basic
    @Column(name = "position_desc")
    private String positionDesc;
    @Basic
    @Column(name = "rank_th")
    private String rankTh;
    @Basic
    @Column(name = "rank_en")
    private String rankEn;

    public int getPositionId() {
        return positionId;
    }

    public void setPositionId(int positionId) {
        this.positionId = positionId;
    }

    public String getPositionNameTh() {
        return positionNameTh;
    }

    public void setPositionNameTh(String positionNameTh) {
        this.positionNameTh = positionNameTh;
    }

    public String getPositionNameEn() {
        return positionNameEn;
    }

    public void setPositionNameEn(String positionNameEn) {
        this.positionNameEn = positionNameEn;
    }

    public String getPositionDesc() {
        return positionDesc;
    }

    public void setPositionDesc(String positionDesc) {
        this.positionDesc = positionDesc;
    }

    public String getRankTh() {
        return rankTh;
    }

    public void setRankTh(String rankTh) {
        this.rankTh = rankTh;
    }

    public String getRankEn() {
        return rankEn;
    }

    public void setRankEn(String rankEn) {
        this.rankEn = rankEn;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TbPositions that = (TbPositions) o;
        return positionId == that.positionId && Objects.equals(positionNameTh, that.positionNameTh) && Objects.equals(positionNameEn, that.positionNameEn) && Objects.equals(positionDesc, that.positionDesc) && Objects.equals(rankTh, that.rankTh) && Objects.equals(rankEn, that.rankEn);
    }

    @Override
    public int hashCode() {
        return Objects.hash(positionId, positionNameTh, positionNameEn, positionDesc, rankTh, rankEn);
    }
}
