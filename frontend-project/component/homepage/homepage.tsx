import DynamicDisplay from "../common/dynamicDisplay";
import HomepagePanelShow from "./panelShow";
import Profile from "../common/profile";
import { useEffect, useState } from "react";
import PanelReportVessel from "../add/panelReportVessel";
import { VesselService } from "./../../services/vessel.service";
import { VesselForm } from "../common/interface";
import PanelShowVessel from "../add/panelShowVessel";
import { userAgent } from "next/server";

interface HomePageProps {}
const HomePageLayout = (props: HomePageProps) => {
  const {} = HomePageLayout;
  const [page, setPage] = useState(1);
  const [vesselList,setVesselList] = useState<VesselForm[]>([]);
  const [showPosition, setShowPosition] = useState();
  const [vesselSelected, setVesselSelected] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const vesselService = new VesselService();
  
  useEffect(() => {
    async function fetchData(){
      const user = JSON.parse(localStorage.getItem("user"));
      const vessel = await vesselService.getDataVessel(user.userId);
      setVesselList(vessel.data);
      setShowPosition(user.positionId);
    }
    fetchData();
  },[]);

  return (
    <>
      <Profile />
      {page == 1 && (
        <div>
          <h1>ประวัติแบบฟอร์มเรือ</h1>
          <HomepagePanelShow positionId={showPosition!} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
            <DynamicDisplay setPage={setPage} data={vesselList} setVesselSelected={setVesselSelected} activeIndex={activeIndex}/>
          </HomepagePanelShow>
        </div>
      )}
      {page == 2 && (showPosition == 1) && (
        <div>
            <PanelReportVessel setPage={setPage} vesselSelected={vesselSelected} />
        </div>
      )}
      {page == 3 && (showPosition == 2 || showPosition == 3 || showPosition == 4 || showPosition == 5) && 
        <div>
          <PanelShowVessel setPage={setPage} vesselSelected={vesselSelected}/>
        </div>
      }
    </>
  );
};
export default HomePageLayout;
