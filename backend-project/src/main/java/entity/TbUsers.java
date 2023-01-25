package entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "TB_USERS", schema = "dbo", catalog = "Navsho")
public class TbUsers {
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
    private Integer roleId;
    @Basic
    @Column(name = "ves_id", nullable = true)
    private Integer vesId;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPasscode() {
        return passcode;
    }

    public void setPasscode(String passcode) {
        this.passcode = passcode;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Integer getStatusId() {
        return statusId;
    }

    public void setStatusId(Integer statusId) {
        this.statusId = statusId;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public Integer getVesId() {
        return vesId;
    }

    public void setVesId(Integer vesId) {
        this.vesId = vesId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TbUsers tbUsers = (TbUsers) o;
        return userId == tbUsers.userId && Objects.equals(username, tbUsers.username) && Objects.equals(passcode, tbUsers.passcode) && Objects.equals(firstName, tbUsers.firstName) && Objects.equals(lastName, tbUsers.lastName) && Objects.equals(statusId, tbUsers.statusId) && Objects.equals(roleId, tbUsers.roleId) && Objects.equals(vesId, tbUsers.vesId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, username, passcode, firstName, lastName, statusId, roleId, vesId);
    }
}
