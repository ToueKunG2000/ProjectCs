import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import styles from '../../styles/Profile.module.css'

const Profile = () => {

    const router = useRouter();
    const GoBack = () => {
        router.push("/");
    };
    
    return (
        <>
            <div className={styles.right}>
                <div className={styles.border}>
                    <Image className={styles.img} src="BEASTARS_logo.svg.png" width="100" height="100"/>
                    <div className={styles.text}>
                        <h1>ต้นกลโง่ๆ</h1>
                        <h1> ลุงตู่ </h1>
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