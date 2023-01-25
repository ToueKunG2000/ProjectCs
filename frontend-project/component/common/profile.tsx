import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { env } from "process";
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
            <div className={styles.right}>
                <div className={styles.border}>
                    <Image className={styles.img} src={process.env.NEXT_PUBLIC_IMAGE} alt={process.env.REACT_APP_IMAGE} width="100" height="100"/>
                    <div className={styles.text}>
                        <h2>{user?.userName}</h2>
                        <h2> {user?.positionName }</h2>
                    </div>
                    <div className={styles.button}>
                        <Button className="p-button-danger" icon="pi pi-sign-out" onClick={GoBack} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Profile;