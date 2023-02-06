import { InputNumberProps } from "primereact/inputnumber";
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
    const {control, data, controllerName, ...inputDropdownProps} = props;
    return (
        <>
            <Controller 
                name={controllerName}
                control={control}
                defaultValue={0}
                render={({field}) => (
                    <Dropdown
                        value={field.value}
                        onChange={(e) => field.onChange(e.value)}
                        options={data}
                        {...inputDropdownProps}
                    />
                )}
            />
        </>
    );
}
export default InputDropdown;