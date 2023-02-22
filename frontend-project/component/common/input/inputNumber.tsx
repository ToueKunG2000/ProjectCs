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
  const { control, controllerName, rules, fraction,...inputNumberProps } = props;
  return (
    <>
      <Controller
        name={controllerName}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
          {fieldState.error && <label id={field.name} className="required p-4">{fieldState.error.message}</label>}
          <InputNumber
            value={field.value}
            onValueChange={(e) => field.onChange(e.value)}
            minFractionDigits={0}
            className={fieldState.error == undefined ?'':'invalid'}
            maxLength={7}
            maxFractionDigits={fraction}
            {...inputNumberProps}
          />
          </>
        )}
      />
    </>
  );
};
export default InputNumberField;
