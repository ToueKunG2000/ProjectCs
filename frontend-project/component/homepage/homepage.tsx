import DynamicDisplay from "../common/dynamicDisplay";
import HomepagePanelShow from "./panelShow";
import Profile from "../common/profile";
import { useEffect, useState } from "react";
import AddPanelShow from "../add/panelShow";
import { VesselService } from "./../../services/vessel.service";
import { VesselForm } from "../common/interface";

interface HomePageProps {}
const HomePageLayout = (props: HomePageProps) => {
  const {} = HomePageLayout;
  const [page, setPage] = useState(1);
  const [vesselList,setVesselList] = useState([]);
  const [user, setUser] = useState();
  const vesselService = new VesselService();
  const [vesselSelected, setVesselSelected] = useState<VesselForm>();
  
  useEffect(() => {
    async function fetchData(){
      const data = JSON.parse(localStorage.getItem("user"));
      const vessel = await vesselService.getDataVessel(data.userId);
      setVesselList(vessel.data);
      localStorage.setItem("vesData",JSON.stringify(vessel.data));
    }
    fetchData();
  },[vesselList]);

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
      {page == 2 && (
        <div>
            <AddPanelShow setPage={setPage} defaultValues={vesselSelected}/>
        </div>
      )}
    </>
  );
};
export default HomePageLayout;
