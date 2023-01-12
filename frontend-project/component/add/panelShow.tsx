import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from '../../styles/AddPage.module.css'
import InputNumberField from "../common/input/inputNumber";


const AddPanelShow = () => {
    const name = "เรือกากๆ";
    const electro = 2;
    const engine = 2;
    const [isAdd, setIsAdd] = useState(true);
    const [isEdit, setIsEdit] = useState(false);
    const {control, handleSubmit, setValue} = useForm();

    const onSubmitForm = (e:any) => {
        console.log(e);
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <Button icon="pi pi-out" label="ย้อนกลับ" />
                <h1> ส่งข้อมูลเรือ : {name}</h1>
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
                        <div className={styles.card}>
                            <h1>{"การใช้งานเครื่องจักร (ชั่วโมง)"}</h1>
                            <div>
                                <label>เครื่องปรับอากาศ</label>
                                <InputNumberField 
                                    control={control}
                                    controllerName={"air-con"}
                                />
                            </div>
                            <div>
                                <label>เครื่องอัดลม</label>
                                <InputNumberField 
                                    control={control}
                                    controllerName={"air-com"}
                                />
                            </div>
                            <div>
                                <label>เครื่องทำความเย็น</label>
                                <InputNumberField 
                                    control={control}
                                    controllerName={"freezer"}
                                />
                            </div>
                            <div>
                                <label>เครื่องเรือยนต์</label>
                                <InputNumberField 
                                    control={control}
                                    controllerName={"engine"}
                                />
                            </div>
                            <div>
                                <label>เครื่องสูบน้ำเคลื่อนที่</label>
                                <InputNumberField 
                                    control={control}
                                    controllerName={"pump"}
                                />
                            </div>
                            <div>
                                <label>เครื่องหางเสือ</label>
                                <InputNumberField 
                                    control={control}
                                    controllerName={"rudder"}
                                />
                            </div>
                            <div>
                                <label>เครื่องกลั่นน้ำ</label>
                                <InputNumberField 
                                    control={control}
                                    controllerName={"water-purifier"}
                                />
                            </div>
                            <div>
                                <label>เครื่องแยกน้ำมันดีเซล</label>
                                <InputNumberField 
                                    control={control}
                                    controllerName={"diesel-oil-sep"}
                                />
                            </div>
                            <div>
                                <label>เกียร์</label>
                                <InputNumberField 
                                    control={control}
                                    controllerName={"gear"}
                                />
                            </div>
                        </div>
                    </Card>
                    <Card >
                    <div className={styles.card}>
                            <h1>{"รายการรับเข้า"}</h1>
                            <div>
                                <label>น้ำมัน ดีเซล (กล.)</label>
                                <InputNumberField 
                                    control={control}
                                    controllerName={"get-diesel"}
                                />
                            </div>
                            <div>
                                <label>น้ำมัน เบนซิน95 (กล.)</label>
                                <InputNumberField 
                                    control={control}
                                    controllerName={"get-benzine"}
                                />
                            </div>
                            <div>
                                <label>เซลล์ การ์ดิเนีย เกรด40 (ลิตร)</label>
                                <InputNumberField 
                                    control={control}
                                    controllerName={"get-gadinia"}
                                />
                            </div>
                            <div>
                                <label>เซลล์ เทลลัส เกรด68 (ลิตร)</label>
                                <InputNumberField 
                                    control={control}
                                    controllerName={"get-tellus"}
                                />
                            </div>
                            <div>
                                <label>น้ำจืด (ตัน)</label>
                                <InputNumberField 
                                    control={control}
                                    controllerName={"get-fresh-water"}
                                />
                            </div>
                            <h1>{"รายการจ่ายออก"}</h1>
                            <div>
                                <label>น้ำมัน ดีเซล (กล.)</label>
                                <InputNumberField 
                                    control={control}
                                    controllerName={"give-diesel"}
                                />
                            </div>
                            <div>
                                <label>น้ำมัน เบนซิน95 (กล.)</label>
                                <InputNumberField 
                                    control={control}
                                    controllerName={"give-benzine"}
                                />
                            </div>
                            <div>
                                <label>เซลล์ การ์ดิเนีย เกรด40 (ลิตร)</label>
                                <InputNumberField 
                                    control={control}
                                    controllerName={"give-gadinia"}
                                />
                            </div>
                            <div>
                                <label>เซลล์ เทลลัส เกรด68 (ลิตร)</label>
                                <InputNumberField 
                                    control={control}
                                    controllerName={"give-tellus"}
                                />
                            </div>
                            <div>
                                <label>น้ำจืด (ตัน)</label>
                                <InputNumberField 
                                    control={control}
                                    controllerName={"give-fresh-water"}
                                />
                            </div>
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