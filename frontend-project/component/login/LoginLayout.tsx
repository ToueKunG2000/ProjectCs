import { Button } from "primereact/button";
import { Image } from "primereact/image";
import styles from "../../styles/Login.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import PopupPage from "../common/popupPage";
import { LoginServices } from "./../../services/login.service";
import { DynamicInputItem, LoginForm, UserForm } from "../common/interface";
import { useForm } from "react-hook-form";
import DynamicHorizonInput from "./../common/dynamicHorizonInput";

interface User {
  username: string;
  password: string;
}
const LayoutLogin = () => {
  const router = useRouter();
  const service = new LoginServices();
  const [user, setUser] = useState<UserForm>();
  const [popupVisible, setPopupVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const CheckLogin = (e: LoginForm) => {
    service.checkUser(e.username, e.password).then((res) => {
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      GoToHome();
    }).catch((err) => {
      setPopupVisible(true);
    });
  };

  const dynamicInput: DynamicInputItem[] = [
    {
      type: "text",
      fieldID: "username",
      label: "Username",
      errors: errors["username"],
      inputClassName:"login",
    },
    {
      type: "password",
      fieldID: "password",
      inputClassName:"login",
      label: "Password",
      errors: errors["password"],
      inputPasswordProps:{
        feedback:false
      }
    },
  ];

  const GoToHome = () => {
    router.push("/homepage");
  };

  return (
    <>
      <form onSubmit={handleSubmit(CheckLogin)}>
        <div className={styles["page"]}>
          <PopupPage
            header="Warning"
            message="Your username or password incorrect"
            setVisible={setPopupVisible}
            visible={popupVisible}
          />
          <div className="flex justify-content-center p-2">
            <Image
              src={process.env.NEXT_PUBLIC_IMAGE}
              width="300"
              height="400"
            />
          </div>
          <DynamicHorizonInput 
            dynamicInputItems={dynamicInput}
            control={control}
          />
          <div className="flex justify-content-center">
            <Button
              type="submit"
              label="Login"
              className={styles["button"]}
            />
          </div>
        </div>
      </form>
    </>
  );
};
export default LayoutLogin;
