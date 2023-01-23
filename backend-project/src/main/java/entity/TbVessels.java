package entity;

import jakarta.persistence.*;

import java.math.BigInteger;
import java.util.Objects;

@Entity
@Table(name = "TB_VESSELS", schema = "dbo", catalog = "Navsho")
public class TbVessels {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ves_id", nullable = false)
    private int vesId;
    @Basic
    @Column(name = "ves_name_th", nullable = true, length = 20)
    private String vesNameTh;
    @Basic
    @Column(name = "big_machine_num", nullable = true)
    private Integer bigMachineNum;
    @Basic
    @Column(name = "electric_machine_num", nullable = true)
    private Integer electricMachineNum;
    @Basic
    @Column(name = "big_machine_used", nullable = true)
    private Integer bigMachineUsed;
    @Basic
    @Column(name = "electric_machine_used", nullable = true)
    private Integer electricMachineUsed;
    @Basic
    @Column(name = "air_conditioner", nullable = true)
    private Integer airConditioner;
    @Basic
    @Column(name = "air_compressor", nullable = true)
    private Integer airCompressor;
    @Basic
    @Column(name = "freezer", nullable = true)
    private Integer freezer;
    @Basic
    @Column(name = "ship_engine", nullable = true)
    private Integer shipEngine;
    @Basic
    @Column(name = "pump", nullable = true)
    private Integer pump;
    @Basic
    @Column(name = "rudder", nullable = true)
    private Integer rudder;
    @Basic
    @Column(name = "water_purifier", nullable = true)
    private Integer waterPurifier;
    @Basic
    @Column(name = "diesel_oil_separator", nullable = true)
    private Integer dieselOilSeparator;
    @Basic
    @Column(name = "gear", nullable = true)
    private Integer gear;
    @Basic
    @Column(name = "get_of_diesel", nullable = true, precision = 0)
    private BigInteger getOfDiesel;
    @Basic
    @Column(name = "get_of_benzine", nullable = true, precision = 0)
    private BigInteger getOfBenzine;
    @Basic
    @Column(name = "get_of_gadinia", nullable = true, precision = 0)
    private BigInteger getOfGadinia;
    @Basic
    @Column(name = "get_of_tellus", nullable = true, precision = 0)
    private BigInteger getOfTellus;
    @Basic
    @Column(name = "get_of_fresh_water", nullable = true, precision = 0)
    private BigInteger getOfFreshWater;
    @Basic
    @Column(name = "give_of_diesel", nullable = true, precision = 0)
    private BigInteger giveOfDiesel;
    @Basic
    @Column(name = "give_of_benzine", nullable = true, precision = 0)
    private BigInteger giveOfBenzine;
    @Basic
    @Column(name = "give_of_gadinia", nullable = true, precision = 0)
    private BigInteger giveOfGadinia;
    @Basic
    @Column(name = "give_of_tellus", nullable = true, precision = 0)
    private BigInteger giveOfTellus;
    @Basic
    @Column(name = "give_of_fresh_water", nullable = true, precision = 0)
    private BigInteger giveOfFreshWater;
    @Basic
    @Column(name = "month_year", nullable = true, length = 20)
    private String monthYear;
    @Basic
    @Column(name = "counsel", nullable = true, length = 255)
    private String counsel;
    @Basic
    @Column(name = "current_position", nullable = true)
    private Integer currentPosition;
    @Basic
    @Column(name = "ves_status", nullable = true)
    private Integer vesStatus;
    @Basic
    @Column(name = "used_of_diesel", nullable = true, precision = 0)
    private BigInteger usedOfDiesel;
    @Basic
    @Column(name = "used_of_benzine", nullable = true, precision = 0)
    private BigInteger usedOfBenzine;
    @Basic
    @Column(name = "used_of_gadinia", nullable = true, precision = 0)
    private BigInteger usedOfGadinia;
    @Basic
    @Column(name = "used_of_tellus", nullable = true, precision = 0)
    private BigInteger usedOfTellus;
    @Basic
    @Column(name = "used_of_fresh_water", nullable = true, precision = 0)
    private BigInteger usedOfFreshWater;
    @Basic
    @Column(name = "left_of_diesel", nullable = true, precision = 0)
    private BigInteger leftOfDiesel;
    @Basic
    @Column(name = "left_of_benzine", nullable = true, precision = 0)
    private BigInteger leftOfBenzine;
    @Basic
    @Column(name = "left_of_gadinia", nullable = true, precision = 0)
    private BigInteger leftOfGadinia;
    @Basic
    @Column(name = "left_of_tellus", nullable = true, precision = 0)
    private BigInteger leftOfTellus;
    @Basic
    @Column(name = "left_of_fresh_water", nullable = true, precision = 0)
    private BigInteger leftOfFreshWater;

