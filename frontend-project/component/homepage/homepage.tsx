import { useRouter } from "next/router";
import { Button } from "primereact/button";
import Profile from "../common/profile";
import styles from '../../styles/Homepage.module.css'
import PanelShow from "./PanelShow";


const HomePageLayout = () => {
  const router = useRouter();
  const GoBack = () => {
    router.push("/");
  };
  return (
    <>
      <Profile />
      <h1>ประวัติแบบฟอร์มเรือ</h1>
      <PanelShow />
      <div>
        <Button label="Go Back" onClick={GoBack} />
      </div>
    </>
  );
};
export default HomePageLayout;
