import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { VesselService } from "../../services/vessel.service";
import DynamicHorizonInput from "../common/dynamicHorizonInput";
import {
  CheckLogMonthYearForm,
  DynamicInputItem,
  VesselForm,
} from "../common/interface";

const ShowLogVessel = () => {
  const vesselService = new VesselService();
  const [logVessel, setLogVessel] = useState<VesselForm[]>([]);
  const [request, setRequest] = useState<CheckLogMonthYearForm>();
  const [vesselDropdown,setVesselDropdown] = useState<any[]>([]);

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

  useMemo(() => {
    setRequest({ monthYear:"", vesId:0 });
  }, []);

  useEffect(() => {
    const getDataLog = () => {
        vesselService.getDropdownVessel().then((res) => {
            console.log(res.data);
            setVesselDropdown(res.data);
        });
        vesselService.getLogVesselList(request).then((res) => {
            setLogVessel(res.data);
        });
    };

    getDataLog();
  }, [request]);

  const ButtonPanel = (data: any) => {
    return (
      <>
        <Button icon="pi pi-search" onClick={(e) => console.log(data)} />
        <Button icon="pi pi-download" onClick={(e) => console.log(data)} />
      </>
    );
  };

  const dynamicInput: DynamicInputItem[] = [
    { label: "เดือน/ปี", type: "text", fieldID: "monthYear" },
    { label: "ชื่อเรือ", type: "dropdown", options: vesselDropdown, fieldID: "vesId" },
  ];

  const onSubmit = (e: any) => {
    setRequest(e);
  };

  return (
    <>
      <Button label="ย้อนกลับ" />
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
          <Column header="เรือ" field="vesNameTh" />
          <Column header="เดือน" field="monthYear" />
          <Column body={(e) => ButtonPanel(e)} />
        </DataTable>
      </div>
    </>
  );
};
export default ShowLogVessel;
