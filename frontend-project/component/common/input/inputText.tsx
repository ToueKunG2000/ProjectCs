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
    const {control, rules, controllerName, ...inputTextProps} = props;

    return (
        <>
            <Controller 
                defaultValue=""
                rules={rules}
                name={controllerName} control={control} render={({field,fieldState}) => (
                    <>
                    {fieldState.error && <label id={field.name} className="required p-4">{fieldState.error.message}</label>}
                    <InputText
                        value={field.value}
                        className={fieldState.error == undefined ?'':'invalid'}
                        onChange={(e) => field.onChange(e.target.value)}
                        {...inputTextProps}
                    />
                    </>
                )}
            />
        </>
    );

}
export default InputTextField;