import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { UserServices } from "../../services/user.service";
import DynamicHorizonInput from "../common/dynamicHorizonInput";
import { AddUserForm, DynamicInputItem, PanelProps } from "../common/interface";

interface PanelAddUserProps extends PanelProps {}
export const PanelAddUser = (props:PanelAddUserProps) => {
    const userService = new UserServices();
    const {setPage} = props;
    const {
        control,
        handleSubmit,
        setValue
    } = useForm<AddUserForm>();

    const positionDropdown = [
        {value:1,label:"ทหารช่าง"},
        {value:2,label:"ต้นกล"},
        {value:3,label:"ผู้บังคับการ"},
    ];

    const dynamicInput: DynamicInputItem[] = [
        {type:"text",label:"Username",fieldID:"username",errors:["username"], isRequired:true},
        {type:"text",label:"password",fieldID:"password",errors:["password"],isRequired:true},
        {type:"text",label:"ชื่อ",fieldID:"firstName",errors:["firstName"],isRequired:true},
        {type:"text",label:"นามสกุล",fieldID:"lastName",errors:["lastName"],isRequired:true},
        {type:"dropdown",label:"ตำแหน่ง",fieldID:"positionId",errors:["positionId"],options:positionDropdown,isRequired:true},
        {type:"upload",label:"อัพโหลดรูป",fieldID:"userPhoto",errors:["userPhoto"],setValue:setValue}
    ];

    const onSubmit = (e:any) => {
        console.log(e);
        userService.addUser(e);
    }
    return (
        <>
            <DynamicHorizonInput 
                dynamicInputItems={dynamicInput}
                control={control}
            />
            <Button label="ยืนยัน" className="p-button-success" onClick={handleSubmit(onSubmit)}/>
        </>
    );
}