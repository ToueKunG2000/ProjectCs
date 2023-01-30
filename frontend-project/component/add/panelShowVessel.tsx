import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { VesselService } from "../../services/vessel.service";
import DynamicHorizonInput from "../common/dynamicHorizonInput";
import InputNumberField from "../common/input/inputNumber";
import { DynamicInputItem, UserForm, VesselForm } from "../common/interface";
import PopupPage from "../common/popupPage";
import styles from "../../styles/AddPage.module.css";
import { UpdateForm } from "./../common/interface";

interface AddPageProps {
  setPage: Dispatch<SetStateAction<number>>;
  defaultValues?: VesselForm;
}

const PanelShowVessel = (props: AddPageProps) => {
  const { setPage, defaultValues } = props;
  const [isShowButton, setIsShowButton] = useState(false);
  const vesselService = new VesselService();
  const [user, setUser] = useState<UserForm>();
  const [totalLeftOfBenzine, setTotalLeftOfBenzine] = useState(0);
  const [totalLeftOfDiesel, setTotalLeftOfDiesel] = useState(0);
  const [totalLeftOfGadinia, setTotalLeftOfGadinia] = useState(0);
  const [totalLeftOfTellus, setTotalLeftOfTellus] = useState(0);
  const [totalLeftOfFreshWater, setTotalLeftOfFreshWater] = useState(0);

  useEffect(() => {
    const total =
      defaultValues!.getOfBenzine +
      defaultValues!.leftOfBenzine -
      defaultValues!.giveOfBenzine -
      defaultValues!.usedOfBenzine;
    setTotalLeftOfBenzine(total);
  }, []);

  useEffect(() => {
    const total =
      defaultValues!.getOfDiesel +
      defaultValues!.leftOfDiesel -
      defaultValues!.giveOfDiesel -
      defaultValues!.usedOfDiesel;
    setTotalLeftOfDiesel(total);
  }, []);

  useEffect(() => {
    const total =
      defaultValues!.getOfGadinia +
      defaultValues!.leftOfGadinia -
      defaultValues!.usedOfGadinia -
      defaultValues!.giveOfGadinia;
    setTotalLeftOfGadinia(total);
  }, []);

  useEffect(() => {
    const total =
      defaultValues!.getOfTellus +
      defaultValues!.leftOfTellus -
      defaultValues!.usedOfTellus -
      defaultValues!.giveOfTellus;
    setTotalLeftOfTellus(total);
  }, []);

  useEffect(() => {
    const total =
      defaultValues!.getOfFreshWater +
      defaultValues!.leftOfFreshWater -
      defaultValues!.usedOfFreshWater -
      defaultValues!.giveOfFreshWater;
    setTotalLeftOfFreshWater(total);
  }, []);

  useEffect(()=>{
    const user: UserForm = JSON.parse(localStorage.getItem("user"));
    setUser(user);
    if( user.positionId == defaultValues?.currentPosition ){
      setIsShowButton(true);
    }
  },[]);

  // const onSubmitForm = (e: VesselForm) => {
  //   vesselService.createReport(e);
  //   window.location.reload();
  //   setPage(1);
  // };

  const onGoBack = () => {
    setPage(1);
  };

  const UpdateApprove = (e:any) =>{
    e.preventDefault();
    if(user!.positionId == 5){
      defaultValues!.leftOfBenzine = totalLeftOfBenzine;
      defaultValues!.leftOfDiesel = totalLeftOfDiesel;
      defaultValues!.leftOfGadinia = totalLeftOfGadinia;
      defaultValues!.leftOfTellus = totalLeftOfTellus;
      defaultValues!.leftOfFreshWater = totalLeftOfFreshWater;
      vesselService.addToLogVessel(defaultValues!);
      vesselService.resetReport(defaultValues!);
      window.location.reload();
    }
    else if(user!.positionId == 4){
      const data:UpdateForm = {
        counsel: undefined,
        currentPosition :user!.positionId+1,
        vesId: defaultValues!.vesId}
      vesselService.updateReport(data);
      window.location.reload();
    }
    else{
      const data:UpdateForm = {
        counsel: undefined,
        currentPosition :user!.positionId+1,
        vesId: user!.vesId}
      vesselService.updateReport(data);
      window.location.reload();
    }
  
  }

  const dynamicInputItemsPanel2: DynamicInputItem[] = [
    {
      label: "เครื่องปรับอากาศ",
      type: "label",
      data:
        defaultValues!.airConditioner == undefined
          ? "0"
          : defaultValues!.airConditioner,
    },
    {
      label: "เครื่องอัดลม",
      type: "label",
      data:
        defaultValues!.airCompressor == undefined
          ? "0"
          : defaultValues!.airCompressor,
    },
    {
      label: "เครื่องทำความเย็น",
      type: "label",
      data: defaultValues!.freezer == undefined ? "0" : defaultValues!.freezer,
    },
    {
      label: "เครื่องเรือยนต์",
      type: "label",
      data:
        defaultValues!.shipEngine == undefined
          ? "0"
          : defaultValues!.shipEngine,
    },
    {
      label: "เครื่องสูบน้ำเคลื่อนที่",
      type: "label",
      data: defaultValues!.pump == undefined ? "0" : defaultValues!.pump,
    },
    {
      label: "หางเสือ",
      type: "label",
      data: defaultValues!.rudder == undefined ? "0" : defaultValues!.rudder,
    },
    {
      label: "เครื่องกลั่นน้ำ",
      type: "label",
      data:
        defaultValues!.waterPurifier == undefined
          ? "0"
          : defaultValues!.waterPurifier,
    },
    {
      label: "เครื่องแยกน้ำมันดีเซล",
      type: "label",
      data:
        defaultValues!.dieselOilSeparator == undefined
          ? "0"
          : defaultValues!.dieselOilSeparator,
    },
    {
      label: "เกียร์",
      type: "label",
      data: defaultValues!.gear == undefined ? "0" : defaultValues!.gear,
    },
  ];

  const getResource: DynamicInputItem[] = [
    {
      label: "น้ำมัน ดีเซล (กล.)",
      type: "label",
      data:
        defaultValues!.getOfDiesel == undefined
          ? "0"
          : defaultValues!.getOfDiesel,
    },
    {
      label: "น้ำมัน เบนซิน95 (กล.)",
      type: "label",
      data:
        defaultValues!.getOfBenzine == undefined
          ? "0"
          : defaultValues!.getOfBenzine,
    },
    {
      label: "เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",
      type: "label",
      data:
        defaultValues!.getOfGadinia == undefined
          ? "0"
          : defaultValues!.getOfGadinia,
    },
    {
      label: "เซลล์ เทลลัส เกรด68 (ลิตร)",
      type: "label",
      data:
        defaultValues!.getOfTellus == undefined
          ? "0"
          : defaultValues!.getOfTellus,
    },
    {
      label: "น้ำจืด (ตัน)",
      type: "label",
      data:
        defaultValues!.getOfFreshWater == undefined
          ? "0"
          : defaultValues!.getOfFreshWater,
    },
  ];

  const giveResource: DynamicInputItem[] = [
    {
      label: "น้ำมัน ดีเซล (กล.)",
      type: "label",
      data:
        defaultValues!.giveOfDiesel == undefined
          ? "0"
          : defaultValues!.giveOfDiesel,
    },
    {
      label: "น้ำมัน เบนซิน95 (กล.)",
      type: "label",
      data:
        defaultValues!.giveOfBenzine == undefined
          ? "0"
          : defaultValues!.giveOfBenzine,
    },
    {
      label: "เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",
      type: "label",
      data:
        defaultValues!.giveOfGadinia == undefined
          ? "0"
          : defaultValues!.giveOfGadinia,
    },
    {
      label: "เซลล์ เทลลัส เกรด68 (ลิตร)",
      type: "label",
      data:
        defaultValues!.giveOfTellus == undefined
          ? "0"
          : defaultValues!.giveOfTellus,
    },
    {
      label: "น้ำจืด (ตัน)",
      type: "label",
      data:
        defaultValues!.giveOfFreshWater == undefined
          ? "0"
          : defaultValues!.giveOfFreshWater,
    },
  ];

  const usedResource: DynamicInputItem[] = [
    {
      label: "น้ำมัน ดีเซล (กล.)",
      type: "label",
      data:
        defaultValues!.usedOfDiesel == undefined
          ? "0"
          : defaultValues!.usedOfDiesel,
    },
    {
      label: "น้ำมัน เบนซิน95 (กล.)",
      type: "label",
      data:
        defaultValues!.usedOfBenzine == undefined
          ? "0"
          : defaultValues!.usedOfBenzine,
    },
    {
      label: "เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",
      type: "label",
      data:
        defaultValues!.usedOfGadinia == undefined
          ? "0"
          : defaultValues!.usedOfGadinia,
    },
    {
      label: "เซลล์ เทลลัส เกรด68 (ลิตร)",
      type: "label",
      data:
        defaultValues!.usedOfTellus == undefined
          ? "0"
          : defaultValues!.usedOfTellus,
    },
    {
      label: "น้ำจืด (ตัน)",
      type: "label",
      data:
        defaultValues!.usedOfFreshWater == undefined
          ? "0"
          : defaultValues!.usedOfFreshWater,
    },
  ];

  const leftResource: DynamicInputItem[] = [
    {
      label: "น้ำมัน ดีเซล (กล.)",
      type: "label",
      data: totalLeftOfDiesel,
    },
    {
      label: "น้ำมัน เบนซิน95 (กล.)",
      type: "label",
      data: totalLeftOfBenzine,
    },
    {
      label: "เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",
      type: "label",
      data: totalLeftOfGadinia,
    },
    {
      label: "เซลล์ เทลลัส เกรด68 (ลิตร)",
      type: "label",
      data: totalLeftOfTellus,
    },
    {
      label: "น้ำจืด (ตัน)",
      type: "label",
      data: totalLeftOfFreshWater,
    },
  ];
  const bigMachineResource: DynamicInputItem[] = [
    {
      inputClassName: "center",
      type: "label",
      data:
        defaultValues!.bigMachineUsed == undefined
          ? "0"
          : defaultValues!.bigMachineUsed,
    },
  ];
  const electricMachineResource: DynamicInputItem[] = [
    {
      inputClassName: "center",
      type: "label",
      data:
        defaultValues!.electricMachineUsed == undefined
          ? "0"
          : defaultValues!.electricMachineUsed,
    },
  ];

  return (
    <>
      <form>
        <Button icon="pi pi-out" label="ย้อนกลับ" onClick={onGoBack} />
        <h1> ส่งข้อมูลเรือ : {defaultValues!.vesNameTh}</h1>
        <h1>รอบที่ {defaultValues!.monthYear}</h1>
        <div className={styles.panel}>
          <Card>
            <div className={styles.card}>
              <h1>ชั่วโมงการใช้งาน</h1>
              <h1>{process.env.NEXT_PUBLIC_BIG_MACHINE}</h1>
              <h1>{`จำนวน ${defaultValues!.bigMachineNum} เครื่อง`}</h1>
              <DynamicHorizonInput dynamicInputItems={bigMachineResource} />
              <h1>ชั่วโมง</h1>
              <h1>{process.env.NEXT_PUBLIC_ELECTRIC_MACHINE}</h1>
              <h1>{`จำนวน ${defaultValues!.electricMachineNum} เครื่อง`}</h1>
              <DynamicHorizonInput
                dynamicInputItems={electricMachineResource}
              />
              <h1>ชั่วโมง</h1>
            </div>
          </Card>
          <Card>
            <div className={styles.card}>
              <h1>{"รายการรับเข้า ในเดือนนี้"}</h1>
              <DynamicHorizonInput dynamicInputItems={getResource} />
            </div>
          </Card>
        </div>
        <div className={styles.panel}>
          <Card>
            <div className={styles.card}>
              <h1>{"การใช้งานเครื่องจักร (ชั่วโมง)"}</h1>
              <DynamicHorizonInput
                dynamicInputItems={dynamicInputItemsPanel2}
              />
            </div>
          </Card>
          <Card>
            <div className={styles.card}>
              <h1>{"รายการใช้ ในเดือนนี้"}</h1>
              <DynamicHorizonInput dynamicInputItems={usedResource} />
            </div>
          </Card>
        </div>
        <div className={styles.panel}>
          <Card>
            <div className={styles.card}>
              <h1>{"คงเหลือรวม"}</h1>
              <DynamicHorizonInput dynamicInputItems={leftResource} />
            </div>
          </Card>
          <Card>
            <div className={styles.card}>
              <h1>{"รายการจ่ายให้ที่อื่น ในเดือนนี้"}</h1>
              <DynamicHorizonInput dynamicInputItems={giveResource} />
            </div>
          </Card>
        </div>
        { isShowButton == true && 
          <div className="flex justify-content-center">
            <Button label="ส่งต่อ" className="p-button-success" onClick={(e)=>UpdateApprove(e)} />
            <Button label="กลับไปแก้ไข" className="p-button-danger" />
          </div>  
        }
        
      </form>
    </>
  );
};
export default PanelShowVessel;
