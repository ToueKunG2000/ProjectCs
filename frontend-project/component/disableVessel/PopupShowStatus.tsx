import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import DynamicHorizonInput from "../common/dynamicHorizonInput";
import { DynamicInputFields, DynamicInputItem, VesselForm } from "./../common/interface";
import { useEffect } from "react";
import { VesselService } from "../../services/vessel.service";

interface PopupShowStatusProps {
    selectedVessel: VesselForm;
}

export const PopupShowStatus = (props: PopupShowStatusProps) => {
  const {selectedVessel} = props;
  const vesselService = new VesselService();

  const { control, handleSubmit } = useForm({values: selectedVessel});
  const status = [
    {label:"กำลังใช้งาน",value:1},
    {label:"ไม่ใช้งาน",value:2}
  ];

  const OnSubmit = (e:any) => {
    console.log(e);
    vesselService.changeVesselStatus(e);
    window.location.reload();
  }

  const dynamicInput: DynamicInputItem[] = [
    {
      label:"ชื่อเรือ",
      type:"label",
      data: selectedVessel?.vesNameTh,
    },
    {
      label:"ผบ. ประจำเรือ",
      type:"label",
      data: selectedVessel?.nameUser,
    },
    {
      label:"สถานะเรือ",
      type:"dropdown",
      options: status,
      fieldID:"vesStatus",
      errors: ["vesStatus"],
    },
  ];

  return (
    <>
      <div>
        <form>
        <DynamicHorizonInput
          dynamicInputItems={dynamicInput}
          control={control}
        />
        <Button label="ยืนยัน" onClick={handleSubmit(OnSubmit)}/>
        </form>
      </div>
    </>
  );
};
