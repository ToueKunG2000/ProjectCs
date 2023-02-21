
import { InputTextarea, InputTextareaProps } from "primereact/inputtextarea";
import { Control, Controller, FieldError, RegisterOptions } from "react-hook-form";

interface InputTextProps extends InputTextareaProps {
    controllerName: string;
    control: Control<any>;
    data?: any;
    rules?: Omit<
      RegisterOptions,
      "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >;
}

const InputTextArea = (props: InputTextProps) => {
    const {control ,data ,controllerName,rules, ...inputTextAreaProps} = props;

    return (
        <>
            <Controller 
            name={controllerName} 
            control={control}
            rules={rules}
            render={({field,fieldState}) => {
                return (
                    <div className="flex flex-column">
                        {fieldState.error && <label id={field.name} className="required">{fieldState.error.message}</label>}
                        <InputTextarea
                            {...field}
                            id={field.name}
                            name={field.name}
                            value={field.value} 
                            cols={60} rows={5}
                            autoResize={true}
                            className={fieldState.error == undefined ?'':'invalid'}
                            onChange={(e) => field.onChange(e.target.value)}
                            {...inputTextAreaProps}
                        />
                        {data != undefined && <h1>{`ส่งกลับโดย : ${data}`}</h1>}
                    </div>
                );
            }} />
        </>
    );
}
export default InputTextArea;