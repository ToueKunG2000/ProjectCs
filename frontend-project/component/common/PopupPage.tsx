import { Dialog } from 'primereact/dialog';
import { Dispatch, SetStateAction } from 'react';

interface PopupProps{
    setVisible: Dispatch<SetStateAction<boolean>>;
    visible: boolean;
    header: string;
    message?: string;
    children?: React.ReactNode;
    widthLeng?: number;
}

const PopupPage = (props : PopupProps) => {
    const { setVisible, visible, header, message, children, widthLeng} = props;

    const onHide = () => {
        setVisible(false);
    }

    return (
        <>
            <Dialog header={header} visible={visible} onHide={onHide} draggable={false} style={{width: widthLeng == undefined? '30vw' : `${widthLeng}vw`}} >
                <h1>{message}</h1>
                {children}
            </Dialog>
        </>
    );

}
export default PopupPage;