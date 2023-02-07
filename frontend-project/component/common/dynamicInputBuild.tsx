import { Control } from "react-hook-form";
import InputNumberField from "./input/inputNumber";
import { DynamicInputItem } from "./interface";
import { InputNumberProps } from "primereact/inputnumber";
import InputTextArea from "./input/inputTextArea";
import InputTextField from "./input/inputText";
import InputDropdown from "./input/inputDropdown";

interface InputBuilderProps{
    field: DynamicInputItem;
    control: Control<any>;
}

const DynamicInputBuild = (props: InputBuilderProps) => {
    const {control, field} = props;
    const InputBuilderSwitch = (
        field: DynamicInputItem,
        control: Control<any>
    ) => {
        if(field.type == "number"){
            return <InputNumberField 
                control={control}
                fraction={0}
                controllerName={field.fieldID}
                {...field.inputNumberProps}
            />
        }
        if(field.type == "fraction"){
            return <InputNumberField 
                control={control}
                fraction={2}
                controllerName={field.fieldID}
                {...field.inputNumberProps}
            />
        }
        if(field.type == "label"){
            return <label className={field.inputClassName} >{field.data}</label>
        }
        if(field.type == "textarea"){
            return <InputTextArea
                control={control}
                controllerName={field.fieldID}
                {...field.inputTextAreaProps}
            />
        }
        if(field.type == "text"){
            return <InputTextField
                control={control}
                controllerName={field.fieldID}
                placeholder={field.placeholder}
                {...field.inputTextProps}
            />
        }
        if(field.type == "dropdown"){
            return <InputDropdown 
                control={control}
                data={field.options}
                controllerName={field.fieldID}
                {...field.inputDropdownProps}
            />
        }
    }
    return (
        <>
            {InputBuilderSwitch(field,control)}
        </>
    );
}
export default DynamicInputBuild;