    public int getVesId() {
        return vesId;
    }

    public void setVesId(int vesId) {
        this.vesId = vesId;
    }

    public String getVesNameTh() {
        return vesNameTh;
    }

    public void setVesNameTh(String vesNameTh) {
        this.vesNameTh = vesNameTh;
    }

    public Integer getBigMachineNum() {
        return bigMachineNum;
    }

    public void setBigMachineNum(Integer bigMachineNum) {
        this.bigMachineNum = bigMachineNum;
    }

    public Integer getElectricMachineNum() {
        return electricMachineNum;
    }

    public void setElectricMachineNum(Integer electricMachineNum) {
        this.electricMachineNum = electricMachineNum;
    }

    public Integer getBigMachineUsed() {
        return bigMachineUsed;
    }

    public void setBigMachineUsed(Integer bigMachineUsed) {
        this.bigMachineUsed = bigMachineUsed;
    }

    public Integer getElectricMachineUsed() {
        return electricMachineUsed;
    }

    public void setElectricMachineUsed(Integer electricMachineUsed) {
        this.electricMachineUsed = electricMachineUsed;
    }

    public Integer getAirConditioner() {
        return airConditioner;
    }

    public void setAirConditioner(Integer airConditioner) {
        this.airConditioner = airConditioner;
    }

    public Integer getAirCompressor() {
        return airCompressor;
    }

    public void setAirCompressor(Integer airCompressor) {
        this.airCompressor = airCompressor;
    }

    public Integer getFreezer() {
        return freezer;
    }

    public void setFreezer(Integer freezer) {
        this.freezer = freezer;
    }

    public Integer getShipEngine() {
        return shipEngine;
    }

    public void setShipEngine(Integer shipEngine) {
        this.shipEngine = shipEngine;
    }

    public Integer getPump() {
        return pump;
    }

    public void setPump(Integer pump) {
        this.pump = pump;
    }

    public Integer getRudder() {
        return rudder;
    }

    public void setRudder(Integer rudder) {
        this.rudder = rudder;
    }

    public Integer getWaterPurifier() {
        return waterPurifier;
    }

    public void setWaterPurifier(Integer waterPurifier) {
        this.waterPurifier = waterPurifier;
    }

    public Integer getDieselOilSeparator() {
        return dieselOilSeparator;
    }

    public void setDieselOilSeparator(Integer dieselOilSeparator) {
        this.dieselOilSeparator = dieselOilSeparator;
    }

    public Integer getGear() {
        return gear;
    }

    public void setGear(Integer gear) {
        this.gear = gear;
    }

    public BigInteger getGetOfDiesel() {
        return getOfDiesel;
    }

    public void setGetOfDiesel(BigInteger getOfDiesel) {
        this.getOfDiesel = getOfDiesel;
    }

    public BigInteger getGetOfBenzine() {
        return getOfBenzine;
    }

    public void setGetOfBenzine(BigInteger getOfBenzine) {
        this.getOfBenzine = getOfBenzine;
    }

    public BigInteger getGetOfGadinia() {
        return getOfGadinia;
    }

    public void setGetOfGadinia(BigInteger getOfGadinia) {
        this.getOfGadinia = getOfGadinia;
    }

    public BigInteger getGetOfTellus() {
        return getOfTellus;
    }

