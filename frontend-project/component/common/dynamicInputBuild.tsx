import { Control } from "react-hook-form";
import InputNumberField from "./input/inputNumber";
import { DynamicInputItem } from "./interface";
import { InputNumberProps } from "primereact/inputnumber";
import InputTextArea from "./input/inputTextArea";

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
        if(field.type == "text"){
            return <InputTextArea
                control={control}
                controllerName={field.fieldID}
                {...field.inputTextProps}
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