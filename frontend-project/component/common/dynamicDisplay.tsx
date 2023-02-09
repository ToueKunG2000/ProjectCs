import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { SetStateAction, Dispatch, useEffect, useState } from "react";
import styles from "../../styles/DynamicDisplay.module.css";
import { VesselForm } from "./interface";
import { VesselService } from "./../../services/vessel.service";
import PopupPage from "./popupPage";
import { PopupShowStatus } from "../disableVessel/PopupShowStatus";

interface DynamicDisplayProps {
  setPage: Dispatch<SetStateAction<number>>;
  data: VesselForm[];
  setVesselSelected: Dispatch<SetStateAction<number>>;
  activeIndex: number;
  isShowStatus?: boolean;
}

const DynamicDisplay = (props: DynamicDisplayProps) => {
  const { setPage, data, setVesselSelected, activeIndex, isShowStatus } = props;
  const [showData, setShowData] = useState<VesselForm[]>([]);
  const [isShow, setIsShow] = useState(false);
  const vesselService = new VesselService();
  const [logVessel,setLogVessel] = useState([]);
  const [showVesselStatus,setShowVesselStatus] = useState(false);
  const [vesselStatus,setVesselStatus] = useState<VesselForm>();
  const user = JSON.parse(localStorage.getItem("user"));
  const dateNow = new Date();

  const AddOrEdit = (e: any, vessel: VesselForm) => {
    e.preventDefault();
    if (user.positionId == 1) {
        setPage(2);
        setVesselSelected(vessel.vesId);
    } else if(vessel.monthYear === null && !logVessel.includes(vessel.vesId)) {
        setIsShow(true);
    }
    else{
        setPage(3);
        setVesselSelected(vessel.vesId);
    }
  };

  const PopupStatus = (e: any, vessel: VesselForm) => {
    e.preventDefault();
    setShowVesselStatus(true);
    setVesselStatus(vessel);
  };

  useEffect(() => {
    const SetData = () => {
        vesselService.checkMonthYear(dateNow.toLocaleString("th-TH", { month: "2-digit", year: "numeric" })).then((res)=>{
            setLogVessel(res.data);
        });
      if(activeIndex == 0){
          setShowData(data);
      }
      else if(activeIndex == 1){
        vesselService.checkMonthYear(dateNow.toLocaleString("th-TH", { month: "2-digit", year: "numeric" })).then((res) => {
           const filterData = data.filter((vessel) => {
                return ( !res.data.includes(vessel.vesId) && vessel.monthYear === null && vessel.vesStatus == 1);
           })
           setShowData(filterData);
        });
      }
      else if(activeIndex == 2){
        const filterData = data.filter((vessel) => {
            return ( vessel.vesStatus == 1 && vessel.monthYear !== null)
        })
        setShowData(filterData);
      }
      else if(activeIndex == 3){
        vesselService.checkMonthYear(dateNow.toLocaleString("th-TH", { month: "2-digit", year: "numeric" })).then((res) => {
            const filterData = data.filter((vessel) => {
                 return ( res.data.includes(vessel.vesId) && vessel.monthYear === null && vessel.vesStatus == 1);
            })
            setShowData(filterData);
         });
      }
    };
    SetData();
  }, [activeIndex]);

  return (
    <div className="grid">
      <PopupPage setVisible={setIsShow} visible={isShow} header="" message="แม่งไม่ส่งข้อมูล ไอเวร" />
      <PopupPage
        header="สถานะของเรือ"
        setVisible={setShowVesselStatus}
        visible={showVesselStatus} 
      >
        <PopupShowStatus selectedVessel={vesselStatus!}/>
      </PopupPage>

      {isShowStatus == false && showData.map((vessel) => {
        return (
          <>
            {vessel.vesStatus == 1 && (
              <div className="flex justify-content-center col-12 md:col-6 lg:col-4">
                <Card
                  className={"card-display"}
                  onClick={(e) => AddOrEdit(e, vessel)}
                >
                  <Image
                    className={styles.img}
                    alt="profile"
                    src={process.env.NEXT_PUBLIC_IMAGE}
                    width="200"
                    height="200"
                  />
                  <h2>{vessel.vesNameTh}</h2>
                  <h3>
                    {vessel.currentPosition == 1
                      ? vessel.monthYear === null
                      ?  logVessel.includes(vessel?.vesId) 
                      ? "ส่งสำเร็จแล้วววววววววววว"
                      : "ยังไม่ทำไอสัส"
                      : "รอ แก้ไข จากทหารช่าง"
                      : vessel.currentPosition == 2
                      ? "รอ ต้นกล ตรวจ"
                      : vessel.currentPosition == 3
                      ? "รอ ผู้บังคับการเรือ ตรวจ"
                      : vessel.currentPosition == 4
                      ? "รอ ผอ. การช่าง ตรวจ"
                      : "รอ ผบ.กตอ ตรวจ"
                    }
                  </h3>
                </Card>
              </div>
            )}
            {vessel.vesStatus == 2 && (
              <div className="flex justify-content-center col-12 md:col-6 lg:col-4">
                <Card className={"card-not-active"}>
                  <Image
                    className={styles.grayimg}
                    alt="profile"
                    src={process.env.NEXT_PUBLIC_IMAGE}
                    width="200"
                    height="200"
                  />
                  <h2>{vessel.vesNameTh}</h2>
                  <h3>{"ซ่อมบำรุงอยู่โว้ยยยย"}</h3>
                </Card>
              </div>
            )}
          </>
        );
      })}
      {isShowStatus == true && data.map((vessel) => {
        return (
          <>  
          <div className="flex justify-content-center col-12 md:col-6 lg:col-4">
            <Card
              className={"card-display"}
              onClick={(e) => PopupStatus(e, vessel)}
            >
              <Image
                className={styles["img"]}
                alt="profile"
                src={process.env.NEXT_PUBLIC_IMAGE}
                width="200"
                height="200"
              />
              <h2>{vessel.vesNameTh}</h2>
              <h3>{`สถานะ ${vessel.vesStatus == 1?"กำลังใช้งาน":"ซ่อมบำรุง"}`}</h3>
            </Card>
          </div>
          </>
        );
      })

      }
    </div>
  );
};
export default DynamicDisplay;
