import DynamicDisplay from "../common/dynamicDisplay";
import HomepagePanelShow from "./panelShow";
import Profile from "../common/profile";
import { useState } from "react";
import { Button } from "primereact/button";
import AddPanelShow from "../add/panelShow";

interface HomePageProps {}
const HomePageLayout = (props: HomePageProps) => {
  const {} = HomePageLayout;
  const [page, setPage] = useState(1);
  return (
    <>
      <Profile />
      {page == 1 && (
        <div>
          <h1>ประวัติแบบฟอร์มเรือ</h1>
          <HomepagePanelShow header={"เรือที่กรอก"}>
            <DynamicDisplay setPage={setPage}/>
          </HomepagePanelShow>
        </div>
      )}
      {page == 2 && (
        <div>
            <AddPanelShow />
        </div>
      )}
    </>
  );
};
export default HomePageLayout;
