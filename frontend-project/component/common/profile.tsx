import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import styles from '../../styles/Profile.module.css'
import { useEffect, useState } from "react";

const Profile = () => {
    
    const router = useRouter();
    const [user,setUser] = useState();
    const GoBack = () => {
        router.push("/");
    };
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("user"));
        setUser(data);
    },[])
    
    return (
        <>
        <div className={styles.header}>
            <div className={styles.innerHeader}>
                <h3 className={styles.text}>ระบบการส่งข้อมูลเรือตรวจอ่าว กองเรือตรวจอ่าว</h3>
            </div>
            <div className={styles.profilePosition}>
                <div className={styles.border}>
                    <Image className={styles.img} src={process.env.NEXT_PUBLIC_IMAGE} alt={process.env.REACT_APP_IMAGE} width="100" height="100"/>
                    <div>
                        <h3 className={styles.profileText}>{user?.userName}</h3>
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