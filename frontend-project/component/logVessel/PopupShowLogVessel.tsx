import {
  CheckLogMonthYearForm,
  DynamicInputItem,
  VesselForm,
} from "../common/interface";
import { useEffect, useState } from "react";
import { VesselService } from "./../../services/vessel.service";
import DynamicHorizonInput from "../common/dynamicHorizonInput";

interface PopupShowLogVesselProps {
  request: CheckLogMonthYearForm;
}
const PopupShowLogVessel = (props: PopupShowLogVesselProps) => {
  const { request } = props;
  const vesselService = new VesselService();
  const [vesselData, setVesselData] = useState<VesselForm>();

  useEffect(() => {
    const fetchData = () => {
      vesselService.getLogVessel(request).then((res) => {
        setVesselData(res.data);
      });
    };
    fetchData();
  }, []);

  const dynamicInputItemsPanel2: DynamicInputItem[] = [
    {
      label: "เครื่องปรับอากาศ",
      type: "label",
      data: vesselData?.airConditioner,
    },
    {
      label: "เครื่องอัดลม",
      type: "label",
      data: vesselData?.airCompressor,
    },
    {
      label: "เครื่องทำความเย็น",
      type: "label",
      data: vesselData?.freezer,
    },
    {
      label: "เครื่องเรือยนต์",
      type: "label",
      data: vesselData?.shipEngine,
    },
    {
      label: "เครื่องสูบน้ำเคลื่อนที่",
      type: "label",
      data: vesselData?.pump,
    },
    {
      label: "หางเสือ",
      type: "label",
      data: vesselData?.rudder,
    },
    {
      label: "เครื่องกลั่นน้ำ",
      type: "label",
      data: vesselData?.waterPurifier,
    },
    {
      label: "เครื่องแยกน้ำมันดีเซล",
      type: "label",
      data: vesselData?.dieselOilSeparator,
    },
    {
      label: "เกียร์",
      type: "label",
      data: vesselData?.gear,
    },
  ];

  const getResource: DynamicInputItem[] = [
    {
      label: "น้ำมัน ดีเซล (กล.)",
      type: "label",
      data: vesselData?.getOfDiesel.toPrecision(3),
    },
    {
      label: "น้ำมัน เบนซิน95 (ลิตร)",
      type: "label",
      data: vesselData?.getOfBenzine.toPrecision(3),
    },
    {
      label: "เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",
      type: "label",
      data: vesselData?.getOfGadinia.toPrecision(3),
    },
    {
      label: "เซลล์ เทลลัส เกรด68 (ลิตร)",
      type: "label",
      data: vesselData?.getOfTellus.toPrecision(3),
    },
    {
      label: "น้ำจืด (ตัน)",
      type: "label",
      data: vesselData?.getOfFreshWater.toPrecision(3),
    },
  ];

  const giveResource: DynamicInputItem[] = [
    {
      label: "น้ำมัน ดีเซล (กล.)",
      type: "label",
      data: vesselData?.giveOfDiesel.toPrecision(3),
    },
    {
      label: "น้ำมัน เบนซิน95 (ลิตร)",
      type: "label",
      data: vesselData?.giveOfBenzine.toPrecision(3),
    },
    {
      label: "เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",
      type: "label",
      data: vesselData?.giveOfGadinia.toPrecision(3),
    },
    {
      label: "เซลล์ เทลลัส เกรด68 (ลิตร)",
      type: "label",
      data: vesselData?.giveOfTellus.toPrecision(3),
    },
    {
      label: "น้ำจืด (ตัน)",
      type: "label",
      data: vesselData?.giveOfFreshWater.toPrecision(3),
    },
  ];

  const usedResource: DynamicInputItem[] = [
    {
      label: "น้ำมัน ดีเซล (กล.)",
      type: "label",
      data: vesselData?.usedOfDiesel.toPrecision(3),
    },
    {
      label: "น้ำมัน เบนซิน95 (ลิตร)",
      type: "label",
      data: vesselData?.usedOfBenzine.toPrecision(3),
    },
    {
      label: "เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",
      type: "label",
      data: vesselData?.usedOfGadinia.toPrecision(3),
    },
    {
      label: "เซลล์ เทลลัส เกรด68 (ลิตร)",
      type: "label",
      data: vesselData?.usedOfTellus.toPrecision(3),
    },
    {
      label: "น้ำจืด (ตัน)",
      type: "label",
      data: vesselData?.usedOfFreshWater.toPrecision(3),
    },
  ];

  const leftResource: DynamicInputItem[] = [
    {
      label: "น้ำมัน ดีเซล (กล.)",
      type: "label",
      data: vesselData?.leftOfDiesel.toPrecision(3),
    },
    {
      label: "น้ำมัน เบนซิน95 (ลิตร)",
      type: "label",
      data: vesselData?.leftOfBenzine.toPrecision(3),
    },
    {
      label: "เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",
      type: "label",
      data: vesselData?.leftOfGadinia.toPrecision(3),
    },
    {
      label: "เซลล์ เทลลัส เกรด68 (ลิตร)",
      type: "label",
      data: vesselData?.leftOfTellus.toPrecision(3),
    },
    {
      label: "น้ำจืด (ตัน)",
      type: "label",
      data: vesselData?.leftOfFreshWater.toPrecision(3),
    },
  ];
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
        <h1>{`ชื่อเรือ ${vesselData?.vesNameTh}`}</h1>
        <h1>{"ชั่วโมง ใช้เครื่องจักรใหญ่"}</h1>
        <DynamicHorizonInput dynamicInputItems={bigMachineResource} />
        <h1>{"ชั่วโมง ใช้เครื่องใช้ไฟฟ้า"}</h1>
        <DynamicHorizonInput dynamicInputItems={electricMachineResource} />
        <h1>{"ชั่วโมง การใช้เครื่องใช้ไฟฟ้า"}</h1>
        <DynamicHorizonInput dynamicInputItems={dynamicInputItemsPanel2} />
        <h1>{"คงเหลือ จากเดือนก่อนหน้า"}</h1>
        <DynamicHorizonInput dynamicInputItems={leftResource} />
        <h1>{"ได้รับ ในเดือนนี้"}</h1>
        <DynamicHorizonInput dynamicInputItems={getResource} />
        <h1>{"ใช้ ในเดือนนี้"}</h1>
        <DynamicHorizonInput dynamicInputItems={usedResource} />
        <h1>{"จ่ายออก ในเดือนนี้"}</h1>
        <DynamicHorizonInput dynamicInputItems={giveResource} />
      </div>
    </>
  );
};
export default PopupShowLogVessel;
