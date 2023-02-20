import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { UserServices } from "../../services/user.service";
import DynamicHorizonInput from "../common/dynamicHorizonInput";
import { AddVesselForm, DynamicInputItem, PanelProps } from "../common/interface";
import { VesselServices } from "../../services/vessel.service";
import { useEffect, useState } from "react";

interface PanelAddVesselProps extends PanelProps{

}
export const PanelAddVessel = (props: PanelAddVesselProps) => {
    const {setPage} = props;
    const userService = new UserServices();
    const vesselService = new VesselServices();
    const [vesId,setVesId] = useState<number>();

    const [optionEngineer,setOptionEngineer] = useState();
    const [optionCrew,setOptionCrew] = useState();
    const [optionCommander,setOptionCommander] = useState();

    useEffect(() => {
        userService.getUserDropdown(1).then((res)=>setOptionCrew(res.data))
        userService.getUserDropdown(2).then((res)=>setOptionEngineer(res.data))
        userService.getUserDropdown(3).then((res)=>setOptionCommander(res.data))
    },[]);

    const {
        control,
        setValue,
        handleSubmit,
    } = useForm<AddVesselForm>();

    const OnSubmit = (e:AddVesselForm) => {
        vesselService.addVessel(e).then((res)=>{
            console.log(res.data);
            userService.changeVesId(e.crewId, res.data);
            userService.changeVesId(e.engineerId, res.data);
            userService.changeVesId(e.commanderId, res.data);
        });
    }

    const dynamicInput: DynamicInputItem[] = [
        {type:"text",label:"ชื่อเรือ",fieldID:"vesName",errors:["vesName"]},
        {type:"number",label:"จำนวนเครื่องจักรใหญ่",fieldID:"bigMachineNum",errors:["bigMachineNum"]},
        {type:"number",label:"จำนวนเครื่องใช้ไฟฟ้า",fieldID:"electricMachineNum",errors:["electricMachineNum"]},
        {type:"upload",label:"รูปภาพเรือ",fieldID:"vesPhoto",errors:["vesPhoto"],setValue:setValue},
        {type:"dropdown",label:"ทหารช่าง",fieldID:"crewId",options: optionCrew},
        {type:"dropdown",label:"ต้นกล",fieldID:"engineerId",options: optionEngineer},
        {type:"dropdown",label:"ผอ. การช่าง",fieldID:"commanderId",options: optionCommander},
    ];

    return (
        <>
        <div className="pt-6">
        <DynamicHorizonInput 
                dynamicInputItems={dynamicInput}
                control={control}
            />
            <Button label="ยืนยัน" onClick={handleSubmit(OnSubmit)} />
        </div>
        </>
    );
}