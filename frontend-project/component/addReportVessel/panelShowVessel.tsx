import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputTextarea } from "primereact/inputtextarea";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { VesselService } from "../../services/vessel.service";
import DynamicHorizonInput from "../common/dynamicHorizonInput";
import {
  CheckLogMonthYearForm,
  DynamicInputItem,
  UserForm,
  VesselForm,
} from "../common/interface";
import styles from "../../styles/AddPage.module.css";
import { UpdateForm } from "../common/interface";
import PopupPage from "../common/popupPage";
import { useForm } from "react-hook-form";

interface AddPageProps {
  setPage: Dispatch<SetStateAction<number>>;
  vesselSelected: number;
}

const PanelShowVessel = (props: AddPageProps) => {
  const { setPage, vesselSelected } = props;
  const dateNow = new Date();
  const [requestForm, setRequestForm] = useState<CheckLogMonthYearForm>();
  const [data, setData] = useState<VesselForm>();
  const [isShowButton, setIsShowButton] = useState(false);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const vesselService = new VesselService();
  const [user, setUser] = useState<UserForm>();
  const [isFetch, setIsFetch] = useState(false);
  const [isShowLeft,setIsShowLeft] = useState(false);
  const [totalLeftOfBenzine, setTotalLeftOfBenzine] = useState(0);
  const [totalLeftOfDiesel, setTotalLeftOfDiesel] = useState(0);
  const [totalLeftOfGadinia, setTotalLeftOfGadinia] = useState(0);
  const [totalLeftOfTellus, setTotalLeftOfTellus] = useState(0);
  const [totalLeftOfFreshWater, setTotalLeftOfFreshWater] = useState(0);
  const {
    control,
    watch,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  useMemo(() => {
    function configRequest() {
      const user = JSON.parse(localStorage.getItem("user"));
      setUser(user);
      setRequestForm({
        monthYear: dateNow.toLocaleString("th-TH", { month: "2-digit", year: "numeric" }),
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
        })
        .catch((err) => {
          vesselService.getVesselInfo(requestForm!.vesId).then((res) => {
            setData(res.data);
            setIsFetch(true);
          });
        });
    };
    getDataLog();
  }, [requestForm]);

  useEffect(()=>{
    const setDataTotal = () => {
      setTotalLeftOfBenzine(data?.leftOfBenzine + data?.getOfBenzine - data?.giveOfBenzine - data?.usedOfBenzine)
      setTotalLeftOfDiesel(data?.leftOfDiesel + data?.getOfDiesel - data?.giveOfDiesel - data?.usedOfDiesel)
      setTotalLeftOfTellus(data?.leftOfTellus + data?.getOfTellus - data?.giveOfTellus - data?.usedOfTellus )
      setTotalLeftOfGadinia(data?.leftOfGadinia + data?.getOfGadinia - data?.giveOfGadinia - data?.usedOfGadinia )
      setTotalLeftOfFreshWater(data?.leftOfFreshWater + data?.getOfFreshWater - data?.giveOfFreshWater - data?.usedOfFreshWater )
      if(data?.currentPosition == user?.positionId){
        setIsShowButton(true);
      }
      else{
        setIsShowButton(false);
      }
    }

    setDataTotal();

  },[isFetch])


  const onGoBack = () => {
    setPage(1);
  };

  const onSubmitForm = (e: any) => {
    const request: UpdateForm = {
      counsel: e.counsel,
      currentPosition: 1,
      vesId: data!.vesId,
    };
    vesselService.updateReport(request);
    window.location.reload();
  };

  const RejectReport = (e: any) => {
    e.preventDefault();
    setIsShowPopup(true);
  };

  const UpdateApprove = (e: any) => {
    e.preventDefault();
    if (user?.positionId == 5) {
      data!.leftOfBenzine = totalLeftOfBenzine;
      data!.leftOfDiesel = totalLeftOfDiesel;
      data!.leftOfGadinia = totalLeftOfGadinia;
      data!.leftOfTellus = totalLeftOfTellus;
      data!.leftOfFreshWater = totalLeftOfFreshWater;
      vesselService.addToLogVessel(data!);
      vesselService.resetReport(data!);
      window.location.reload();
    } else if (user?.positionId == 4) {
      const request: UpdateForm = {
        counsel: undefined,
        currentPosition: user?.positionId + 1,
        vesId: vesselSelected,
      };
      vesselService.updateReport(request);
      window.location.reload();
    } else {
      const request: UpdateForm = {
        counsel: undefined,
        currentPosition: user?.positionId + 1,
        vesId: vesselSelected,
      };
      vesselService.updateReport(request);
      window.location.reload();
    }
  };

  const dynamicInputItemsPanel2: DynamicInputItem[] = [
    {
      label: "เครื่องปรับอากาศ",
      type: "label",
      data: data?.airConditioner == undefined ? "0" : data?.airConditioner,
    },
    {
      label: "เครื่องอัดลม",
      type: "label",
      data: data?.airCompressor == undefined ? "0" : data?.airCompressor,
    },
    {
      label: "เครื่องทำความเย็น",
      type: "label",
      data: data?.freezer == undefined ? "0" : data?.freezer,
    },
    {
      label: "เครื่องเรือยนต์",
      type: "label",
      data: data?.shipEngine == undefined ? "0" : data?.shipEngine,
    },
    {
      label: "เครื่องสูบน้ำเคลื่อนที่",
      type: "label",
      data: data?.pump == undefined ? "0" : data?.pump,
    },
    {
      label: "หางเสือ",
      type: "label",
      data: data?.rudder == undefined ? "0" : data?.rudder,
    },
    {
      label: "เครื่องกลั่นน้ำ",
      type: "label",
      data: data?.waterPurifier == undefined ? "0" : data?.waterPurifier,
    },
    {
      label: "เครื่องแยกน้ำมันดีเซล",
      type: "label",
      data:
        data?.dieselOilSeparator == undefined ? "0" : data?.dieselOilSeparator,
    },
    {
      label: "เกียร์",
      type: "label",
      data: data?.gear == undefined ? "0" : data?.gear,
    },
  ];

  const getResource: DynamicInputItem[] = [
    {
      label: "น้ำมัน ดีเซล (กล.)",
      type: "label",
      data:
        data?.getOfDiesel == undefined ? "0" : data?.getOfDiesel.toPrecision(3),
    },
    {
      label: "น้ำมัน เบนซิน95 (ลิตร)",
      type: "label",
      data:
        data?.getOfBenzine == undefined
          ? "0"
          : data?.getOfBenzine.toPrecision(3),
    },
    {
      label: "เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",
      type: "label",
      data:
        data?.getOfGadinia == undefined
          ? "0"
          : data?.getOfGadinia.toPrecision(3),
    },
    {
      label: "เซลล์ เทลลัส เกรด68 (ลิตร)",
      type: "label",
      data:
        data?.getOfTellus == undefined ? "0" : data?.getOfTellus.toPrecision(3),
    },
    {
      label: "น้ำจืด (ตัน)",
      type: "label",
      data:
        data?.getOfFreshWater == undefined
          ? "0"
          : data?.getOfFreshWater.toPrecision(3),
    },
  ];

  const giveResource: DynamicInputItem[] = [
    {
      label: "น้ำมัน ดีเซล (กล.)",
      type: "label",
      data:
        data?.giveOfDiesel == undefined
          ? "0"
          : data?.giveOfDiesel.toPrecision(3),
    },
    {
      label: "น้ำมัน เบนซิน95 (ลิตร)",
      type: "label",
      data:
        data?.giveOfBenzine == undefined
          ? "0"
          : data?.giveOfBenzine.toPrecision(3),
    },
    {
      label: "เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",
      type: "label",
      data:
        data?.giveOfGadinia == undefined
          ? "0"
          : data?.giveOfGadinia.toPrecision(3),
    },
    {
      label: "เซลล์ เทลลัส เกรด68 (ลิตร)",
      type: "label",
      data:
        data?.giveOfTellus == undefined
          ? "0"
          : data?.giveOfTellus.toPrecision(3),
    },
    {
      label: "น้ำจืด (ตัน)",
      type: "label",
      data:
        data?.giveOfFreshWater == undefined
          ? "0"
          : data?.giveOfFreshWater.toPrecision(3),
    },
  ];

  const usedResource: DynamicInputItem[] = [
    {
      label: "น้ำมัน ดีเซล (กล.)",
      type: "label",
      data:
        data?.usedOfDiesel == undefined
          ? "0"
          : data?.usedOfDiesel.toPrecision(3),
    },
    {
      label: "น้ำมัน เบนซิน95 (ลิตร)",
      type: "label",
      data:
        data?.usedOfBenzine == undefined
          ? "0"
          : data?.usedOfBenzine.toPrecision(3),
    },
    {
      label: "เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",
      type: "label",
      data:
        data?.usedOfGadinia == undefined
          ? "0"
          : data?.usedOfGadinia.toPrecision(3),
    },
    {
      label: "เซลล์ เทลลัส เกรด68 (ลิตร)",
      type: "label",
      data:
        data?.usedOfTellus == undefined
          ? "0"
          : data?.usedOfTellus.toPrecision(3),
    },
    {
      label: "น้ำจืด (ตัน)",
      type: "label",
      data:
        data?.usedOfFreshWater == undefined
          ? "0"
          : data?.usedOfFreshWater.toPrecision(3),
    },
  ];

  const counsel: DynamicInputItem[] = [
    {
      label: "เหตุผลที่ไม่ยินยอม",
      type: "text",
      fieldID: "counsel",
      errors: ["counsel"],
    },
  ];

  const leftResource: DynamicInputItem[] = [
    {
      label: "น้ำมัน ดีเซล (กล.)",
      type: "label",
      data: totalLeftOfDiesel.toPrecision(3),
    },
    {
      label: "น้ำมัน เบนซิน95 (ลิตร)",
      type: "label",
      data: totalLeftOfBenzine.toPrecision(3),
    },
    {
      label: "เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",
      type: "label",
      data: totalLeftOfGadinia.toPrecision(3),
    },
    {
      label: "เซลล์ เทลลัส เกรด68 (ลิตร)",
      type: "label",
      data: totalLeftOfTellus.toPrecision(3),
    },
    {
      label: "น้ำจืด (ตัน)",
      type: "label",
      data: totalLeftOfFreshWater.toPrecision(3),
    },
  ];
  const bigMachineResource: DynamicInputItem[] = [
    {
      inputClassName: "center",
      type: "label",
      data: data?.bigMachineUsed == undefined ? "0" : data?.bigMachineUsed,
    },
  ];
  const electricMachineResource: DynamicInputItem[] = [
    {
      inputClassName: "center",
      type: "label",
      data:
        data?.electricMachineUsed == undefined
          ? "0"
          : data?.electricMachineUsed,
    },
  ];

  return (
    <>
      <form>
        <PopupPage
          header="Warning"
          message=""
          setVisible={setIsShowPopup}
          visible={isShowPopup}
        >
          <DynamicHorizonInput control={control} dynamicInputItems={counsel} />
          <Button
            label="ยืนยัน"
            className="p-button-success"
            onClick={handleSubmit(onSubmitForm)}
          />
          <Button
            label="ยกเลิก"
            className="p-button-cancel"
            onClick={(e) => {
              setIsShowPopup(false);
            }}
          />
        </PopupPage>
        {(user?.positionId == 3 || user?.positionId == 4 || user?.positionId == 5 ) && (
          <div className={styles["left"]}>
            {isShowLeft == false &&
             <Card className={styles["hidden-left"]}
             onClick={(e) => setIsShowLeft(true)}
             >
              <div className="block flex-column align-item-center">
              <h3>ยอดคงเหลือ</h3>
              <h3>รอบที่ผ่านมา</h3>
              </div>  
            </Card>
            }
            {isShowLeft == true &&
            <Card className={styles["show-left"]}
            onClick={(e) => setIsShowLeft(false)}
            >
              <div className="flex justify-content-between">
              <h3>{`คงเหลือดีเซล (กล.)`}</h3>
              <h3>{`${data?.leftOfDiesel}`}</h3>
              </div>
              <div className="flex justify-content-between">
              <h3>{`คงเหลือเบนซิน (ลิตร)`}</h3>
              <h3>{`${data?.leftOfBenzine}`}</h3>
              </div>
              <div  className="flex justify-content-between">
              <h3>{`คงเหลือการ์ดิเนีย (ลิตร)`}</h3>
              <h3>{`${data?.leftOfGadinia}`}</h3>
              </div>
              <div className="flex justify-content-between">
              <h3>{`คงเหลือเทลลัส (ลิตร)`}</h3>
              <h3>{`${data?.leftOfTellus}`}</h3>
              </div>
              <div className="flex justify-content-between">
              <h3>{`คงเหลือน้ำจืด (ตัน)`}</h3>
              <h3>{`${data?.leftOfFreshWater}`}</h3>
              </div>

            </Card>
            }
          </div>
        )
        }
        <Button
          icon="pi pi-out"
          label="ย้อนกลับ"
          className="p-button-danger"
          onClick={onGoBack}
        />
        <h1> ส่งข้อมูลเรือ : {data?.vesNameTh}</h1>
        <h1>รอบที่ {data?.monthYear}</h1>
        <div className={styles.panel}>
          <Card>
            <div className={styles.card}>
              <h1>ชั่วโมงการใช้งาน</h1>
              <h1>{process.env.NEXT_PUBLIC_BIG_MACHINE}</h1>
              <h1>{`จำนวน ${data?.bigMachineNum} เครื่อง`}</h1>
              <DynamicHorizonInput dynamicInputItems={bigMachineResource} />
              <h1>ชั่วโมง</h1>
              <h1>{process.env.NEXT_PUBLIC_ELECTRIC_MACHINE}</h1>
              <h1>{`จำนวน ${data?.electricMachineNum} เครื่อง`}</h1>
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
        {isShowButton && (
          <div className="flex justify-content-center">
            <Button
              label="ส่งต่อ"
              className="p-button-success"
              onClick={(e) => UpdateApprove(e)}
            />
            <Button
              label="กลับไปแก้ไข"
              className="p-button-danger"
              onClick={(e) => RejectReport(e)}
            />
          </div>
        )}
      </form>
    </>
  );
};
export default PanelShowVessel;