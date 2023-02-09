import { InputNumberProps } from "primereact/inputnumber";
import { InputTextProps } from "primereact/inputtext";
import { InputTextareaProps } from "primereact/inputtextarea";
import { DropdownProps } from "primereact/dropdown";
import { RegisterOptions, DeepMap, FieldError } from "react-hook-form";

export interface FieldProps {
  children?: React.ReactNode;
  label?: string;
  fieldID?: string;
  isRequired?: boolean;
}
export interface DynamicInputItem {
  labelClassName?: string;
  fieldClassName?: string;
  inputClassName?: string;
  isView?: boolean;
  isChecked?: boolean;
  suffix?: string;
  fieldID?: any;
  label?: string;
  placeholder?: string;
  data?: any;
  options?: any[];
  isRequired?: boolean;
  inputTextProps?: InputTextProps;
  inputDropdownProps?: DropdownProps;
  inputTextAreaProps?: InputTextareaProps;
  inputNumberProps?: InputNumberProps;
  rules?: Omit<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  errors?: DeepMap<any, FieldError>;
  type:
    | "label"
    | "text"
    | "textarea"
    | "password"
    | "number"
    | "dropdown"
    | "fraction";
}

export interface DynamicInputFields extends FieldProps {
  dynamicInputItems: DynamicInputItem[];
  control?: any;
}

export interface UserForm {
  password: string;
  positionId: number;
  vesId: number;
  userName: string;
  userId: number;
  positionName: string;
}

export interface UpdateForm {
  vesId: number;
  currentPosition: number;
  counsel?: string;
}

export interface CheckLogMonthYearForm {
  monthYear: string;
  vesId?: number;
  vesNameTh?: string;
}

export interface VesselForm {
  vesId: number;
  vesNameTh: string;
  bigMachineNum?: number;
  electricMachineNum?: number;
  bigMachineUsed: number;
  electricMachineUsed: number;
  airConditioner: number;
  airCompressor: number;
  freezer: number;
  shipEngine: number;
  pump: number;
  rudder: number;
  waterPurifier: number;
  dieselOilSeparator: number;
  gear: number;
  getOfDiesel: number;
  getOfBenzine: number;
  getOfGadinia: number;
  getOfTellus: number;
  getOfFreshWater: number;
  giveOfDiesel: number;
  giveOfBenzine: number;
  giveOfGadinia: number;
  giveOfTellus: number;
  giveOfFreshWater: number;
  monthYear: string;
  counsel?: string;
  currentPosition: number;
  usedOfDiesel: number;
  usedOfBenzine: number;
  usedOfGadinia: number;
  usedOfTellus: number;
  usedOfFreshWater: number;
  leftOfDiesel: number;
  leftOfBenzine: number;
  leftOfGadinia: number;
  leftOfTellus: number;
  leftOfFreshWater: number;
  vesStatus: number;
  nameUser?: string;
}

export interface VesselStatus{
  vesStatus: number;
  vesId: number;
  name?: string;
  vesNameTh: string;
} 
