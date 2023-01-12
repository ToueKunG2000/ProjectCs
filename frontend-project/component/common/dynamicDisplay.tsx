import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { SetStateAction, Dispatch } from "react";

interface DynamicDisplayProps{
    setPage: Dispatch<SetStateAction<number>>;
}

const DynamicDisplay = (props: DynamicDisplayProps) => {
    const {setPage} = props;
    const AddOrEdit = (e:any) => {
        setPage(2);
    }

    return (
        <div>
            <Card>
                <Image src="BEASTARS_logo.svg.png" width="200" height="200" onClick={(e) => AddOrEdit(e)}/>
                <h1> STATUS : รอตรวจน้าาาาาา </h1>
            </Card>
        </div>
    );
}
export default DynamicDisplay;