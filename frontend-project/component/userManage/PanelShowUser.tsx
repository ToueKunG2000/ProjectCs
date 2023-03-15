
import { Button } from "primereact/button";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PanelProps, UserForm } from "../common/interface";
import DynamicDisplay from "./../common/dynamicDisplay";
import { UserServices } from "./../../services/user.service";

interface PanelShowUserProps extends PanelProps{
}
export const PanelShowUser = (props: PanelShowUserProps) => {
    const {setPage, setSelectedVessel} = props;
    const userService = new UserServices();
    const [userList, setUserList] = useState<UserForm[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(()=>{
        userService.getAllUser().then((res)=>{
            setUserList(res.data);
        });
    },[])

    const OnGoBack = (e:any) => {
        setPage(1);
    }

    const OnAddUser = (e: any) => {
        setPage(7);
    }

    return (
        <>
            <Button onClick={OnGoBack} label="ย้อนกลับ" className="p-button-danger" />
            <Button onClick={OnAddUser} label="เพิ่มตำแหน่งประจำเรือ" className="p-button-success"/>
            <DynamicDisplay 
                type="user"
                dataUser={userList}
                activeIndex={activeIndex}
                setPage={setPage}
            />
        </>
    );
}
