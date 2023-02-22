import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { UserServices } from "../../services/user.service";
import DynamicHorizonInput from "../common/dynamicHorizonInput";
import {
  AddVesselForm,
  DynamicInputItem,
  PanelProps,
} from "../common/interface";
import { VesselServices } from "../../services/vessel.service";
import { useEffect, useState } from "react";

interface PanelAddVesselProps extends PanelProps {}
export const PanelAddVessel = (props: PanelAddVesselProps) => {
  const { setPage } = props;
  const userService = new UserServices();
  const vesselService = new VesselServices();
  const [vesId, setVesId] = useState<number>();

  const [optionEngineer, setOptionEngineer] = useState();
  const [optionCrew, setOptionCrew] = useState();
  const [optionCommander, setOptionCommander] = useState();

  useEffect(() => {
    userService.getUserDropdown(1).then((res) => setOptionCrew(res.data));
    userService.getUserDropdown(2).then((res) => setOptionEngineer(res.data));
    userService.getUserDropdown(3).then((res) => setOptionCommander(res.data));
  }, []);

  const { control, formState:{ errors }, setValue, handleSubmit } = useForm<AddVesselForm>();

  const OnSubmit = (e: AddVesselForm) => {
    vesselService.addVessel(e).then((res) => {
      console.log(res.data);
      userService.changeVesId(e.crewId, res.data);
      userService.changeVesId(e.engineerId, res.data);
      userService.changeVesId(e.commanderId, res.data);
    });
    window.location.reload();
  };

  const dynamicInput: DynamicInputItem[] = [
    {
      type: "text",
      label: "ชื่อเรือ",
      fieldID: "vesName",
      errors: errors["vesName"],
      isRequired: true,
      inputClassName:"space-bet",
      rules:{
        required:{ value:true, message:"กรุณากรอกชื่อเรือ"},
      },
      inputTextProps:{
        required: true
      }

    },
    {
      type: "number",
      label: "จำนวนเครื่องจักรใหญ่",
      fieldID: "bigMachineNum",
      errors: errors["bigMachineNum"],
      isRequired: true,
      inputClassName:"space-bet",
      rules:{
        required: {value: true, message:"กรุณาระบุจำนวน"},
        min: {value: 1, message:"กรุณาระบุจำนวนมากกว่า 0"},
      },
      inputNumberProps:{
        required: true,
      }
    },
    {
      type: "number",
      label: "จำนวนเครื่องใช้ไฟฟ้า",
      fieldID: "electricMachineNum",
      errors: errors["electricMachineNum"],
      isRequired: true,
      inputClassName:"space-bet",
      rules:{
        required: {value: true, message:"กรุณาระบุจำนวน"},
        min: {value: 1, message:"กรุณาระบุจำนวนมากกว่า 0"},
      },
      inputNumberProps:{
        required: true
      }
    },
    {
      type: "upload",
      label: "รูปภาพเรือ",
      fieldID: "vesPhoto",
      errors: errors["vesPhoto"],
      inputClassName:"space-bet",
      rules:{
        required:{value:true, message:"กดปุ่ม upload"},
        minLength:{value:1, message:"กดปุ่ม upload"},
      },
      setValue: setValue,
    },
    {
      type: "dropdown",
      label: "ทหารช่าง",
      fieldID: "crewId",
      options: optionCrew,
      inputClassName:"space-bet",
      errors: errors["crewId"],
      isRequired: true,
      rules:{
        required:{ value:true, message:"กรุณาเลือกทหารช่าง"},
        min:{value: 1, message:"กรุณาเลือกทหารช่าง"},
      },
      inputDropdownProps:{
        required:true
      }
    },
    {
      type: "dropdown",
      label: "ต้นกล",
      fieldID: "engineerId",
      inputClassName:"space-bet",
      options: optionEngineer,      
      errors: errors["engineerId"],
      isRequired: true,
      rules:{
        required:{ value:true, message:"กรุณาเลือกต้นกล"},
        min:{value: 1, message:"กรุณาเลือกต้นกล"},
      },
      inputDropdownProps:{
        required:true
      }
    },
    {
      type: "dropdown",
      label: "ผอ. การช่าง",
      fieldID: "commanderId",
      options: optionCommander,
      inputClassName:"space-bet",
      isRequired: true,
      rules:{
        required:{ value:true, message:"กรุณาเลือกผู้บังคับการเรือ"},
        min:{value: 1, message:"กรุณาเลือกผู้บังคับการเรือ"},
      },
      inputDropdownProps:{
        required:true
      }

    },
  ];

  const onGoBack = (e:any) =>{
    e.preventDefault();
    setPage(5);
  }

  return (
    <>
      <Button label="ย้อนกลับ" onClick={(e)=>{onGoBack(e)}} />  
        <form>
        <DynamicHorizonInput
          dynamicInputItems={dynamicInput}
          control={control}
        />
        <div className="flex justify-content-center">
        <Button label="ยืนยัน" onClick={handleSubmit(OnSubmit)} />  
        </div>
        </form>
    </>
  );
};
