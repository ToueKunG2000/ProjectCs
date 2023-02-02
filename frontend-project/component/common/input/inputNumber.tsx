import { InputNumber, InputNumberProps } from "primereact/inputnumber";
import { Control, Controller, RegisterOptions } from "react-hook-form";

interface NumberInputProps extends InputNumberProps {
  controllerName: string;
  control: Control<any>;
  fraction: number;
  rules?: Omit<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

const InputNumberField = (props: NumberInputProps) => {
  const { control, controllerName, rules, fraction, ...inputNumberProps } = props;
  return (
    <>
      <Controller
        name={controllerName}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <InputNumber
            value={field.value === null ? 0 : field.value}
            onValueChange={(e) => field.onChange(e.value)}
            minFractionDigits={0}
            min={0}
            maxLength={7}
            maxFractionDigits={fraction}
            {...inputNumberProps}
          />
        )}
      />
    </>
  );
};
export default InputNumberField;