    public void setGetOfTellus(BigInteger getOfTellus) {
        this.getOfTellus = getOfTellus;
    }

    public BigInteger getGetOfFreshWater() {
        return getOfFreshWater;
    }

    public void setGetOfFreshWater(BigInteger getOfFreshWater) {
        this.getOfFreshWater = getOfFreshWater;
    }

    public BigInteger getGiveOfDiesel() {
        return giveOfDiesel;
    }

    public void setGiveOfDiesel(BigInteger giveOfDiesel) {
        this.giveOfDiesel = giveOfDiesel;
    }

    public BigInteger getGiveOfBenzine() {
        return giveOfBenzine;
    }

    public void setGiveOfBenzine(BigInteger giveOfBenzine) {
        this.giveOfBenzine = giveOfBenzine;
    }

    public BigInteger getGiveOfGadinia() {
        return giveOfGadinia;
    }

    public void setGiveOfGadinia(BigInteger giveOfGadinia) {
        this.giveOfGadinia = giveOfGadinia;
    }

    public BigInteger getGiveOfTellus() {
        return giveOfTellus;
    }

    public void setGiveOfTellus(BigInteger giveOfTellus) {
        this.giveOfTellus = giveOfTellus;
    }

    public BigInteger getGiveOfFreshWater() {
        return giveOfFreshWater;
    }

    public void setGiveOfFreshWater(BigInteger giveOfFreshWater) {
        this.giveOfFreshWater = giveOfFreshWater;
    }

    public String getMonthYear() {
        return monthYear;
    }

    public void setMonthYear(String monthYear) {
        this.monthYear = monthYear;
    }

    public String getCounsel() {
        return counsel;
    }

    public void setCounsel(String counsel) {
        this.counsel = counsel;
    }

    public Integer getCurrentPosition() {
        return currentPosition;
    }

    public void setCurrentPosition(Integer currentPosition) {
        this.currentPosition = currentPosition;
    }

    public Integer getVesStatus() {
        return vesStatus;
    }

    public void setVesStatus(Integer vesStatus) {
        this.vesStatus = vesStatus;
    }

    public BigInteger getUsedOfDiesel() {
        return usedOfDiesel;
    }

    public void setUsedOfDiesel(BigInteger usedOfDiesel) {
        this.usedOfDiesel = usedOfDiesel;
    }

    public BigInteger getUsedOfBenzine() {
        return usedOfBenzine;
    }

    public void setUsedOfBenzine(BigInteger usedOfBenzine) {
        this.usedOfBenzine = usedOfBenzine;
    }

    public BigInteger getUsedOfGadinia() {
        return usedOfGadinia;
    }

    public void setUsedOfGadinia(BigInteger usedOfGadinia) {
        this.usedOfGadinia = usedOfGadinia;
    }

    public BigInteger getUsedOfTellus() {
        return usedOfTellus;
    }

    public void setUsedOfTellus(BigInteger usedOfTellus) {
        this.usedOfTellus = usedOfTellus;
    }

    public BigInteger getUsedOfFreshWater() {
        return usedOfFreshWater;
    }

    public void setUsedOfFreshWater(BigInteger usedOfFreshWater) {
        this.usedOfFreshWater = usedOfFreshWater;
    }

    public BigInteger getLeftOfDiesel() {
        return leftOfDiesel;
    }

    public void setLeftOfDiesel(BigInteger leftOfDiesel) {
        this.leftOfDiesel = leftOfDiesel;
    }

    public BigInteger getLeftOfBenzine() {
        return leftOfBenzine;
    }

    public void setLeftOfBenzine(BigInteger leftOfBenzine) {
        this.leftOfBenzine = leftOfBenzine;
    }

    public BigInteger getLeftOfGadinia() {
        return leftOfGadinia;
    }

    public void setLeftOfGadinia(BigInteger leftOfGadinia) {
        this.leftOfGadinia = leftOfGadinia;
    }

    public BigInteger getLeftOfTellus() {
        return leftOfTellus;
    }

