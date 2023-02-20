import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import DynamicHorizonInput from "../common/dynamicHorizonInput";
import {
  DynamicInputFields,
  DynamicInputItem,
  VesselForm,
} from "../common/interface";
import { VesselServices } from "../../services/vessel.service";
import { useEffect, useState } from "react";
import { UserServices } from "../../services/user.service";

interface PopupShowStatusProps {
  selectedVessel: VesselForm;
}

export const PopupShowStatus = (props: PopupShowStatusProps) => {
  const { selectedVessel } = props;
  const userService = new UserServices();
  const vesselService = new VesselServices();
  const [optionEngineer, setOptionEngineer] = useState();
  const [optionCrew, setOptionCrew] = useState();
  const [optionCommander, setOptionCommander] = useState();

  const { control, handleSubmit } = useForm({ values: selectedVessel });

  useEffect(() => {
    userService.getUserDropdown(1).then((res) => setOptionCrew(res.data));
    userService.getUserDropdown(2).then((res) => setOptionEngineer(res.data));
    userService.getUserDropdown(3).then((res) => setOptionCommander(res.data));
  }, []);

  const status = [
    { label: "กำลังใช้งาน", value: 1 },
    { label: "ไม่ใช้งาน", value: 2 },
  ];

  const OnSubmit = (e: any) => {
    console.log(e);
    vesselService.changeVesselStatus(e);
    userService.checkUserIdInVessel(e);
    window.location.reload();
  };

  const dynamicInput: DynamicInputItem[] = [
    {
      label: "ชื่อเรือ",
      type: "label",
      data: selectedVessel?.vesName,
    },
    {
      label: "ผู้บังคับการ",
      type: "label",
      data: selectedVessel?.name,
    },
    {
      label: "ทหารช่าง",
      type: "dropdown",
      options: optionCrew,
      fieldID: "crewId",
    },
    {
      label: "ต้นกล",
      type: "dropdown",
      options: optionEngineer,
      fieldID: "engineerId",
    },
    {
      label: "ผู้บังคับการ",
      type: "dropdown",
      options: optionCommander,
      fieldID: "commanderId",
    },
    {
      label: "สถานะเรือ",
      type: "dropdown",
      options: status,
      fieldID: "vesStatus",
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
          <Button label="ยืนยัน" onClick={handleSubmit(OnSubmit)} />
        </form>
      </div>
    </>
  );
};
