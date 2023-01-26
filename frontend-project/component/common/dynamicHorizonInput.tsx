import DynamicInputBuild from "./dynamicInputBuild";
import HorizontalField from "./HorizontalField";
import { DynamicInputFields } from "./interface";
import styles from '../../styles/InputStyles.module.css'

const DynamicHorizonInput = (props: DynamicInputFields) => {
    const {control, dynamicInputItems, children, fieldID, isRequired, label} = props;
    
    return (
        <>
            {dynamicInputItems.map((fields) => {
                return (
                    <>
                    <div className={`line${fields.inputClassName==undefined?"":fields.inputClassName}`}>
                        <HorizontalField 
                        fieldID={fieldID}
                        label={fields.label}
                        key={fields.fieldID}
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