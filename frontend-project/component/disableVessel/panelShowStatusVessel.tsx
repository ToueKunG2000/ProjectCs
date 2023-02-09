import { Button } from "primereact/button";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import DynamicDisplay from "../common/dynamicDisplay";
import { VesselForm } from "../common/interface";
import PopupPage from "../common/popupPage";
import { VesselService } from "./../../services/vessel.service";

interface PanelShowStatusVesselProps{
    setPage: Dispatch<SetStateAction<number>>;
}

export const PanelShowStatusVessel = (props: PanelShowStatusVesselProps) =>{
    const vesselService = new VesselService();
    const [vesselShow,setVesselShow] = useState<VesselForm[]>([]);
    const [selectedVessel, setSelectedVessel] = useState(0);  

    const {setPage} = props;

    useEffect(()=>{
        vesselService.getVesselStatus().then((res)=>{
        setVesselShow(res.data);
        console.log(res.data)
        });
    },[])

    const OnClickBack = (e:any) => {
        setPage(1);
    }

    return (
        <>
            <Button label="ย้อนกลับ" onClick={OnClickBack}/>
            <DynamicDisplay
                data={vesselShow!}
                activeIndex={0}
                setPage={setPage}
                isShowStatus={true}
                setVesselSelected={setSelectedVessel}
            />
        </>
    );
};
