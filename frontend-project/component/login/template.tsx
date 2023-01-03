import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const LayoutLogin = () => {
    return (
        <>  
        <div className="flex flex-column justify-content-center">
            <div className='flex justify-content-center'>
            <label>Username : </label>
            <InputText />   
            </div>
            <div className='flex justify-content-center'>
            <label>Password : </label>
            <InputText />
            </div>
            <Button 
                label='Login'
                className="p-button-info"
            />
        </div>
        </>
    );
}
export default LayoutLogin;