import { Button } from "primereact/button";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import DynamicDisplay from "../common/dynamicDisplay";
import { VesselForm } from "../common/interface";
import { VesselServices } from "../../services/vessel.service";

interface PanelShowStatusVesselProps{
    setPage: Dispatch<SetStateAction<number>>;
}

export const PanelShowStatusVessel = (props: PanelShowStatusVesselProps) =>{
    const vesselService = new VesselServices();
    const [vesselShow,setVesselShow] = useState<VesselForm[]>([]);
    const [selectedVessel, setSelectedVessel] = useState(0);  

    const {setPage} = props;

    useEffect(()=>{
        vesselService.getVesselStatus().then((res)=>{
        setVesselShow(res.data);
        });
    },[])

    const OnClickBack = (e:any) => {
        setPage(1);
    }

    const OnClickAdd = () => {
        setPage(8);
    }

    return (
        <>
        <div>
            <Button label="ย้อนกลับ" className="p-button-danger" onClick={OnClickBack}/>
            <Button label="เพิ่มเรือ" className="p-button-success" onClick={OnClickAdd} />
        </div>  
        <DynamicDisplay
                type="vessel"
                dataVessel={vesselShow!}
                activeIndex={0}
                setPage={setPage}
                isShowStatus={true}
                setVesselSelected={setSelectedVessel}
            />
        </>
    );
};
