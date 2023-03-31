import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { SetStateAction, Dispatch, useEffect, useState } from "react";
import styles from "../../styles/DynamicDisplay.module.css";
import { AddEditVesselForm, UserForm, VesselForm } from "./interface";
import { VesselServices } from "./../../services/vessel.service";
import PopupPage from "./popupPage";
import { PopupShowStatus } from "../vesselManage/PopupShowStatus";
import { Button } from "primereact/button";
import { PopupLeftResourcePage } from "./../homepage/popupLeftResourcePage";
import { PopupUserStatus } from "../userManage/popupUserStatus";

interface DynamicDisplayProps {
  setPage: Dispatch<SetStateAction<number>>;
  dataVessel?: VesselForm[];
  dataUser?: UserForm[];
  setVesselSelected?: Dispatch<SetStateAction<number>>;
  activeIndex?: number;
  isShowStatus?: boolean;
  type: string;
}

const DynamicDisplay = (props: DynamicDisplayProps) => {
  const { type, setPage, dataUser,dataVessel , setVesselSelected, activeIndex, isShowStatus } = props;
  const [showData, setShowData] = useState<VesselForm[]>([]);
  const [isShow, setIsShow] = useState(false);
  const [showVesselStatus,setShowVesselStatus] = useState(false);
  const vesselService = new VesselServices();
  const [logVessel,setLogVessel] = useState([]);
  const [selectUser, setSelectUser] = useState<UserForm>();
  const [vesselStatus,setVesselStatus] = useState<VesselForm>();
  const [popupUser, setPopupUser] = useState(false);
  const [popupLeft, setPopupLeft] = useState(false);
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

  const OnClickShowLeftPopup = (e: any, vessel: VesselForm) => {
    e.preventDefault();
    setPopupLeft(true);
    setVesselStatus(vessel);
  }

  const OnClickPopupUser = (e: any, user: UserForm) => {
    e.preventDefault();
    setPopupUser(true);
    setSelectUser(user);
  }

  useEffect(() => {
    const SetData = () => {
        vesselService.checkMonthYear(dateNow.toLocaleString("th-TH", { month: "2-digit", year: "numeric" })).then((res)=>{
            setLogVessel(res.data);
        });
      if(activeIndex == 0){
          setShowData(dataVessel!);
      }
      else if(activeIndex == 1){
        vesselService.checkMonthYear(dateNow.toLocaleString("th-TH", { month: "2-digit", year: "numeric" })).then((res) => {
           const filterData = dataVessel.filter((vessel) => {
                return ( !res.data.includes(vessel.vesId) && vessel.monthYear === null && vessel.vesStatus == 1);
           })
           setShowData(filterData);
        });
      }
      else if(activeIndex == 2){
        const filterData = dataVessel.filter((vessel) => {
            return ( vessel.vesStatus == 1 && vessel.monthYear !== null)
        })
        setShowData(filterData);
      }
      else if(activeIndex == 3){
        vesselService.checkMonthYear(dateNow.toLocaleString("th-TH", { month: "2-digit", year: "numeric" })).then((res) => {
            const filterData = dataVessel.filter((vessel) => {
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
      <PopupPage setVisible={setIsShow} visible={isShow} header="" message="ทหารช่าง ยังไม่ได้ดำเนินการ" />
      <PopupPage
        header="สถานะของเรือ"
        setVisible={setShowVesselStatus}
        visible={showVesselStatus} 
      >
        <PopupShowStatus selectedVessel={vesselStatus!}/>
      </PopupPage>
      <PopupPage
        header="ทรัพยากรคงเหลือของเรือ"
        setVisible={setPopupLeft}
        visible={popupLeft} 
      >
        <PopupLeftResourcePage selectedVessel={vesselStatus!}/>
      </PopupPage>

      <PopupPage
        header="รายละเอียด"
        setVisible={setPopupUser}
        visible={popupUser}
      >
        <PopupUserStatus selectedUser={selectUser!}/>
      </PopupPage>

      {type.includes("vessel") && isShowStatus == false && showData.map((vessel) => {
        return (
          <>
            {vessel.vesStatus == 1 && (
              <div className="flex justify-content-center col-12 md:col-6 lg:col-4">
                <div className="flex flex-column justify-content-center align-items-center">
                <Card
                  className={"card-display"}
                  onClick={(e) => AddOrEdit(e, vessel)}
                >
                  <Image
                    className={styles.img}
                    alt="profile"
                    src={`data:image/jpeg;base64,${vessel?.vesPhoto}`}
                    width="200"
                    height="200"
                  />
                  <h2>{vessel.vesName}</h2>
                  <h2>
                    {vessel.currentPosition == 1
                      ? vessel.monthYear === null
                      ?  logVessel.includes(vessel?.vesId) 
                      ? "ส่งสำเร็จ"
                      : "ยังไม่ดำเนินการ"
                      : "รอ แก้ไข จากทหารช่าง"
                      : vessel.currentPosition == 2
                      ? "รอ ต้นกล ตรวจ"
                      : vessel.currentPosition == 3
                      ? "รอ ผู้บังคับการเรือ ตรวจ"
                      : vessel.currentPosition == 4
                      ? "รอ ผอ. การช่าง ตรวจ"
                      : "รอ ผบ.กตอ ตรวจ"
                    }
                  </h2>
                  <h2>{ vessel.monthYear == null
                  ? logVessel.includes(vessel?.vesId)
                  ? `รอบที่ ${dateNow.toLocaleString("th-TH", { month: "2-digit", year: "numeric" })}`
                  : `รอบที่ ${dateNow.toLocaleString("th-TH", { month: "2-digit", year: "numeric" })}`
                  : `รอบที่ ${vessel.monthYear}`
                  }</h2>
                </Card>
                { ( user?.positionId == 4 || user?.positionId == 5) &&  <Button className={styles["button"]} onClick={(e)=>OnClickShowLeftPopup(e,vessel)} label="ตรวจสอบค่าคงเหลือ" />
                }
                </div>
              </div>
            )}
            {vessel.vesStatus == 2 && (
              <div className="flex justify-content-center col-12 md:col-6 lg:col-4">
                <Card className={"card-not-active"}>
                  <Image
                    className={styles["grayimg"]}
                    alt="profile"
                    src={`data:image/jpeg;base64,${vessel?.vesPhoto}`}
                    width="200"
                    height="200"
                  />
                  <h2>{vessel.vesName}</h2>
                  <h3>{"ซ่อมบำรุง"}</h3>
                </Card>
              </div>
            )}
          </>
        );
      })}
      {type.includes("vessel") && isShowStatus == true && dataVessel.map((vessel) => {
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
                src={`data:image/jpeg;base64,${vessel?.vesPhoto}`}
                width="200"
                height="200"
              />
              <h2>{vessel.vesName}</h2>
              <h3>{`สถานะ ${vessel.vesStatus == 1?"กำลังใช้งาน":"ซ่อมบำรุง"}`}</h3>
            </Card>
          </div>
          </>
        );
      })

      }
      {type.includes("user") && dataUser?.map((user) => (
        <>
        <div className="flex justify-content-center col-12 md:col-6 lg:col-4">
            <Card
              className={"card-display"}
              onClick={(e)=>OnClickPopupUser(e,user)}
            >
              <Image
                className={styles["img"]}
                alt="profile"
                src={`data:image/jpeg;base64,${user?.userPhoto}`}
                width="200"
                height="200"
              />
              <h2>{user?.positionName}</h2>
              <h2>{user?.name}</h2>
              <h3>{`สถานะ ${user.userStatus == 1?"ปฏิบัติงาน":"ปลดประจำการ"}`}</h3>
            </Card>
          </div>
        </>
      ))}
    </div>
  );
};
export default DynamicDisplay;
