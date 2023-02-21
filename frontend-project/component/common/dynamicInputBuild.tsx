import { Control } from "react-hook-form";
import InputNumberField from "./input/inputNumber";
import { DynamicInputItem } from "./interface";
import { InputNumberProps } from "primereact/inputnumber";
import InputTextArea from "./input/inputTextArea";
import InputTextField from "./input/inputText";
import InputDropdown from "./input/inputDropdown";
import { InputUpload } from "./input/inputUpload";

interface InputBuilderProps{
    field: DynamicInputItem;
    control: Control<any>;
}

const DynamicInputBuild = (props: InputBuilderProps) => {
    const {control, field} = props;

    const InputBuilderSwitch = (
        field: DynamicInputItem,
        control: Control<any>,
    ) => {
        if(field.type == "number"){
            return <InputNumberField 
                control={control}
                fraction={0}
                rules={field.rules}
                controllerName={field.fieldID}
                {...field.inputNumberProps}
            />
        }
        if(field.type == "fraction"){
            return <InputNumberField 
                control={control}
                fraction={2}
                rules={field.rules}
                controllerName={field.fieldID}
                {...field.inputNumberProps}
            />
        }
        if(field.type == "label"){
            return (
                <>
                    <label className={field.inputClassName} >{field.data}</label>
                    { field.tail && <h1 className={field.inputClassName} >{`ส่งกลับโดย: ${field.tail}`}</h1>}
                </>
            )
        }
        if(field.type == "textarea"){
            return <InputTextArea
                control={control}
                rules={field.rules}
                data={field.data}
                controllerName={field.fieldID}
                {...field.inputTextAreaProps}
            />
        }
        if(field.type == "text"){
            return <InputTextField
                control={control}
                rules={field.rules}
                controllerName={field.fieldID}
                placeholder={field.placeholder}
                {...field.inputTextProps}
            />
        }
        if(field.type == "dropdown"){
            return <InputDropdown 
                control={control}
                rules={field.rules}
                data={field.options}
                controllerName={field.fieldID}
                {...field.inputDropdownProps}
            />
        }
        if(field.type == "upload"){
            return <InputUpload 
                control={control}
                rules={field.rules}
                setValue={field.setValue}
                controllerName={field.fieldID}
                {...field.inputUpload}
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