import { InputText, InputTextProps } from "primereact/inputtext";
import { Control, Controller, RegisterOptions } from "react-hook-form";
interface InputTextFieldProps extends InputTextProps {
    controllerName: string;
    control: Control<any>;
    rules?: Omit<
      RegisterOptions,
      "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >;
}

const InputTextField = (props: InputTextFieldProps) => {
    const {control, controllerName, ...inputTextProps} = props;
    return (
        <>
            <Controller 
                defaultValue=""
                name={controllerName} control={control} render={({field}) => (
                    <InputText
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        {...inputTextProps}
                    />
                )}
            />
        </>
    );

}
export default InputTextField;