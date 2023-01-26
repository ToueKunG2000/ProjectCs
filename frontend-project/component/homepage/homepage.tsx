import DynamicDisplay from "../common/dynamicDisplay";
import HomepagePanelShow from "./panelShow";
import Profile from "../common/profile";
import { useEffect, useState } from "react";
import PanelReportVessel from "../add/panelReportVessel";
import { VesselService } from "./../../services/vessel.service";
import { VesselForm } from "../common/interface";
import PanelShowVessel from "../add/panelShowVessel";

interface HomePageProps {}
const HomePageLayout = (props: HomePageProps) => {
  const {} = HomePageLayout;
  const [page, setPage] = useState(1);
  const [vesselList,setVesselList] = useState([]);
  const [showPosition, setShowPosition] = useState();
  const vesselService = new VesselService();
  const [vesselSelected, setVesselSelected] = useState<VesselForm>();
  
  useEffect(() => {
    async function fetchData(){
      const data = JSON.parse(localStorage.getItem("user"));
      const vessel = await vesselService.getDataVessel(data.userId);
      setVesselList(vessel.data);
      setShowPosition(data.positionId)
      localStorage.setItem("vesData",JSON.stringify(vessel.data));
    }
    fetchData();
  },[]);

  return (
    <>
      <Profile />
      {page == 1 && (
        <div>
          <h1>ประวัติแบบฟอร์มเรือ</h1>
          <HomepagePanelShow header={"เรือที่กรอก"}>
            <DynamicDisplay setPage={setPage} data={vesselList} setVesselSelected={setVesselSelected}/>
          </HomepagePanelShow>
        </div>
      )}
      {page == 2 && (showPosition == 1 || showPosition == 2 || showPosition == 3) && (
        <div>
            <PanelReportVessel setPage={setPage} defaultValues={vesselSelected}/>
        </div>
      )}
      {page == 3 && (showPosition == 2 || showPosition == 3 || showPosition == 4 || showPosition == 5) && 
        <div>
          <PanelShowVessel setPage={setPage} defaultValues={vesselSelected} />
        </div>
      }
    </>
  );
};
export default HomePageLayout;
