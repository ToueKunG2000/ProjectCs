
import DynamicHorizonInput from "../common/dynamicHorizonInput";
import { DynamicInputItem, UserForm } from "./../common/interface";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { UserServices } from "./../../services/user.service";
interface PopupUserStatus{
    selectedUser: UserForm;
}
export const PopupUserStatus = (props: PopupUserStatus) => {
    const {selectedUser} = props;
    const userService = new UserServices();
    const {
        control,
        handleSubmit,
    } = useForm({values: selectedUser});

    const status = [
        {label:"ปฏิบัตงาน",value:1},
        {label:"ปลดประจำการ",value:2}
    ];

    const OnSubmit = (e:any) => {
        userService.changeUserStatus(e);
    }

    const dynamicInput: DynamicInputItem[] = [
        {type:"label", label:"ชื่อ" , data: selectedUser.name},
        {type:"label", label:"ตำแหน่ง" , data: selectedUser.positionName},
        {type:"dropdown", label:"สถานะปัจจุบัน", fieldID:"userStatus", errors:["userStatus"], options:status},

    ];
    return (
        <>
        <form>
            <DynamicHorizonInput 
                    dynamicInputItems={dynamicInput}
                    control={control}
                />
            <Button className="p-button-success" label="ยืนยัน" onClick={handleSubmit(OnSubmit)}/>
        </form>
        </>
    );
}
