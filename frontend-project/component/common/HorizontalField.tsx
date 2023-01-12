import { FieldProps } from "./interface";
import DynamicInput from "./dynamicInput";


const HorizontalField = (props: FieldProps) => {
    const {children, fieldID, isRequired, label} = props;
    return (
        <div>
            <label></label>
            {children}
        </div>
    );

}
export default HorizontalField;