import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { DynamicInputItem, VesselForm } from "../common/interface";
interface PopupLeftResourcePageProps {
  selectedVessel: VesselForm;
}

export const PopupLeftResourcePage = (props: PopupLeftResourcePageProps) => {
  const { selectedVessel } = props;

  const displayData = [
    {
      diesel: selectedVessel?.leftOfDiesel,
      benzine: selectedVessel?.leftOfBenzine,
      gadinia: selectedVessel?.leftOfGadinia,
      tellus: selectedVessel?.leftOfTellus,
      freshwater: selectedVessel?.leftOfFreshWater,
    },
  ];
  return (
    <>
      <h2>{`เรือ: ${selectedVessel?.vesName}`}</h2>
      <DataTable showGridlines value={displayData}>
        <Column header="ดีเซล (กิโลลิตร)" align={"center"} field="diesel" />
        <Column header="เบนซิน (ลิตร)" align={"center"} field="benzine" />
        <Column header="กลาดิเนีย (ลิตร)" align={"center"} field="gadinia" />
        <Column header="เทลลัส (ลิตร)" align={"center"} field="tellus" />
        <Column header="น้ำจืด (ตัน)" align={"center"} field="freshwater" />
      </DataTable>
    </>
  );
};
