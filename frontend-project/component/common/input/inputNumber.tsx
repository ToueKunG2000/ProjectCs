import { InputNumber, InputNumberProps } from "primereact/inputnumber";
import { Control, Controller, RegisterOptions } from "react-hook-form";

interface NumberInputProps extends InputNumberProps {
  controllerName: string;
  control: Control<any>;
  rules?: Omit<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

const InputNumberField = (props: NumberInputProps) => {
  const { control, controllerName, rules } = props;
  return (
    <>
      <Controller
        name={controllerName}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <InputNumber
            value={field.value}
            onValueChange={(e) => field.onChange(e.value)}
          />
        )}
      />
    </>
  );
};
export default InputNumberField;
