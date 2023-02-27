import { Password, PasswordProps } from 'primereact/password';
import { Control, Controller, RegisterOptions } from 'react-hook-form';

interface InputPasswordProps extends PasswordProps {
    controllerName: string;
    control: Control<any>;
    rules?: Omit<
      RegisterOptions,
      "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >;
  }

export const InputPassword = (props: InputPasswordProps) => {
    const {control, rules,controllerName, ...inputPasswordProps } = props;
    return (
        <>
        <Controller
            name={controllerName}
            control={control}
            rules={rules}
            render={({field, fieldState}) => (
                <>
                    {fieldState.error && <label id={field.name} className="required p-4">{fieldState.error.message}</label>}
                    <Password 
                        value={field.value}
                        className={fieldState.error == undefined ?'':'invalid'}
                        onChange={(e)=>field.onChange(e.target.value)}
                        toggleMask
                        {...inputPasswordProps}
                    />
                </>
            )}
        />
        </>
    );
}