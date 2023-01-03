import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const LayoutLogin = () => {
    return (
        <>
            <Card>
                <label>Username : </label>
                <InputText />
                <label>Password : </label>
                <InputText />
                <Button 
                    label='Login'
                />
            </Card>
        </>
    );
}
export default LayoutLogin;