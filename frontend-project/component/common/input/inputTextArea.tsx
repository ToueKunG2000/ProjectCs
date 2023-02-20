
import { InputTextarea, InputTextareaProps } from "primereact/inputtextarea";
import { Control, Controller, RegisterOptions } from "react-hook-form";

interface InputTextProps extends InputTextareaProps {
    controllerName: string;
    control: Control<any>;
    rules?: Omit<
      RegisterOptions,
      "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >;
}

const InputTextArea = (props: InputTextProps) => {
    const {control, controllerName, rules, ...inputTextProps} = props;
    return (
        <>
            <Controller name={controllerName} control={control} render={({field,fieldState}) => {
                return (
                    <>
                        <InputTextarea value={field.value} 
                        cols={20} rows={5}
                        autoResize={true}
                        onChange={(e) => field.onChange(e.target.value)}
                        {...inputTextProps}
                        />
                    </>
                );
            }} />
        </>
    );
}
export default InputTextArea;