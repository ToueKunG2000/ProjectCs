import { Page, View, Text } from "@react-pdf/renderer";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React from "react";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { VesselServices } from "../../services/vessel.service";
import DynamicHorizonInput from "../common/dynamicHorizonInput";
import {
  CheckLogMonthYearForm,
  DynamicInputItem,
  VesselForm,
} from "../common/interface";
import {PDFView} from "../common/pdf/pdf";
import PopupPage from "../common/popupPage";
import PopupShowLogVessel from "./PopupShowLogVessel";


interface ShowLogVesselProps{
  setPage: Dispatch<SetStateAction<number>>;
}

const ShowLogVessel = (props: ShowLogVesselProps) => {
  const {setPage} = props;
  const [isDownload,setIsDownload]= useState(false);
  const vesselService = new VesselServices();
  const [logVessel, setLogVessel] = useState<VesselForm[]>([]);
  const [request, setRequest] = useState<CheckLogMonthYearForm>();
  const [vesselDropdown,setVesselDropdown] = useState<any[]>([]);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectLogVessel, setSelectLogVessel] = useState<VesselForm>();
  const [vesselLog, setVesselLog] = useState<VesselForm>();
  const dateNow = new Date();

  const {
    control,
    watch,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
    reset,
  } = useForm<VesselForm>();

  const ref = React.createRef();

  useMemo(() => {
    setRequest({ monthYear:"", vesId:0 });
  }, []);

  useEffect(() => {
    const getDataLog = () => {
        vesselService.getDropdownVessel().then((res) => {
            console.log(res.data);
            setVesselDropdown(res.data);
        });
        vesselService.getLogVesselList(request!).then((res) => {
            setLogVessel(res.data);
        });
    };

    getDataLog();
  }, [request]);

  const OnGoBack = () => {
    setPage(1);
  }

  const ButtonPanel = (data: any) => {
    return (
      <div className="flex justify-content-center">
        <Button icon="pi pi-search" onClick={()=>onShowPopup(data)} />
        <Button icon="pi pi-download" onClick={(e) => {PDFLoader(data)}} />
      </div>
    );
  };

  const dynamicInput: DynamicInputItem[] = [
    { label: "เดือน/ปี", type: "text", fieldID: "monthYear", placeholder:"MM/yyyy" },
    { label: "ชื่อเรือ", type: "dropdown", options: vesselDropdown, fieldID: "vesId" },
  ];

  const onSubmit = (e: any) => {
    setRequest(e);
  };

  const onShowPopup = (data:any) => {
    setVisiblePopup(true);
    setSelectLogVessel(data);
  }


  const PDFLoader = (data:any) =>{
    setIsDownload(true);
    vesselService.getLogVessel(data).then((res)=>{
      setVesselLog(res.data)
    })
  }


  return (
    <>
      <>
        <PopupPage
        widthLeng={55}
        setVisible={setVisiblePopup}
        visible={visiblePopup}
        header="ข้อมูลเรือ"
        >
          <PopupShowLogVessel request={selectLogVessel!}></PopupShowLogVessel>
        </PopupPage>
        <PopupPage
          widthLeng={55}
          setVisible={setIsDownload}
          visible={isDownload}
          header="Download Report"
        >
          <div className="flex align-items-center justify-content-between">
            <Button label="ย้อนกลับ" onClick={(e)=>setIsDownload(false)} />
            <PDFView data={vesselLog!} />
          </div>
        </PopupPage>
        <Button className={"p-button-danger"} label="ย้อนกลับ" onClick={OnGoBack}/>
        <div className="flex justify-content-center">
          <form>
            <DynamicHorizonInput
              dynamicInputItems={dynamicInput}
              control={control}
            />
            <Button
              label="ค้นหา"
              onClick={handleSubmit(onSubmit)}
              icon="pi pi-search"
              className="p-button-secondary"
            />
          </form>
        </div>
        <div>
          <DataTable value={logVessel}>
            <Column style={{ paddingLeft: '100px'}} header="เรือ" field="vesName" />
            <Column align={"center"} header="เดือน" field="monthYear" />
            <Column body={(e) => ButtonPanel(e)} />
          </DataTable>
        </div>
      </>
    </>
  );
};
export default ShowLogVessel;
