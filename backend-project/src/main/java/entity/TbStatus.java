package entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "TB_STATUS", schema = "dbo", catalog = "Navsho")
public class TbStatus {
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

    public int getStatusId() {
        return statusId;
    }

    public void setStatusId(int statusId) {
        this.statusId = statusId;
    }

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TbStatus tbStatus = (TbStatus) o;
        return statusId == tbStatus.statusId && Objects.equals(statusCode, tbStatus.statusCode) && Objects.equals(statusDesc, tbStatus.statusDesc);
    }

    @Override
    public int hashCode() {
        return Objects.hash(statusId, statusCode, statusDesc);
    }
}
