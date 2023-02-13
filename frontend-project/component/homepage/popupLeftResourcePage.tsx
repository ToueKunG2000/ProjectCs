import { DynamicInputItem, VesselForm } from "../common/interface";
import DynamicHorizonInput from "./../common/dynamicHorizonInput";
interface PopupLeftResourcePageProps {
  selectedVessel: VesselForm;
}

export const PopupLeftResourcePage = (props: PopupLeftResourcePageProps) => {
  const { selectedVessel } = props;
  const dynamicInput: DynamicInputItem[] = [
    { label: "เรือ", type: "label", data: selectedVessel?.vesNameTh },
    { label: "คงเหลือดีเซล (กิโลลิตร)", type: "label", data: selectedVessel?.leftOfDiesel },
    { label: "คงเหลือเบนซิน (ลิตร)", type: "label", data: selectedVessel?.leftOfBenzine },
    { label: "คงเหลือกาดิเนีย (ลิตร)", type: "label", data: selectedVessel?.leftOfGadinia },
    { label: "คงเหลือเทลลัส (ลิตร)", type: "label", data: selectedVessel?.leftOfTellus },
    { label: "คงเหลือน้ำจืด (ตัน)", type: "label", data: selectedVessel?.leftOfGadinia },

  ];
  return (
    <>
      <DynamicHorizonInput dynamicInputItems={dynamicInput} />
    </>
  );
};
