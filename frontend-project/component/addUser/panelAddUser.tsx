import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { UserServices } from "../../services/user.service";
import DynamicHorizonInput from "../common/dynamicHorizonInput";
import { AddUserForm, DynamicInputItem, PanelProps } from "../common/interface";

interface PanelAddUserProps extends PanelProps {}
export const PanelAddUser = (props: PanelAddUserProps) => {
  const userService = new UserServices();
  const { setPage } = props;
  const { control, formState:{errors}, handleSubmit, setValue } = useForm<AddUserForm>();

  const positionDropdown = [
    { value: 0, label: "ไม่ระบุ"},
    { value: 1, label: "ทหารช่าง" },
    { value: 2, label: "ต้นกล" },
    { value: 3, label: "ผู้บังคับการ" },
  ];

  const dynamicInput: DynamicInputItem[] = [
    {
      type: "text",
      label: "Username",
      fieldID: "username",
      errors: errors["username"],
      inputClassName:"space-bet",
      isRequired: true,
      rules:{
        required: {value: true ,message:"กรุณาระบุชื่อผู้ใช้"},
        minLength: {value:1, message:""},
      },
      inputTextProps:{
        required: true
      },
    },
    {
      type: "text",
      label: "password",
      fieldID: "password",
      inputClassName:"space-bet",
      errors: errors["password"],
      isRequired: true,
      rules:{
        required: {value: true ,message:"กรุณาระบุรหัสผ่าน"},
        minLength: {value:1, message:""},
      },
    },
    {
      type: "text",
      label: "ชื่อ",
      fieldID: "firstName",
      inputClassName:"space-bet",
      errors: errors["firstName"],
      isRequired: true,
      rules:{
        required: {value: true ,message:"กรุณาระบุชื่อ"},
        minLength: {value:1, message:""},
      },
    },
    {
      type: "text",
      label: "นามสกุล",
      fieldID: "lastName",
      inputClassName:"space-bet",
      errors: errors["lastName"],
      isRequired: true,
      rules:{
        required: {value: true ,message:"กรุณาระบุนามสกุล"},
        minLength: {value:1, message:""},
      },
    },
    {
      type: "dropdown",
      label: "ตำแหน่ง",
      fieldID: "positionId",
      inputClassName:"space-bet",
      errors: errors["positionId"],
      options: positionDropdown,
      isRequired: true,
      rules:{
        required: {value: true ,message:"กรุณาเลือกตำแหน่ง"},
        min: {value:1, message:"กรุณาเลือกตำแหน่ง"},
      },
      inputDropdownProps:{
        required: true
      }
    },
    {
      type: "upload",
      label: "อัพโหลดรูป",
      inputClassName:"space-bet",
      fieldID: "userPhoto",
      errors: errors["userPhoto"],
      isRequired: true,
      rules:{
        required: {value: true ,message:"กรุณากดปุ่มอัพโหลดรูปภาพ"},
        minLength: {value:1, message:""},
      },
      setValue: setValue,
    },
  ];

  const onSubmit = (e: any) => {
    userService.addUser(e);
    window.location.reload();
  };

  const onGoBack = (e:any) => {
    e.preventDefault();
    setPage(6);
  }
  return (
    <>
    <Button label="ย้อนกลับ" className="p-button-danger" onClick={(e)=>onGoBack(e)} />
      <DynamicHorizonInput dynamicInputItems={dynamicInput} control={control} />
      <div className="flex justify-content-center">
      <Button
        label="ยืนยัน"
        className="p-button-success"
        onClick={handleSubmit(onSubmit)}
      />
      </div>
    </>
  );
};
