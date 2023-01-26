import { FieldProps } from "./interface";
import styles from '../../styles/InputStyles.module.css'

const HorizontalField = (props: FieldProps) => {
    const {children, fieldID, isRequired, label } = props;
    return (
        <>
            <>
            <div className={styles.field}>
                <label className={styles.label}>{label}</label>
            </div>
            <div>
                {children}
            </div>
            </>
        </>        
    );

}
export default HorizontalField;