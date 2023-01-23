import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from '../../styles/AddPage.module.css'
import InputNumberField from "../common/input/inputNumber";
import { DynamicInputItem, VesselForm } from "../common/interface";
import DynamicHorizonInput from "./../common/dynamicHorizonInput";
import { VesselService } from "./../../services/vessel.service";

interface AddPageProps{
    setPage: Dispatch<SetStateAction<number>>;
    data?: VesselForm;
}

const AddPanelShow = (props:AddPageProps) => {
    const {setPage, data} = props;
    const [isAdd, setIsAdd] = useState(true);
    const [isEdit, setIsEdit] = useState(false);
    const [dateTime, setDateTime ] = useState('');
    const vesselService = new VesselService();
    const {control, handleSubmit, setValue,formState:{errors}} = useForm<VesselForm>();

    useEffect(() => {
        const dateNow = new Date();
        setDateTime(dateNow.toLocaleString('th-TH',{month:"2-digit",year:"numeric"}));
    },[dateTime]);

    const onSubmitForm = (e:VesselForm) => {
        e.monthYear = dateTime;
        e.currentPosition = 2;
        e.vesId = data!.vesId;
        vesselService.createReport(e);
    }

    const onGoBack = () => {
        setPage(1);
    }

    const dynamicInputItemsPanel2:DynamicInputItem[] =  [
        {label:"เครื่องปรับอากาศ",type:"number", fieldID:"airConditioner",errors:["airConditioner"]},
        {label:"เครื่องอัดลม",type:"number", fieldID:"airCompressor",errors:["airCompressor"]},
        {label:"เครื่องทำความเย็น",type:"number", fieldID:"freezer",errors:["freezer"]},
        {label:"เครื่องเรือยนต์",type:"number", fieldID:"shipEngine",errors:["shipEngine"]},
        {label:"เครื่องสูบน้ำเคลื่อนที่",type:"number", fieldID:"pump",errors:["pump"]},
        {label:"หางเสือ",type:"number", fieldID:"rudder",errors:["rudder"]},
        {label:"เครื่องกลั่นน้ำ",type:"number", fieldID:"waterPurifier",errors:["waterPurifier"]},
        {label:"เครื่องแยกน้ำมันดีเซล",type:"number", fieldID:"dieselOilSeparator",errors:["dieselOilSeparator"]},
        {label:"เกียร์",type:"number", fieldID:"gear",errors:["gear"]},
    ];

    const getResource:DynamicInputItem[] =  [
        {label:"น้ำมัน ดีเซล (กล.)",type:"number", fieldID:"getOfDiesel",errors:["getOfDiesel"]},
        {label:"น้ำมัน เบนซิน95 (กล.)",type:"number", fieldID:"getOfBenzine",errors:["getOfBenzine"]},
        {label:"เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",type:"number", fieldID:"getOfGadinia",errors:["getOfGadinia"]},
        {label:"เซลล์ เทลลัส เกรด68 (ลิตร)",type:"number", fieldID:"getOfTellus",errors:["getOfTellus"]},
        {label:"น้ำจืด (ตัน)",type:"number", fieldID:"getOfFreshWater",errors:["getOfFreshWater"]},

    ];

    const giveResource:DynamicInputItem[] =  [
        {label:"น้ำมัน ดีเซล (กล.)",type:"number", fieldID:"giveOfDiesel",errors:["giveOfDiesel"]},
        {label:"น้ำมัน เบนซิน95 (กล.)",type:"number", fieldID:"giveOfBenzine",errors:["giveOfBenzine"]},
        {label:"เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",type:"number", fieldID:"giveOfGadinia",errors:["giveOfGadinia"]},
        {label:"เซลล์ เทลลัส เกรด68 (ลิตร)",type:"number", fieldID:"giveOfTellus",errors:["giveOfTellus"]},
        {label:"น้ำจืด (ตัน)",type:"number", fieldID:"giveOfFreshWater",errors:["giveOfFreshWater"]},
    ];

    const usedResource:DynamicInputItem[] =  [
        {label:"น้ำมัน ดีเซล (กล.)",type:"number", fieldID:"usedOfDiesel",errors:["usedOfDiesel"]},
        {label:"น้ำมัน เบนซิน95 (กล.)",type:"number", fieldID:"usedOfBenzine",errors:["usedOfBenzine"]},
        {label:"เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",type:"number", fieldID:"usedOfGadinia",errors:["usedOfGadinia"]},
        {label:"เซลล์ เทลลัส เกรด68 (ลิตร)",type:"number", fieldID:"usedOfTellus",errors:["usedOfTellus"]},
        {label:"น้ำจืด (ตัน)",type:"number", fieldID:"usedOfFreshWater",errors:["usedOfFreshWater"]},
    ];

    const leftResource:DynamicInputItem[] =  [
        {label:"น้ำมัน ดีเซล (กล.)",type:"number", fieldID:"leftOfDiesel",errors:["leftOfDiesel"], inputNumberProps:{disabled:true}},
        {label:"น้ำมัน เบนซิน95 (กล.)",type:"number", fieldID:"leftOfBenzine",errors:["leftOfBenzine"], inputNumberProps:{disabled:true}},
        {label:"เซลล์ การ์ดิเนีย เกรด40 (ลิตร)",type:"number", fieldID:"leftOfGadinia",errors:["leftOfGadinia"], inputNumberProps:{disabled:true}},
        {label:"เซลล์ เทลลัส เกรด68 (ลิตร)",type:"number", fieldID:"leftOfTellus",errors:["leftOfTellus"], inputNumberProps:{disabled:true}},
        {label:"น้ำจืด (ตัน)",type:"number", fieldID:"leftOfFreshWater",errors:["leftOfFreshWater"], inputNumberProps:{disabled:true}},
    ];


    return (
        <>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <Button icon="pi pi-out" label="ย้อนกลับ" onClick={onGoBack} />
                <h1> ส่งข้อมูลเรือ : {data!.vesNameTh}</h1>
                <h1>รอบที่ {dateTime}</h1>
                <div className={styles.panel}>
                    <Card >
                        <div className={styles.card}>
                            <h1>ชั่วโมงการใช้งาน</h1>
                            <h1>เครื่องจักรใหญ่</h1>
                            <h1>{data!.bigMachineNum}</h1>
                            <InputNumberField 
                                control={control}
                                controllerName={"bigMachineUsed"}
                            />
                            <h1>ชั่วโมง</h1>
                            <h1>เครื่องจักรใหญ่</h1>
                            <h1>{data!.electricMachineNum}</h1>
                            <InputNumberField 
                                control={control}
                                controllerName={"electricMachineUsed"}
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