    public void setLeftOfTellus(BigInteger leftOfTellus) {
        this.leftOfTellus = leftOfTellus;
    }

    public BigInteger getLeftOfFreshWater() {
        return leftOfFreshWater;
    }

    public void setLeftOfFreshWater(BigInteger leftOfFreshWater) {
        this.leftOfFreshWater = leftOfFreshWater;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TbVessels tbVessels = (TbVessels) o;
        return vesId == tbVessels.vesId && Objects.equals(vesNameTh, tbVessels.vesNameTh) && Objects.equals(bigMachineNum, tbVessels.bigMachineNum) && Objects.equals(electricMachineNum, tbVessels.electricMachineNum) && Objects.equals(bigMachineUsed, tbVessels.bigMachineUsed) && Objects.equals(electricMachineUsed, tbVessels.electricMachineUsed) && Objects.equals(airConditioner, tbVessels.airConditioner) && Objects.equals(airCompressor, tbVessels.airCompressor) && Objects.equals(freezer, tbVessels.freezer) && Objects.equals(shipEngine, tbVessels.shipEngine) && Objects.equals(pump, tbVessels.pump) && Objects.equals(rudder, tbVessels.rudder) && Objects.equals(waterPurifier, tbVessels.waterPurifier) && Objects.equals(dieselOilSeparator, tbVessels.dieselOilSeparator) && Objects.equals(gear, tbVessels.gear) && Objects.equals(getOfDiesel, tbVessels.getOfDiesel) && Objects.equals(getOfBenzine, tbVessels.getOfBenzine) && Objects.equals(getOfGadinia, tbVessels.getOfGadinia) && Objects.equals(getOfTellus, tbVessels.getOfTellus) && Objects.equals(getOfFreshWater, tbVessels.getOfFreshWater) && Objects.equals(giveOfDiesel, tbVessels.giveOfDiesel) && Objects.equals(giveOfBenzine, tbVessels.giveOfBenzine) && Objects.equals(giveOfGadinia, tbVessels.giveOfGadinia) && Objects.equals(giveOfTellus, tbVessels.giveOfTellus) && Objects.equals(giveOfFreshWater, tbVessels.giveOfFreshWater) && Objects.equals(monthYear, tbVessels.monthYear) && Objects.equals(counsel, tbVessels.counsel) && Objects.equals(currentPosition, tbVessels.currentPosition) && Objects.equals(vesStatus, tbVessels.vesStatus) && Objects.equals(usedOfDiesel, tbVessels.usedOfDiesel) && Objects.equals(usedOfBenzine, tbVessels.usedOfBenzine) && Objects.equals(usedOfGadinia, tbVessels.usedOfGadinia) && Objects.equals(usedOfTellus, tbVessels.usedOfTellus) && Objects.equals(usedOfFreshWater, tbVessels.usedOfFreshWater) && Objects.equals(leftOfDiesel, tbVessels.leftOfDiesel) && Objects.equals(leftOfBenzine, tbVessels.leftOfBenzine) && Objects.equals(leftOfGadinia, tbVessels.leftOfGadinia) && Objects.equals(leftOfTellus, tbVessels.leftOfTellus) && Objects.equals(leftOfFreshWater, tbVessels.leftOfFreshWater);
    }

    @Override
    public int hashCode() {
        return Objects.hash(vesId, vesNameTh, bigMachineNum, electricMachineNum, bigMachineUsed, electricMachineUsed, airConditioner, airCompressor, freezer, shipEngine, pump, rudder, waterPurifier, dieselOilSeparator, gear, getOfDiesel, getOfBenzine, getOfGadinia, getOfTellus, getOfFreshWater, giveOfDiesel, giveOfBenzine, giveOfGadinia, giveOfTellus, giveOfFreshWater, monthYear, counsel, currentPosition, vesStatus, usedOfDiesel, usedOfBenzine, usedOfGadinia, usedOfTellus, usedOfFreshWater, leftOfDiesel, leftOfBenzine, leftOfGadinia, leftOfTellus, leftOfFreshWater);
    }
}
