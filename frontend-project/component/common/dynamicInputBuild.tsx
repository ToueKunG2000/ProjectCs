import { Control } from "react-hook-form";
import InputNumberField from "./input/inputNumber";
import { DynamicInputItem } from "./interface";
import { InputNumberProps } from "primereact/inputnumber";

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
                controllerName={field.fieldID}
                {...field.inputNumberProps}
            />
        }
        if(field.type == "label"){
            return <label>{field.data}</label>
        }
    }
    return (
        <div>
            {InputBuilderSwitch(field,control)}
        </div>
    );
}
export default DynamicInputBuild;