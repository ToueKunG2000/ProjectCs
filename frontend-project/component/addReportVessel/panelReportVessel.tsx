import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles/AddPage.module.css";
import {
  CheckLogMonthYearForm,
  DynamicInputItem,
  VesselForm,
} from "../common/interface";
import DynamicHorizonInput from "../common/dynamicHorizonInput";
import { VesselServices } from "../../services/vessel.service";
import PopupPage from "../common/popupPage";

interface AddPageProps {
  setPage: Dispatch<SetStateAction<number>>;
  vesselSelected: number;
}

const PanelReportVessel = (props: AddPageProps) => {
  const { setPage, vesselSelected } = props;
  const dateNow = new Date();
  const [requestForm, setRequestForm] = useState<CheckLogMonthYearForm>();
  const [data, setData] = useState<VesselForm>();
  const [isAdd, setIsAdd] = useState(false);
  const [isShowWarning, setIsShowWarning] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);
  const [dateTime, setDateTime] = useState("");
  const vesselService = new VesselServices();
  const [isFetch, setIsFetch] = useState(false);
  const [isShowCounsel, setIsShowCounsel] = useState(false);
  const {
    control,
    watch,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<VesselForm>({ values: data });
  const [totalLeftOfBenzine, setTotalLeftOfBenzine] = useState<number>(0.0);
  const [totalLeftOfDiesel, setTotalLeftOfDiesel] = useState<number>(0.0);
  const [totalLeftOfGadinia, setTotalLeftOfGadinia] = useState<number>(0.0);
  const [totalLeftOfTellus, setTotalLeftOfTellus] = useState<number>(0.0);
  const [totalLeftOfFreshWater, setTotalLeftOfFreshWater] =
    useState<number>(0.0);
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

  useMemo(() => {
    function configRequest() {
      reset;
      setDateTime(
        dateNow.toLocaleString("th-TH", { month: "2-digit", year: "numeric" })
      );
      setRequestForm({
        monthYear: dateNow.toLocaleString("th-TH", {
          month: "2-digit",
          year: "numeric",
        }),
        vesId: vesselSelected,
      });
    }
    configRequest();
  }, []);

  useEffect(() => {
    const getDataLog = async () => {
      await vesselService
        .getLogVessel(requestForm!)
        .then((res) => {
          setData(res.data);
          setIsFetch(true);
          console.log(res.data);
        })
        .catch((err) => {
          vesselService.getVesselInfo(requestForm!.vesId).then((res) => {
            setData(res.data);
            setIsFetch(true);
            console.log(res.data);
          });
        });
    };
    getDataLog();
  }, [requestForm]);

  useEffect(() => {
    const setDataTotal = () => {
      if (
        data?.currentPosition == 1 &&
        (data?.counsel !== undefined || typeof data?.counsel == typeof "string")
      ) {
        setIsAdd(false);
      } else {
        setIsAdd(true);
      }
    };

    setDataTotal();
  }, [isFetch]);

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
    if (e.monthYear !== null) {
      vesselService.createReport(e);
      window.location.reload();
      setPage(1);
    } else {
      e.monthYear = dateTime;
      vesselService.createReport(e);
      window.location.reload();
      setPage(1);
    }
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
      errors: errors["airConditioner"],
      inputNumberProps: { disabled: isAdd,required:true },
      rules:{
        required: {value:true, message:"กรุณาใส่ค่า"},
      },
    },
    {
      label: "เครื่องอัดลม",
      type: "number",
      fieldID: "airCompressor",
      errors: errors["airCompressor"],
      inputNumberProps: { disabled: isAdd,required:true },
      rules:{
        required: {value:true, message:"กรุณาใส่ค่า"},
      },
    },
    {
      label: "เครื่องทำความเย็น",
      type: "number",
      fieldID: "freezer",
      errors: errors["freezer"],
      inputNumberProps: { disabled: isAdd,required:true },
      rules:{
        required: {value:true, message:"กรุณาใส่ค่า"},
      },
    },
    {
      label: "เครื่องเรือยนต์",
      type: "number",
      fieldID: "shipEngine",
      errors: errors["shipEngine"],
      inputNumberProps: { disabled: isAdd ,required:true},
      rules:{
        required: {value:true, message:"กรุณาใส่ค่า"},
      },
    },
    {
      label: "เครื่องสูบน้ำเคลื่อนที่",
      type: "number",
      fieldID: "pump",
      errors: errors["pump"],
      inputNumberProps: { disabled: isAdd,required:true },
      rules:{
        required: {value:true, message:"กรุณาใส่ค่า"},
        min:{value:0,message:""}

      },
    },
    {
      label: "หางเสือ",
      type: "number",
      fieldID: "rudder",
      errors: errors["rudder"],
      inputNumberProps: { disabled: isAdd,required:true },
      rules:{
        required: {value:true, message:""},
        min:{value:0,message:""}
      },
    },
    {
      label: "เครื่องกลั่นน้ำ",
      type: "number",
      fieldID: "waterPurifier",
      errors: errors["waterPurifier"],
      inputNumberProps: { disabled: isAdd ,required:true},
      rules:{
        required: {value:true, message:""},
      },
    },
    {
      label: "เครื่องแยกน้ำมันดีเซล",
      type: "number",
      fieldID: "dieselOilSeparator",
      errors: errors["dieselOilSeparator"],
      inputNumberProps: { disabled: isAdd ,required:true},
      rules:{
        required: {value:true, message:""},
      },
    },
    {
      label: "เกียร์",
      type: "number",
      fieldID: "gear",
      errors: errors["gear"],
      inputNumberProps: { disabled: isAdd,required:true },
      rules:{
        required: {value:true, message:""},
      },
    },
  ];

  const getResource: DynamicInputItem[] = [
    {
      label: "น้ำมัน ดีเซล (กล.)",
      type: "fraction",
      fieldID: "getOfDiesel",
      errors: errors["getOfDiesel"],
      inputNumberProps: { disabled: isAdd ,required:true},
      rules:{
        required: {value:true, message:""},
      },
    },
    {
      label: "น้ำมัน เบนซิน95 (ลิตร)",
      type: "fraction",
      fieldID: "getOfBenzine",
      errors: errors["getOfBenzine"],
      inputNumberProps: { disabled: isAdd ,required:true},
      rules:{
        required: {value:true, message:""},
      },
    },
    {
      label: "เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",
      type: "fraction",
      fieldID: "getOfGadinia",
      errors: errors["getOfGadinia"],
      inputNumberProps: { disabled: isAdd,required:true },
      rules:{
        required: {value:true, message:""},
      },
    },
    {
      label: "เซลล์ เทลลัส เกรด68 (ลิตร)",
      type: "fraction",
      fieldID: "getOfTellus",
      errors: errors["getOfTellus"],
      inputNumberProps: { disabled: isAdd,required:true },
      rules:{
        required: {value:true, message:""},
      },
    },
    {
      label: "น้ำจืด (ตัน)",
      type: "fraction",
      fieldID: "getOfFreshWater",
      errors: errors["getOfFreshWater"],
      inputNumberProps: { disabled: isAdd,required:true },
      rules:{
        required: {value:true, message:""},
      },
    },
  ];

  const giveResource: DynamicInputItem[] = [
    {
      label: "น้ำมัน ดีเซล (กล.)",
      type: "fraction",
      fieldID: "giveOfDiesel",
      errors: errors["giveOfDiesel"],
      inputNumberProps: { disabled: isAdd ,required:true},
      rules:{
        required: {value:true, message:""},
      },
    },
    {
      label: "น้ำมัน เบนซิน95 (ลิตร)",
      type: "fraction",
      fieldID: "giveOfBenzine",
      errors: errors["giveOfBenzine"],
      inputNumberProps: { disabled: isAdd ,required:true},
      rules:{
        required: {value:true, message:""},
      },
    },
    {
      label: "เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",
      type: "fraction",
      fieldID: "giveOfGadinia",
      errors: errors["giveOfGadinia"],
      inputNumberProps: { disabled: isAdd ,required:true},
      rules:{
        required: {value:true, message:""},
      },
    },
    {
      label: "เซลล์ เทลลัส เกรด68 (ลิตร)",
      type: "fraction",
      fieldID: "giveOfTellus",
      errors: errors["giveOfTellus"],
      inputNumberProps: { disabled: isAdd ,required:true},
      rules:{
        required: {value:true, message:""},
      },
    },
    {
      label: "น้ำจืด (ตัน)",
      type: "fraction",
      fieldID: "giveOfFreshWater",
      errors: errors["giveOfFreshWater"],
      inputNumberProps: { disabled: isAdd,required:true },
      rules:{
        required: {value:true, message:""},
      },
    },
  ];

  const usedResource: DynamicInputItem[] = [
    {
      label: "น้ำมัน ดีเซล (กล.)",
      type: "fraction",
      fieldID: "usedOfDiesel",
      errors: errors["usedOfDiesel"],
      inputNumberProps: { disabled: isAdd,required:true },
      rules:{
        required: {value:true, message:""},
      },
    },
    {
      label: "น้ำมัน เบนซิน95 (ลิตร)",
      type: "fraction",
      fieldID: "usedOfBenzine",
      errors: errors["usedOfBenzine"],
      inputNumberProps: { disabled: isAdd ,required:true},
      rules:{
        required: {value:true, message:""},
      },
    },
    {
      label: "เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",
      type: "fraction",
      fieldID: "usedOfGadinia",
      errors: errors["usedOfGadinia"],
      inputNumberProps: { disabled: isAdd,required:true },
      rules:{
        required: {value:true, message:""},
      },
    },
    {
      label: "เซลล์ เทลลัส เกรด68 (ลิตร)",
      type: "fraction",
      fieldID: "usedOfTellus",
      errors: errors["usedOfTellus"],
      inputNumberProps: { disabled: isAdd ,required:true},
      rules:{
        required: {value:true, message:""},
      },
    },
    {
      label: "น้ำจืด (ตัน)",
      type: "fraction",
      fieldID: "usedOfFreshWater",
      errors: errors["usedOfFreshWater"],
      inputNumberProps: { disabled: isAdd, required:true },
      rules:{
        required: {value:true, message:""},
      },
    },
  ];

  const counselShow :DynamicInputItem[] = [
    {
      type: "textarea",
      fieldID: "counsel",
      errors:["counsel"],
      label: "เหตุผลแก้ไข",
      inputTextAreaProps:{
        disabled:true,
      },
      inputClassName: "counsel",
      data: data?.rejectByPositionId == 2 ? "ต้นกล" 
      : data?.rejectByPositionId == 3 ? "ผู้บังคับการ เรือ"
      : data?.rejectByPositionId == 4 ? "ผอ. การช่าง " : "ผบ. กตอ",
    },
  ]

  const leftResource: DynamicInputItem[] = [
    {
      label: "น้ำมัน ดีเซล (กล.)",
      type: "label",
      fieldID: "leftOfDiesel",
      errors: errors["leftOfDiesel"],
      data: totalLeftOfDiesel.toPrecision(3),
    },
    {
      label: "น้ำมัน เบนซิน95 (ลิตร)",
      type: "label",
      fieldID: "leftOfBenzine",
      errors: errors["leftOfBenzine"],
      data: totalLeftOfBenzine.toPrecision(3),
    },
    {
      label: "เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",
      type: "label",
      fieldID: "leftOfGadinia",
      errors: errors["leftOfGadinia"],
      data: totalLeftOfGadinia.toPrecision(3),
    },
    {
      label: "เซลล์ เทลลัส เกรด68 (ลิตร)",
      type: "label",
      fieldID: "leftOfTellus",
      errors: errors["leftOfTellus"],
      data: totalLeftOfTellus.toPrecision(3),
    },
    {
      label: "น้ำจืด (ตัน)",
      type: "label",
      fieldID: "leftOfFreshWater",
      errors: errors["leftOfFreshWater"],
      data: totalLeftOfFreshWater.toPrecision(3),
    },
  ];
  const bigMachineResource: DynamicInputItem[] = [
    {
      inputClassName: "center",
      type: "number",
      fieldID: "bigMachineUsed",
      errors: errors["bigMachineUsed"],
      rules:{
        required: {value:true, message:""},
      },
      inputNumberProps: { 
        disabled: isAdd,
        required:true },
    },
  ];
  const electricMachineResource: DynamicInputItem[] = [
    {
      inputClassName: "center",
      type: "number",
      fieldID: "electricMachineUsed",
      errors: errors["electricMachineUsed"],
      rules:{
        required: {value:true, message:""},
      },
      inputNumberProps: { disabled: isAdd, required:true },
    },
  ];

  return (
    <>
      <form>
        <Button
          icon="pi pi-out"
          label="ย้อนกลับ"
          className="p-button-danger"
          onClick={onGoBack}
        />
        <h1> ส่งข้อมูลเรือ : {data?.vesName}</h1>
        <h1>
          รอบที่{" "}
          {data?.monthYear === null
            ? dateNow.toLocaleString("th-TH", {
                month: "2-digit",
                year: "numeric",
              })
            : data?.monthYear}
        </h1>
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
          <div className="flex justify-content-between">
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
          </div>
        </PopupPage>
        {data?.counsel != undefined && (
          <div className={styles.counsel}>
            {isShowCounsel === false && (
              <Card
                className={styles.hidden}
                onClick={(e) => setIsShowCounsel(true)}
              >
                <i
                  className={
                    "pi pi-exclamation-circle text-white text-4xl flex justify-content-center"
                  }
                ></i>
              </Card>
            )}
            {isShowCounsel === true && (
              <Card
                className={styles["show"]}
                onClick={(e) => setIsShowCounsel(false)}
              >
                  <div className={styles["text-contain"]}>
                  <DynamicHorizonInput 
                    dynamicInputItems={counselShow}
                    control={control}
                  />
                  </div>
              </Card>
            )}
          </div>
        )}
        <div className="grid">
          <div className="flex justify-content-center col-12 md:col-12 lg:col-6">
            <Card>
              <h1>ชั่วโมงการใช้งาน</h1>
              <h1>{process.env.NEXT_PUBLIC_BIG_MACHINE}</h1>
              <h1>{`จำนวน ${data?.bigMachineNum} เครื่อง`}</h1>
              <DynamicHorizonInput
                dynamicInputItems={bigMachineResource}
                control={control}
              />
              <h1>ชั่วโมง</h1>
              <h1>{process.env.NEXT_PUBLIC_ELECTRIC_MACHINE}</h1>
              <h1>{`จำนวน ${data?.electricMachineNum} เครื่อง`}</h1>
              <DynamicHorizonInput
                dynamicInputItems={electricMachineResource}
                control={control}
              />
              <h1>ชั่วโมง</h1>
            </Card>
          </div>
          <div className="flex justify-content-center col-12 md:col-12 lg:col-6">
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
          <div className="flex justify-content-center col-12 md:col-12 lg:col-6">
            <Card>
              <div className={styles.card}>
                <h1>{"การใช้งานเครื่องจักร (ชั่วโมง)"}</h1>
                <DynamicHorizonInput
                  dynamicInputItems={dynamicInputItemsPanel2}
                  control={control}
                />
              </div>
            </Card>
          </div>
          <div className="flex justify-content-center col-12 md:col-12 lg:col-6">
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
          <div className="flex justify-content-center col-12 md:col-12 lg:col-6">
            <Card>
              <div className={styles.card}>
                <h1>{"คงเหลือรวม"}</h1>
                <DynamicHorizonInput
                  control={control}
                  dynamicInputItems={leftResource}
                />
              </div>
            </Card>
          </div>
          <div className="flex justify-content-center col-12 md:col-12 lg:col-6">
            <Card className={styles["card"]}>
              <div className={styles.card}>
                <h1>{"รายการจ่ายให้ที่อื่น ในเดือนนี้"}</h1>
                <DynamicHorizonInput
                  control={control}
                  dynamicInputItems={giveResource}
                />
              </div>
            </Card>
          </div>
        </div>
        {isAdd != true && (
          <div className="flex justify-content-center">
            <Button
              onClick={(e) => CheckForm(e)}
              className="p-button-success"
              label="ยืนยันแบบฟอร์มและส่งต่อ"
            />
          </div>
        )}
      </form>
    </>
  );
};
export default PanelReportVessel;
