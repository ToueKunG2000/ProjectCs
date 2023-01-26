import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles/AddPage.module.css";
import InputNumberField from "../common/input/inputNumber";
import { DynamicInputItem, VesselForm } from "../common/interface";
import DynamicHorizonInput from "../common/dynamicHorizonInput";
import { VesselService } from "../../services/vessel.service";
import PopupPage from "../common/popupPage";

interface AddPageProps {
  setPage: Dispatch<SetStateAction<number>>;
  defaultValues?: VesselForm;
}

const PanelReportVessel = (props: AddPageProps) => {
  const { setPage, defaultValues } = props;
  const [isAdd, setIsAdd] = useState(true);
  const [isShowWarning, setIsShowWarning] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);
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
  const benzineWatch = watch([
    "usedOfBenzine",
    "leftOfBenzine",
    "getOfBenzine",
    "giveOfBenzine",
  ]);
  const dieselWatch = watch([
    "getOfDiesel",
    "giveOfDiesel",
    "usedOfDiesel",
    "leftOfDiesel",
  ]);
  const gadiniaWatch = watch([
    "getOfGadinia",
    "leftOfGadinia",
    "usedOfGadinia",
    "giveOfGadinia",
  ]);
  const tellusWatch = watch([
    "getOfTellus",
    "giveOfTellus",
    "leftOfTellus",
    "usedOfTellus",
  ]);
  const freshWaterWatch = watch([
    "getOfFreshWater",
    "giveOfFreshWater",
    "leftOfFreshWater",
    "usedOfFreshWater",
  ]);

  useEffect(() => {
    const dateNow = new Date();
    setDateTime(
      dateNow.toLocaleString("th-TH", { month: "2-digit", year: "numeric" })
    );
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
    vesselService.createReport(e);
    window.location.reload();
    setPage(1);
  };

  const CheckForm = (e: any) => {
    e.preventDefault();
    if (
      totalLeftOfBenzine >= 0 &&
      totalLeftOfDiesel >= 0 &&
      totalLeftOfFreshWater >= 0 &&
      totalLeftOfGadinia >= 0 &&
      totalLeftOfTellus >= 0
    ) {
      setIsShowConfirm(true);
    } else {
      setIsShowWarning(true);
    }
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
  const bigMachineResource: DynamicInputItem[] = [
    {
      inputClassName: "center",
      type: "number",
      fieldID: "bigMachineUsed",
      errors: ["bigMachineUsed"],
      inputNumberProps: { disabled: isAdd },
    },
  ];
  const electricMachineResource: DynamicInputItem[] = [
    {
      inputClassName: "center",
      type: "number",
      fieldID: "electricMachineUsed",
      errors: ["electricMachineUsed"],
      inputNumberProps: { disabled: isAdd },
    },
  ];

  return (
    <>
      <form>
        <Button icon="pi pi-out" label="ย้อนกลับ" onClick={onGoBack} />
        <h1> ส่งข้อมูลเรือ : {defaultValues!.vesNameTh}</h1>
        <h1>รอบที่ {dateTime}</h1>
        <PopupPage
          setVisible={setIsShowWarning}
          header="คำเตือน"
          message="โปรดตรวจสอบให้แน่ใจว่าค่า คงเหลือ มากกว่า 0"
          visible={isShowWarning}
        />
        <PopupPage
          header="ยืนยัน"
          message="คุณยืนยันที่จะส่งข้อมูลในเดือนนี้หรือไม่"
          setVisible={setIsShowConfirm}
          visible={isShowConfirm}
        >
          <Button
            label="ยืนยัน"
            className="p-button-success"
            onClick={handleSubmit(onSubmitForm)}
          />
          <Button
            label="ยกเลิก"
            className="p-button-cancel"
            onClick={(e) => {
              console.log(e);
              setIsShowConfirm(false);
            }}
          />
        </PopupPage>
        <div className={styles.panel}>
          <Card>
            <div className={styles.card}>
              <h1>ชั่วโมงการใช้งาน</h1>
              <h1>{process.env.NEXT_PUBLIC_BIG_MACHINE}</h1>
              <h1>{`จำนวน ${defaultValues!.bigMachineNum} เครื่อง`}</h1>
              <DynamicHorizonInput
                dynamicInputItems={bigMachineResource}
                control={control}
              />
              <h1>ชั่วโมง</h1>
              <h1>{process.env.NEXT_PUBLIC_ELECTRIC_MACHINE}</h1>
              <h1>{`จำนวน ${defaultValues!.electricMachineNum} เครื่อง`}</h1>
              <DynamicHorizonInput
                dynamicInputItems={electricMachineResource}
                control={control}
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
        <div className="flex justify-content-center">
          <Button
            onClick={(e) => CheckForm(e)}
            className="p-button-success"
            label="ยืนยันแบบฟอร์มและส่งต่อ"
          />
        </div>
      </form>
    </>
  );
};
export default PanelReportVessel;
