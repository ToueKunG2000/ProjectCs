import { Control, Controller, RegisterOptions } from "react-hook-form";
import { Dropdown, DropdownProps } from "primereact/dropdown";


interface InputDropdownProps extends DropdownProps {
    controllerName: string;
    control: Control<any>;
    data?: any[];
    rules?: Omit<
      RegisterOptions,
      "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >;
  }

const InputDropdown = (props:InputDropdownProps) => {
    const {control, rules,data, controllerName, ...inputDropdownProps} = props;
    return (
        <>
            <Controller 
                name={controllerName}
                control={control}
                rules={rules}
                render={({field, fieldState}) => (
                    <>
                        {fieldState.error && <label id={field.name} className="required p-4">{fieldState.error.message}</label>}
                        <Dropdown
                            name={field.name}
                            value={field.value == undefined ? 0: field.value}
                            onChange={(e) => field.onChange(e.value)}
                            className={fieldState.error == undefined ?'':'invalid'}
                            options={data}
                            {...inputDropdownProps}
                        />
                    </>
                )}
            />
        </>
    );
}
export default InputDropdown;