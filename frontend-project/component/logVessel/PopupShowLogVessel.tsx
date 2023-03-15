import {
  CheckLogMonthYearForm,
  DynamicInputItem,
  ReportName,
  VesselForm,
} from "../common/interface";
import { useEffect, useState } from "react";
import { VesselServices } from "./../../services/vessel.service";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { UserServices } from "../../services/user.service";

interface PopupShowLogVesselProps {
  request: CheckLogMonthYearForm;
}
const PopupShowLogVessel = (props: PopupShowLogVesselProps) => {
  const { request } = props;
  const userService = new UserServices();
  const vesselService = new VesselServices();
  const [vesselData, setVesselData] = useState<VesselForm>();
  const [userList,setUserList] = useState<ReportName>();


  useEffect(() => {
    const fetchData = () => {
      vesselService.getLogVessel(request).then((res) => {
        setVesselData(res.data);
        userService.getUserInfo(res.data.commanderValidateUserId).then((res)=>{
          setUserList(res.data);
        })
      });
    };
    fetchData();
  }, []);

  const usedElectricHourUpper = [
    {
      airConditioner:vesselData?.airConditioner,
      airCompressor:vesselData?.airCompressor,
      pump:vesselData?.pump,
      freezer:vesselData?.freezer,
      gear: vesselData?.gear,
    }
  ];

   const usedElectricHourLower = [
    {
      oilSeperator: vesselData?.dieselOilSeparator,
      rudder: vesselData?.rudder,
      shipEngine: vesselData?.shipEngine,
      waterPurifier: vesselData?.waterPurifier
    }
  ];
  

  const AllData = [
    {
      header: "การรับ",
      benzine: vesselData?.getOfBenzine,
      diesel: vesselData?.getOfDiesel,
      gadinia: vesselData?.getOfGadinia,
      tellus: vesselData?.getOfTellus,
      freshwater: vesselData?.getOfFreshWater,
    },
    {
      header: "การใช้",
      benzine: vesselData?.usedOfBenzine,
      diesel: vesselData?.usedOfDiesel,
      gadinia: vesselData?.usedOfGadinia,
      tellus: vesselData?.usedOfTellus,
      freshwater: vesselData?.usedOfFreshWater,
    },
    {
      header: "จ่ายออก",
      benzine: vesselData?.giveOfBenzine,
      diesel: vesselData?.giveOfDiesel,
      gadinia: vesselData?.giveOfGadinia,
      tellus: vesselData?.giveOfTellus,
      freshwater: vesselData?.giveOfFreshWater,
    },
    {
      header: "คงเหลือ",
      benzine: vesselData?.leftOfBenzine,
      diesel: vesselData?.leftOfDiesel,
      gadinia: vesselData?.leftOfGadinia,
      tellus: vesselData?.leftOfTellus,
      freshwater: vesselData?.leftOfFreshWater,
    },
  ]



  const bigMachineResource: DynamicInputItem[] = [
    {
      type: "label",
      label: "การใช้งานเครื่องจักรใหญ่",
      data: vesselData?.bigMachineUsed,
    },
  ];
  const electricMachineResource: DynamicInputItem[] = [
    {
      type: "label",
      label: "การใช้งานเครื่องใช้ไฟฟ้า",
      data: vesselData?.electricMachineUsed,
    },
  ];

  return (
    <>
      <div>
        <h1>{`บันทึกของรอบ ${vesselData?.monthYear}`}</h1>
        <h1>{`ชื่อเรือ ${vesselData?.vesName}`}</h1>
        <div className="flex flex-column align-items-center">
        <h1>การใช้งานเครื่องจักรใหญ่/เครื่องไฟฟ้า</h1>
        <h2>{`จำนวนเครื่องจักรใหญ่ ${vesselData?.bigMachineNum} เครื่อง มีการใช้งานเครื่องจักรใหญ่ ${vesselData?.bigMachineUsed} ชั่วโมง`}</h2>
        <h2>{`จำนวนเครื่องไฟฟ้า ${vesselData?.electricMachineNum} เครื่อง มีการใช้งานเครื่องไฟฟ้า ${vesselData?.electricMachineUsed} ชั่วโมง`}</h2>
        </div>
        <div className="flex flex-column align-items-center">
        <h1>การใช้งานเครื่องจักร (ชั่วโมง)</h1>
        <DataTable style={{width: '90%'}} showGridlines  value={usedElectricHourUpper} >
          <Column style={{width:'20%'}} align={"center"} header="เครื่องปรับอากาศ" field="airConditioner"/>
          <Column style={{width:'20%'}} align={"center"} header="เครื่องอัดลม" field="airCompressor"/>
          <Column style={{width:'20%'}} align={"center"} header="ปั้ม" field="pump"/>
          <Column style={{width:'20%'}} align={"center"} header="เครื่องทำความเย็น" field="freezer"/>
          <Column style={{width:'20%'}} align={"center"} header="เกียร์" field="gear"/>
        </DataTable>
        <br/>
        <DataTable style={{width: '90%'}} showGridlines  value={usedElectricHourLower} >
          <Column style={{width:'25%'}} align={"center"} header="เครื่องแยกน้ำมันดีเซล" field="oilSeperator"/>
          <Column style={{width:'25%'}} align={"center"} header="หางเสือ" field="rudder"/>
          <Column style={{width:'25%'}} align={"center"} header="เรือยนต์" field="shipEngine"/>
          <Column style={{width:'25%'}} align={"center"} header="เครื่องกรองน้ำ" field="waterPurifier"/>
        </DataTable>
        </div>

        <h1>{"การรับ-ใช้-จ่ายทรัพยากร"}</h1>
        <DataTable showGridlines  value={AllData} >
          <Column header="รายการ" field="header"/>
          <Column header="ดีเซล (กิโลลิตร)" align={"center"} field="diesel"/>
          <Column header="เบนซิน(ลิตร)" align={"center"} field="benzine"/>
          <Column header="กลาดิเนีย (ลิตร)" align={"center"} field="gadinia"/>
          <Column header="เทลลัส (ลิตร)" align={"center"} field="tellus"/>
          <Column header="น้ำจืด (ตัน)" align={"center"} field="freshwater"/>
        </DataTable>
        <h2 style={{textDecoration: 'underline'}}>ผู้ตรวจสอบ</h2>
        <h2>ผบ. กตอ : {userList?.commanderName}</h2>
        <h2>ผอ. การช่าง : {userList?.technicalName}</h2>
        <h2>ผู้บังคับการเรือ : {userList?.commandOffName}</h2>
      </div>
    </>
  );
};
export default PopupShowLogVessel;
