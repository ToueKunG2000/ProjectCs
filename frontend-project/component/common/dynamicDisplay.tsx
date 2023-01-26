import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { SetStateAction, Dispatch } from "react";
import styles from '../../styles/DynamicDisplay.module.css'

interface DynamicDisplayProps{
    setPage: Dispatch<SetStateAction<number>>;
    data: any[];
    setVesselSelected: Dispatch<SetStateAction<any>>;
}

const DynamicDisplay = (props: DynamicDisplayProps) => {
    const {setPage, data, setVesselSelected} = props;
    const AddOrEdit = (e:any, vessel:any) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if(user.positionId == 1){
            setPage(2);
            setVesselSelected(vessel);
        }
        else{
            setPage(3);
            setVesselSelected(vessel);
        }
    }

    return (
        <div className="grid">
            {data.map((vessel)=>{
                return (
                <>
                    <div className="col-4 flex justify-content-center">
                        <Card className={"card-display"} onClick={(e)=>AddOrEdit(e,vessel)}>
                            <Image className={styles.img} alt='profile' src={process.env.NEXT_PUBLIC_IMAGE} width="200" height="200" />
                            <h2>{vessel.vesNameEn}</h2>
                            <h2>{vessel.vesNameTh}</h2>
                            <h3>{vessel.vesStatus==1?"Active":"Not Active"}</h3>
                        </Card>
                    </div>
                </>
                )
            })}
        </div>
    );
}
export default DynamicDisplay;