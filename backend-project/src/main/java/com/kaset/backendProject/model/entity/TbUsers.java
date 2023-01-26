package com.kaset.backendProject.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.kaset.backendProject.model.payload.UserPayload;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.Objects;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Data
@Table(name = "TB_USERS", schema = "dbo", catalog = "Navsho")
@NamedNativeQueries({
    @NamedNativeQuery(
            name = "TbUsers.findUserByUsername",
            query = "SELECT ves_id, user_id, CONCAT(first_name,' ',last_name) as userName , " +
                    " TP.position_name_th, passcode as [password], TU.position_id as positionId FROM TB_USERS TU INNER JOIN TB_POSITIONS" +
                    " TP on TP.position_id = TU.position_id WHERE username = :username ",
            resultSetMapping = "userMapping")
})
@SqlResultSetMappings({
        @SqlResultSetMapping(name = "userMapping",classes = {
                @ConstructorResult(targetClass = UserPayload.class, columns = {
                        @ColumnResult(name = "user_id",type = Integer.class),
                        @ColumnResult(name = "ves_id",type = Integer.class),
                        @ColumnResult(name = "userName",type = String.class),
                        @ColumnResult(name = "position_name_th",type = String.class),
                        @ColumnResult(name = "positionId",type = Integer.class),
                        @ColumnResult(name = "[password]", type = String.class)
                })
        })
})

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
    @Column(name = "position_id", nullable = true)
    private Integer positionId;
    @Basic
    @Column(name = "ves_id", nullable = true)
    private Integer vesId;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TbUsers tbUsers)) return false;
        return getUserId() == tbUsers.getUserId() && Objects.equals(getUsername(), tbUsers.getUsername()) && Objects.equals(getPasscode(), tbUsers.getPasscode()) && Objects.equals(getFirstName(), tbUsers.getFirstName()) && Objects.equals(getLastName(), tbUsers.getLastName()) && Objects.equals(getStatusId(), tbUsers.getStatusId()) && Objects.equals(getPositionId(), tbUsers.getPositionId()) && Objects.equals(getVesId(), tbUsers.getVesId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getUserId(), getUsername(), getPasscode(), getFirstName(), getLastName(), getStatusId(), getPositionId(), getVesId());
    }
}
