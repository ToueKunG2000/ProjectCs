package com.kaset.backendProject.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.kaset.backendProject.model.payload.DropdownPayload;
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
            query = "SELECT ves_id, user_id, CONCAT(TP.rank_th,' ',first_name,' ',last_name) as userName , " +
                    " TP.position_name_th, passcode as [password], TU.position_id as positionId, CAST(user_photo as VARCHAR(max)) as userPhoto FROM TB_USERS TU INNER JOIN TB_POSITIONS" +
                    " TP on TP.position_id = TU.position_id WHERE username = :username ",
            resultSetMapping = "userMapping"),
    @NamedNativeQuery(
            name = "TbUsers.getAllUser",
            query = "SELECT user_id, CONCAT(TP.rank_th,' ',first_name,' ',last_name) as userName," +
                    " TU.position_id as positionId, user_status, TP.position_name_th as positionName, CAST(user_photo as VARCHAR(max)) as userPhoto" +
                    " FROM TB_USERS TU INNER JOIN TB_POSITIONS TP on TP.position_id = TU.position_id WHERE TU.position_id < 4",
            resultSetMapping = "userManage"),
    @NamedNativeQuery(
            name = "TbUsers.getUserDropdown",
            query = "SELECT user_id, CONCAT(TP.rank_th,' ',TU.first_name,' ',TU.last_name) as name " +
                    "FROM TB_USERS TU INNER JOIN TB_POSITIONS TP on TP.position_id = TU.position_id " +
                    "WHERE TU.position_id = :positionId AND TU.user_status = 1 ",
            resultSetMapping = "userDropdown"),
    @NamedNativeQuery(
            name = "TbUsers.checkUserIdInVessel",
            query = "SELECT user_id FROM TB_USERS WHERE position_id = :positionId AND ves_id = :vesId ",
            resultSetMapping = "userId"
    )
})
@SqlResultSetMappings({
        @SqlResultSetMapping(name = "userId",columns = {
                @ColumnResult(name = "user_id")
        }),
        @SqlResultSetMapping(name = "userMapping",classes = {
                @ConstructorResult(targetClass = UserPayload.class, columns = {
                        @ColumnResult(name = "user_id",type = Integer.class),
                        @ColumnResult(name = "ves_id",type = Integer.class),
                        @ColumnResult(name = "userName",type = String.class),
                        @ColumnResult(name = "position_name_th",type = String.class),
                        @ColumnResult(name = "positionId",type = Integer.class),
                        @ColumnResult(name = "[password]", type = String.class),
                        @ColumnResult(name = "userPhoto",type = String.class)
                })
        }),
        @SqlResultSetMapping(name = "userManage", classes = {
                @ConstructorResult(targetClass = UserPayload.class, columns = {
                        @ColumnResult(name = "user_id"),
                        @ColumnResult(name = "userName"),
                        @ColumnResult(name = "positionId"),
                        @ColumnResult(name = "user_status"),
                        @ColumnResult(name = "positionName"),
                        @ColumnResult(name = "userPhoto",type = String.class)

                })
        }),
        @SqlResultSetMapping(name = "userDropdown", classes = {
                @ConstructorResult(targetClass = DropdownPayload.class, columns = {
                        @ColumnResult(name = "user_id"),
                        @ColumnResult(name = "name"),
                })
        })
})

public class TbUsers implements Serializable {
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
    @Column(name = "user_status")
    private Integer userStatus;
    @Basic
    @Column(name = "position_id")
    private Integer positionId;
    @Basic
    @Column(name = "ves_id")
    private Integer vesId;
    @Basic
    @Column(name = "user_photo")
    private String userPhoto;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TbUsers tbUsers)) return false;
        return getUserId() == tbUsers.getUserId() && Objects.equals(getUsername(), tbUsers.getUsername()) && Objects.equals(getPasscode(), tbUsers.getPasscode()) && Objects.equals(getFirstName(), tbUsers.getFirstName()) && Objects.equals(getLastName(), tbUsers.getLastName()) && Objects.equals(getUserStatus(), tbUsers.getUserStatus()) && Objects.equals(getPositionId(), tbUsers.getPositionId()) && Objects.equals(getVesId(), tbUsers.getVesId()) && Objects.equals(getUserPhoto(), tbUsers.getUserPhoto());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getUserId(), getUsername(), getPasscode(), getFirstName(), getLastName(), getUserStatus(), getPositionId(), getVesId(), getUserPhoto());
    }
}
