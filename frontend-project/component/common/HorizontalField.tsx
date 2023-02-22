import { FieldProps } from "./interface";
import styles from '../../styles/InputStyles.module.css'

const HorizontalField = (props: FieldProps) => {
    const {children, fieldID, inputClassName,isRequired, label } = props;
    return (
        <>
            <>
            <div className={styles[inputClassName != undefined? `front-${inputClassName}` : 'field' ]} >
                { isRequired == true && <label className={"required"}>*</label>}
                <label className={styles.label}>{label}</label>
            </div>
            <div className={styles[ inputClassName != undefined? `last-${inputClassName}` : 'last']}>
                {children}
            </div>
            </>
        </>
    );

}
export default HorizontalField;