import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import styles from '../../styles/Profile.module.css'
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface ProfileProps{
    setPage: Dispatch<SetStateAction<number>>;
}
const Profile = (props: ProfileProps) => {
    const {setPage} = props;
    const router = useRouter();
    const [user,setUser] = useState();
    const GoBack = () => {
        router.push("/");
    };
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("user"));
        setUser(data);
    },[])
    
    const OnClickLogVessel = (e:any) => {
        e.preventDefault();
        setPage(4);
    }
    
    const OnClickStatusVessel = (e:any) =>{
        e.preventDefault(e);
        setPage(5);
    }

    const OnClickUser = (e:any) => {
        e.preventDefault(e);
        setPage(6);
    }

    return (
        <>
        <div className={styles.header}>
            <div className={styles["innerHeader"]}>
                <div className={styles["front"]}>
                <Image src={process.env.NEXT_PUBLIC_IMAGE} alt={process.env.REACT_APP_IMAGE} width="100" height="100"/>
                {(user?.positionId == 4 || user?.positionId == 5 )  && (
                <Button className={styles["text-front"]} onClick={OnClickLogVessel} label="ประวัติส่งข้อมูล"/>
                // <h3 className={styles["text-front"]} onClick={OnClickLogVessel}>ประวัติส่งข้อมูล</h3>
                )}
                {(user?.positionId == 5) && (
                    <Button className={styles["text-front"]} onClick={OnClickStatusVessel} label="แก้ไขสถานะเรือ"/>
                )}
                {(user?.positionId == 5) && (
                    <Button className={styles["text-front"]} onClick={OnClickUser} label="กำลัง(ลุง)พลเรือ" />
                )}
   
                </div>
                <div className={styles["back"]}>
                <h3 className={styles["text-back"]}>ระบบการส่งข้อมูลเรือตรวจอ่าว กองเรือตรวจอ่าว</h3>

                </div>
            </div>
            <div className={styles.profilePosition}>
                <div className={styles.border}>
                    <Image className={styles["image"]} src={`data:image/jpeg;base64,${user?.userPhoto}`} alt={process.env.REACT_APP_IMAGE} width="100" height="100"/>
                    <div>
                        <h3 className={styles.profileText}>{user?.name}</h3>
                        <h3 className={styles.profileText}> {user?.positionName }</h3>
                    </div>
                    <div className={styles.button}>
                        <Button className="p-button-danger" icon="pi pi-sign-out" onClick={GoBack} />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Profile;