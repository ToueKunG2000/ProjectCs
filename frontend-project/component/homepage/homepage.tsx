import DynamicDisplay from "../common/dynamicDisplay";
import HomepagePanelShow from "./panelShow";
import Profile from "../common/profile";
import { useEffect, useState } from "react";
import AddPanelShow from "../add/panelShow";
import { VesselService } from "./../../services/vessel.service";

interface HomePageProps {}
const HomePageLayout = (props: HomePageProps) => {
  const {} = HomePageLayout;
  const [page, setPage] = useState(1);
  const [vesselList,setVesselList] = useState([]);
  const vesselService = new VesselService();
  const [vesselSelected, setVesselSelected] = useState();

  useEffect(() => {
    async function fetchData(){
      const data = await vesselService.getDataVessel(2);
      setVesselList(data.data);
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
      {page == 2 && (
        <div>
            <AddPanelShow setPage={setPage} data={vesselSelected}/>
        </div>
      )}
    </>
  );
};
export default HomePageLayout;
