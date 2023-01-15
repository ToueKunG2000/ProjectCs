import { InputNumberProps } from "primereact/inputnumber";
import { InputTextProps } from "primereact/inputtext";
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
  fieldID: any;
  label?: string;
  placeholder?: string;
  data?: any[];
  options?: any;
  isRequired?: boolean;
  inputTextProps?: InputTextProps;
  inputNumberProps?: InputNumberProps;
  rules?: Omit<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  errors: DeepMap<any, FieldError>;
  type:
    | "label"
    | "text"
    | "password"
    | "number"
}

export interface DynamicInputFields extends FieldProps {
  dynamicInputItems: DynamicInputItem[];
  control: any;
}