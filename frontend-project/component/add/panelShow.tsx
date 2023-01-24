import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles/AddPage.module.css";
import InputNumberField from "../common/input/inputNumber";
import { DynamicInputItem, VesselForm } from "../common/interface";
import DynamicHorizonInput from "./../common/dynamicHorizonInput";
import { VesselService } from "./../../services/vessel.service";

interface AddPageProps {
  setPage: Dispatch<SetStateAction<number>>;
  defaultValues?: VesselForm;
}

const AddPanelShow = (props: AddPageProps) => {
  const { setPage, defaultValues } = props;
  const [isAdd, setIsAdd] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [dateTime, setDateTime] = useState("");
  const vesselService = new VesselService();
  const {
    control,
    watch,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues });
  const [totalLeftOfBenzine, setTotalLeftOfBenzine] = useState(0);
  const [totalLeftOfDiesel, setTotalLeftOfDiesel] = useState(0);
  const [totalLeftOfGadinia, setTotalLeftOfGadinia] = useState(0);
  const [totalLeftOfTellus, setTotalLeftOfTellus] = useState(0);
  const [totalLeftOfFreshWater, setTotalLeftOfFreshWater] = useState(0);
  const benzineWatch = watch(["usedOfBenzine","leftOfBenzine","getOfBenzine","giveOfBenzine"]);
  const dieselWatch = watch(["getOfDiesel", "giveOfDiesel", "usedOfDiesel", "leftOfDiesel"]);
  const gadiniaWatch = watch(["getOfGadinia","leftOfGadinia","usedOfGadinia","giveOfGadinia"]);
  const tellusWatch = watch(["getOfTellus","giveOfTellus","leftOfTellus","usedOfTellus"]);
  const freshWaterWatch = watch(["getOfFreshWater","giveOfFreshWater","leftOfFreshWater","usedOfFreshWater"]);

  useEffect(() => {
    const dateNow = new Date();
    setDateTime(
      dateNow.toLocaleString("th-TH", { month: "2-digit", year: "numeric" })
    );
    console.log(defaultValues);
    if (defaultValues?.currentPosition == 1) {
      setIsAdd(false);
    } else {
      setIsAdd(true);
    }
  }, [dateTime]);

  useEffect(() => {
    const total =
      getValues("leftOfBenzine") +
      getValues("getOfBenzine") -
      getValues("usedOfBenzine") -
      getValues("giveOfBenzine");
    setTotalLeftOfBenzine(total);
  }, [benzineWatch]);

  useEffect(() => {
    const total =
      getValues("leftOfDiesel") +
      getValues("getOfDiesel") -
      getValues("usedOfDiesel") -
      getValues("giveOfDiesel");
    setTotalLeftOfDiesel(total);
  }, [dieselWatch]);

  useEffect(() => {
    const total =
      getValues("leftOfGadinia") +
      getValues("getOfGadinia") -
      getValues("usedOfGadinia") -
      getValues("giveOfGadinia");
    setTotalLeftOfGadinia(total);
  }, [gadiniaWatch]);

  useEffect(() => {
    const total =
      getValues("leftOfTellus") +
      getValues("getOfTellus") -
      getValues("usedOfTellus") -
      getValues("giveOfTellus");
    setTotalLeftOfTellus(total);
  }, [tellusWatch]);

  useEffect(() => {
    const total =
      getValues("leftOfFreshWater") +
      getValues("getOfFreshWater") -
      getValues("usedOfFreshWater") -
      getValues("giveOfFreshWater");
    setTotalLeftOfFreshWater(total);
  }, [freshWaterWatch]);


  const onSubmitForm = (e: VesselForm) => {
    e.monthYear = dateTime;
    e.currentPosition = 2;
    vesselService.createReport(e);
    setPage(1);
  };

  const onGoBack = () => {
    setPage(1);
  };

  const dynamicInputItemsPanel2: DynamicInputItem[] = [
    {
      label: "เครื่องปรับอากาศ",
      type: "number",
      fieldID: "airConditioner",
      errors: ["airConditioner"],
      inputNumberProps: { disabled: isAdd },
    },
    {
      label: "เครื่องอัดลม",
      type: "number",
      fieldID: "airCompressor",
      errors: ["airCompressor"],
      inputNumberProps: { disabled: isAdd },
    },
    {
      label: "เครื่องทำความเย็น",
      type: "number",
      fieldID: "freezer",
      errors: ["freezer"],
      inputNumberProps: { disabled: isAdd },
    },
    {
      label: "เครื่องเรือยนต์",
      type: "number",
      fieldID: "shipEngine",
      errors: ["shipEngine"],
      inputNumberProps: { disabled: isAdd },
    },
    {
      label: "เครื่องสูบน้ำเคลื่อนที่",
      type: "number",
      fieldID: "pump",
      errors: ["pump"],
      inputNumberProps: { disabled: isAdd },
    },
    {
      label: "หางเสือ",
      type: "number",
      fieldID: "rudder",
      errors: ["rudder"],
      inputNumberProps: { disabled: isAdd },
    },
    {
      label: "เครื่องกลั่นน้ำ",
      type: "number",
      fieldID: "waterPurifier",
      errors: ["waterPurifier"],
      inputNumberProps: { disabled: isAdd },
    },
    {
      label: "เครื่องแยกน้ำมันดีเซล",
      type: "number",
      fieldID: "dieselOilSeparator",
      errors: ["dieselOilSeparator"],
      inputNumberProps: { disabled: isAdd },
    },
    {
      label: "เกียร์",
      type: "number",
      fieldID: "gear",
      errors: ["gear"],
      inputNumberProps: { disabled: isAdd },
    },
  ];

  const getResource: DynamicInputItem[] = [
    {
      label: "น้ำมัน ดีเซล (กล.)",
      type: "number",
      fieldID: "getOfDiesel",
      errors: ["getOfDiesel"],
      inputNumberProps: { disabled: isAdd },
    },
    {
      label: "น้ำมัน เบนซิน95 (กล.)",
      type: "number",
      fieldID: "getOfBenzine",
      errors: ["getOfBenzine"],
      inputNumberProps: { disabled: isAdd },
    },
    {
      label: "เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",
      type: "number",
      fieldID: "getOfGadinia",
      errors: ["getOfGadinia"],
      inputNumberProps: { disabled: isAdd },
    },
    {
      label: "เซลล์ เทลลัส เกรด68 (ลิตร)",
      type: "number",
      fieldID: "getOfTellus",
      errors: ["getOfTellus"],
      inputNumberProps: { disabled: isAdd },
    },
    {
      label: "น้ำจืด (ตัน)",
      type: "number",
      fieldID: "getOfFreshWater",
      errors: ["getOfFreshWater"],
      inputNumberProps: { disabled: isAdd },
    },
  ];

  const giveResource: DynamicInputItem[] = [
    {
      label: "น้ำมัน ดีเซล (กล.)",
      type: "number",
      fieldID: "giveOfDiesel",
      errors: ["giveOfDiesel"],
      inputNumberProps: { disabled: isAdd },
    },
    {
      label: "น้ำมัน เบนซิน95 (กล.)",
      type: "number",
      fieldID: "giveOfBenzine",
      errors: ["giveOfBenzine"],
      inputNumberProps: { disabled: isAdd },
    },
    {
      label: "เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",
      type: "number",
      fieldID: "giveOfGadinia",
      errors: ["giveOfGadinia"],
      inputNumberProps: { disabled: isAdd },
    },
    {
      label: "เซลล์ เทลลัส เกรด68 (ลิตร)",
      type: "number",
      fieldID: "giveOfTellus",
      errors: ["giveOfTellus"],
      inputNumberProps: { disabled: isAdd },
    },
    {
      label: "น้ำจืด (ตัน)",
      type: "number",
      fieldID: "giveOfFreshWater",
      errors: ["giveOfFreshWater"],
      inputNumberProps: { disabled: isAdd },
    },
  ];

  const usedResource: DynamicInputItem[] = [
    {
      label: "น้ำมัน ดีเซล (กล.)",
      type: "number",
      fieldID: "usedOfDiesel",
      errors: ["usedOfDiesel"],
      inputNumberProps: { disabled: isAdd },
    },
    {
      label: "น้ำมัน เบนซิน95 (กล.)",
      type: "number",
      fieldID: "usedOfBenzine",
      errors: ["usedOfBenzine"],
      inputNumberProps: { disabled: isAdd },
    },
    {
      label: "เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",
      type: "number",
      fieldID: "usedOfGadinia",
      errors: ["usedOfGadinia"],
      inputNumberProps: { disabled: isAdd },
    },
    {
      label: "เซลล์ เทลลัส เกรด68 (ลิตร)",
      type: "number",
      fieldID: "usedOfTellus",
      errors: ["usedOfTellus"],
      inputNumberProps: { disabled: isAdd },
    },
    {
      label: "น้ำจืด (ตัน)",
      type: "number",
      fieldID: "usedOfFreshWater",
      errors: ["usedOfFreshWater"],
      inputNumberProps: { disabled: isAdd },
    },
  ];

  const leftResource: DynamicInputItem[] = [
    {
      label: "น้ำมัน ดีเซล (กล.)",
      type: "label",
      fieldID: "leftOfDiesel",
      errors: ["leftOfDiesel"],
      data: totalLeftOfDiesel,
    },
    {
      label: "น้ำมัน เบนซิน95 (กล.)",
      type: "label",
      fieldID: "leftOfBenzine",
      errors: ["leftOfBenzine"],
      data: totalLeftOfBenzine,
    },
    {
      label: "เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",
      type: "label",
      fieldID: "leftOfGadinia",
      errors: ["leftOfGadinia"],
      data: totalLeftOfGadinia,
    },
    {
      label: "เซลล์ เทลลัส เกรด68 (ลิตร)",
      type: "label",
      fieldID: "leftOfTellus",
      errors: ["leftOfTellus"],
      data: totalLeftOfTellus,
    },
    {
      label: "น้ำจืด (ตัน)",
      type: "label",
      fieldID: "leftOfFreshWater",
      errors: ["leftOfFreshWater"],
      data: totalLeftOfFreshWater,
    },
  ];

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Button icon="pi pi-out" label="ย้อนกลับ" onClick={onGoBack} />
        <h1> ส่งข้อมูลเรือ : {defaultValues!.vesNameTh}</h1>
        <h1>รอบที่ {dateTime}</h1>
        <div className={styles.panel}>
          <Card>
            <div className={styles.card}>
              <h1>ชั่วโมงการใช้งาน</h1>
              <h1>เครื่องจักรใหญ่</h1>
              <h1>{defaultValues!.bigMachineNum}</h1>
              <InputNumberField
                control={control}
                controllerName={"bigMachineUsed"}
                disabled={isAdd}
              />
              <h1>ชั่วโมง</h1>
              <h1>เครื่องจักรใหญ่</h1>
              <h1>{defaultValues!.electricMachineNum}</h1>
              <InputNumberField
                control={control}
                controllerName={"electricMachineUsed"}
                disabled={isAdd}
              />
              <h1>ชั่วโมง</h1>
            </div>
          </Card>
          <Card>
            <div className={styles.card}>
              <h1>{"รายการรับเข้า ในเดือนนี้"}</h1>
              <DynamicHorizonInput
                control={control}
                dynamicInputItems={getResource}
              />
            </div>
          </Card>
        </div>
        <div className={styles.panel}>
          <Card>
            <div className={styles.card}>
              <h1>{"การใช้งานเครื่องจักร (ชั่วโมง)"}</h1>
              <DynamicHorizonInput
                dynamicInputItems={dynamicInputItemsPanel2}
                control={control}
              />
            </div>
          </Card>
          <Card>
            <div className={styles.card}>
              <h1>{"รายการใช้ ในเดือนนี้"}</h1>
              <DynamicHorizonInput
                control={control}
                dynamicInputItems={usedResource}
              />
            </div>
          </Card>
        </div>
        <div className={styles.panel}>
          <Card>
            <div className={styles.card}>
              <h1>{"คงเหลือรวม"}</h1>
              <DynamicHorizonInput
                control={control}
                dynamicInputItems={leftResource}
              />
            </div>
          </Card>
          <Card>
            <div className={styles.card}>
              <h1>{"รายการจ่ายให้ที่อื่น ในเดือนนี้"}</h1>
              <DynamicHorizonInput
                control={control}
                dynamicInputItems={giveResource}
              />
            </div>
          </Card>
        </div>
        <div>
          <Button
            type="submit"
            className="p-button-success"
            label="ยืนยันแบบฟอร์มและส่งต่อ"
          />
        </div>
      </form>
    </>
  );
};
export default AddPanelShow;
