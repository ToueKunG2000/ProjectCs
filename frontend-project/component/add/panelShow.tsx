import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from '../../styles/AddPage.module.css'
import InputNumberField from "../common/input/inputNumber";
import { DynamicInputItem } from "../common/interface";
import DynamicHorizonInput from "./../common/dynamicHorizonInput";
import { VesselService } from "./../../services/vessel.service";

interface AddPageProps{
    setPage: Dispatch<SetStateAction<number>>;
}

const AddPanelShow = (props:AddPageProps) => {
    const {setPage} = props;
    const name = "เรือกากๆ";
    const electro = 2;
    const engine = 2;
    const [isAdd, setIsAdd] = useState(true);
    const [isEdit, setIsEdit] = useState(false);
    const {control, handleSubmit, setValue,formState:{errors},resetField} = useForm();
    const [dateTime, setDateTime ] = useState('');
    const vesselService = new VesselService();

    useEffect(() => {
        const dateNow = new Date();
        setDateTime(dateNow.toUTCString());
        const data = vesselService.getDataVessel(1);
    },[dateTime]);

    const onSubmitForm = (e:any) => {
        console.log(e);
    }

    const onGoBack = () => {
        setPage(1);
    }

    const dynamicInputItemsPanel2:DynamicInputItem[] =  [
        {label:"เครื่องปรับอากาศ",type:"number", fieldID:"air-con",errors:["air-con"]},
        {label:"เครื่องอัดลม",type:"number", fieldID:"air-com",errors:["air-com"]},
        {label:"เครื่องทำความเย็น",type:"number", fieldID:"freezer",errors:["freezer"]},
        {label:"เครื่องเรือยนต์",type:"number", fieldID:"engine",errors:["engine"]},
        {label:"เครื่องสูบน้ำเคลื่อนที่",type:"number", fieldID:"pump",errors:["pump"]},
        {label:"หางเสือ",type:"number", fieldID:"rudder",errors:["rudder"]},
        {label:"เครื่องกลั่นน้ำ",type:"number", fieldID:"water-purifier",errors:["water-purifier"]},
        {label:"เครื่องแยกน้ำมันดีเซล",type:"number", fieldID:"diesel-oil-sep",errors:["diesel-oil-sep"]},
        {label:"เกียร์",type:"number", fieldID:"gear",errors:["gear"]},
    ];

    const getResource:DynamicInputItem[] =  [
        {label:"น้ำมัน ดีเซล (กล.)",type:"number", fieldID:"get-diesel",errors:["get-diesel"]},
        {label:"น้ำมัน เบนซิน95 (กล.)",type:"number", fieldID:"get-benzine",errors:["get-benzine"]},
        {label:"เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",type:"number", fieldID:"get-gadinia",errors:["get-gadinia"]},
        {label:"เซลล์ เทลลัส เกรด68 (ลิตร)",type:"number", fieldID:"get-tellus",errors:["get-tellus"]},
        {label:"น้ำจืด (ตัน)",type:"number", fieldID:"get-fresh-water",errors:["get-fresh-water"]},

    ];

    const giveResource:DynamicInputItem[] =  [
        {label:"น้ำมัน ดีเซล (กล.)",type:"number", fieldID:"give-diesel",errors:["give-diesel"]},
        {label:"น้ำมัน เบนซิน95 (กล.)",type:"number", fieldID:"give-benzine",errors:["give-benzine"]},
        {label:"เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",type:"number", fieldID:"give-gadinia",errors:["give-gadinia"]},
        {label:"เซลล์ เทลลัส เกรด68 (ลิตร)",type:"number", fieldID:"give-tellus",errors:["give-tellus"]},
        {label:"น้ำจืด (ตัน)",type:"number", fieldID:"give-fresh-water",errors:["give-fresh-water"]},
    ];

    const usedResource:DynamicInputItem[] =  [
        {label:"น้ำมัน ดีเซล (กล.)",type:"number", fieldID:"used-diesel",errors:["used-diesel"]},
        {label:"น้ำมัน เบนซิน95 (กล.)",type:"number", fieldID:"used-benzine",errors:["used-benzine"]},
        {label:"เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",type:"number", fieldID:"used-gadinia",errors:["used-gadinia"]},
        {label:"เซลล์ เทลลัส เกรด68 (ลิตร)",type:"number", fieldID:"used-tellus",errors:["used-tellus"]},
        {label:"น้ำจืด (ตัน)",type:"number", fieldID:"used-fresh-water",errors:["used-fresh-water"]},
    ];

    const leftResource:DynamicInputItem[] =  [
        {label:"น้ำมัน ดีเซล (กล.)",type:"number", fieldID:"left-diesel",errors:["left-diesel"]},
        {label:"น้ำมัน เบนซิน95 (กล.)",type:"number", fieldID:"left-benzine",errors:["left-benzine"]},
        {label:"เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",type:"number", fieldID:"left-gadinia",errors:["left-gadinia"]},
        {label:"เซลล์ เทลลัส เกรด68 (ลิตร)",type:"number", fieldID:"left-tellus",errors:["left-tellus"]},
        {label:"น้ำจืด (ตัน)",type:"number", fieldID:"left-fresh-water",errors:["left-fresh-water"]},
    ];


    return (
        <>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <Button icon="pi pi-out" label="ย้อนกลับ" onClick={onGoBack} />
                <h1> ส่งข้อมูลเรือ : {name}</h1>
                <h1>{dateTime}</h1>
                <div className={styles.panel}>
                    <Card >
                        <div className={styles.card}>
                            <h1>ชั่วโมงการใช้งาน</h1>
                            <h1>เครื่องจักรใหญ่</h1>
                            <h1>{engine}</h1>
                            <InputNumberField 
                                control={control}
                                controllerName={"bigMachine"}
                            
                            />
                            <h1>ชั่วโมง</h1>
                            <h1>เครื่องจักรใหญ่</h1>
                            <h1>{electro}</h1>
                            <InputNumberField 
                                control={control}
                                controllerName={"electro"}
                            />
                            <h1>ชั่วโมง</h1>
                        </div>
                    </Card>
                    <Card >
                        <div  className={styles.card}>
                        <h1>{"รายการรับเข้า ในเดือนนี้"}</h1>
                            <DynamicHorizonInput 
                                control={control}
                                dynamicInputItems={getResource}
                        />
                        </div>
                        
                    </Card>
                    
                </div>
                <div className={styles.panel}>
                    <Card >
                    <div className={styles.card}>
                        <h1>{"การใช้งานเครื่องจักร (ชั่วโมง)"}</h1>
                        <DynamicHorizonInput 
                            dynamicInputItems={dynamicInputItemsPanel2} 
                            control={control}
                        />
                    </div>
                    </Card>
                    <Card >
                    <div className={styles.card}>
                        <h1>{"รายการใช้ ในเดือนนี้"}</h1>
                        <DynamicHorizonInput 
                            control={control}
                            dynamicInputItems={usedResource}
                        />
                    </div>
                    </Card>
                </div>
                <div className={styles.panel}>
                    <Card >
                    <div className={styles.card}>
                            <h1>{"คงเหลือรวม"}</h1>
                            <DynamicHorizonInput 
                                control={control}
                                dynamicInputItems={leftResource}
                            />
                        </div>
                    </Card>
                    <Card >
                    <div className={styles.card}>
                            <h1>{"รายการจ่ายให้ที่อื่น ในเดือนนี้"}</h1>
                            <DynamicHorizonInput 
                                control={control}
                                dynamicInputItems={giveResource}
                            />
                        </div>
                    </Card>
                </div>
                <div>
                    <Button type="submit" className="p-button-success" label="ยืนยันแบบฟอร์มและส่งต่อ" />
                </div>
            </form>

        </>
    );
}
export default AddPanelShow;