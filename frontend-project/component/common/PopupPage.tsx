import { Dialog } from 'primereact/dialog';
import { Dispatch, SetStateAction } from 'react';

interface PopupProps{
    setVisible: Dispatch<SetStateAction<boolean>>;
    visible: boolean;
}

const PopupPage = (props : PopupProps) => {
    const { setVisible, visible} = props;

    const onHide = () => {
        setVisible(false);
    }
    
    return (
        <>
            <Dialog header="Header" visible={visible} onHide={onHide} >
                <h1>Username or Password not correct</h1>
            </Dialog>
        </>
    );

}
export default PopupPage;