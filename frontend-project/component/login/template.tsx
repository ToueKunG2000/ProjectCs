import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import styles from '../../styles/Login.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react';


const LayoutLogin = () => {
    const router = useRouter();
    const GoToHome = () => {
        router.push("/homepage");
    }

    return (
        <>  
        <div className={styles.div}>
            <div className='flex justify-content-center p-2'>
            <Image src="BEASTARS_logo.svg.png" width='200' height='100'/>
            </div>
            <div className='flex justify-content-center p-2'>
                <label>Username : </label>
                <InputText />
            </div>
            <div className='flex justify-content-center p-2'>
                <label>Password : </label>
                <InputText />
            </div>
            <div className='flex justify-content-center'>
            <Button
                label='Login'
                className={styles.login}
                onClick={GoToHome}
            />
            </div>
        </div>
        </>
    );
}
export default LayoutLogin;