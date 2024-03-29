import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import styles from "../../styles/Login.module.css";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { UserServices } from "../../services/user.service";
import PopupPage from "../common/popupPage";
import { Password } from 'primereact/password';

interface User{
    username:string;
    password:string;
}
const LayoutLogin = () => {
  const router = useRouter();
  const service = new UserServices();
  const op = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const CheckLogin = async () => {
    const user = await service.checkUser(username,password)
    console.log(user);
    if(user != null){
      localStorage.setItem("user",JSON.stringify(user.data));
      GoToHome();
    }
    else{
      setPopupVisible(true)
    }
  };

  const GoToHome = () => {
    router.push("/homepage");
  };

  return (
    <>
      <div className={styles.div}>
        <PopupPage header="Warning" message="Your username or password incorrect" setVisible={setPopupVisible} visible={popupVisible}/>
        <div className="flex justify-content-center p-2">
          <Image src="BEASTARS_logo.svg.png" width="200" height="100" />
        </div>
        <div className="flex justify-content-center p-2">
          <label>Username : </label>
          <InputText
            placeholder="abc123"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex justify-content-center p-2">
          <label>Password : </label>
          <Password
            placeholder="123456"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            toggleMask
          />
        </div>
        <div className="flex justify-content-center">
          <Button
            type="submit"
            label="Login"
            className={styles.login}
            onClick={CheckLogin}
          />
        </div>
      </div>
    </>
  );
};
export default LayoutLogin;
