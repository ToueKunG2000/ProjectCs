import DynamicInputBuild from "./dynamicInputBuild";
import HorizontalField from "./horizontalField";
import { DynamicInputFields } from "./interface";
import styles from '../../styles/InputStyles.module.css'

const DynamicHorizonInput = (props: DynamicInputFields) => {
    const {control, dynamicInputItems, children, fieldID, isRequired, label} = props;
    
    return (
        <>
            {dynamicInputItems.map((fields) => {
                return (
                    <>
                    <div className={styles[`${fields.inputClassName==undefined?"line":fields.inputClassName}`]}>
                        <HorizontalField 
                        fieldID={fieldID}
                        inputClassName={fields.inputClassName}
                        label={fields.label}
                        key={fields.fieldID}
                        isRequired={fields.isRequired}
                    >
                        <DynamicInputBuild 
                            control={control}
                            field={fields}
                            key={fields.fieldID}
                        />
                    </HorizontalField>
                    </div>
                    </> 
                )
            })}
        </>
    );
}
export default DynamicHorizonInput;