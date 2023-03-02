
import { Control, Controller, RegisterOptions } from "react-hook-form";
import { FileUpload, FileUploadProps } from 'primereact/fileupload';
import Image from "next/image";

interface UploadProps extends FileUploadProps {
    controllerName: string;
    control: Control<any>;
    setValue: any;
    rules?: Omit<
      RegisterOptions,
      "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >;
}

export const InputUpload = (props: UploadProps) => {
    const {control, rules, setValue, controllerName, ...InputUpload} = props;

    const customBase64Uploader = async (event:any) => {
        const file = event.files[0];
        const reader = new FileReader();
        let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

        reader.readAsDataURL(blob);

        reader.onloadend = function () {
            const base64data = reader.result;
            console.log(base64data);
            const base64split = base64data?.split(",");
            setValue(controllerName, base64split[1]);
        };
    }

    const itemTemplate = (file :any, props :any) => {
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{ width: '40%' }}>
                    <Image alt={file.name} role="presentation" src={file.objectURL} width={200} height={200}/>
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
            </div>
        );
    };

    

    const emptyTemplate = () => {
        return (
        <div className="flex align-items-center flex-column">
            <i
            className="pi pi-image mt-3 p-5"
            style={{
                fontSize: "5em",
                borderRadius: "50%",
                backgroundColor: "var(--surface-b)",
                color: "var(--surface-d)"
            }}
            ></i>
            <span
            style={{ fontSize: "1.2em", color: "var(--text-color-secondary)" }}
            className="my-5"
            >
            Drag and Drop Image Here
            </span>
        </div>
        );
    };

    const onTemplateRemove = () => {
        setValue(controllerName, "");
    }
    
    const chooseOptions = { className: 'custom-choose-btn' };
    const uploadOptions = { className: 'custom-upload-btn p-button-success' };
    const cancelOptions = { className: 'custom-cancel-btn p-button-danger' };

    return (
        <>
            <Controller
                name={controllerName}
                control={control}
                rules={rules}
                render={({field,fieldState})=>(
                    <>
                    {fieldState.error && <label id={field.name} className="required p-4">{fieldState.error.message}</label>}
                    <FileUpload name={field.name} url="/api/upload" accept="image/*" customUpload 
                    uploadHandler={(e)=>customBase64Uploader(e)}
                    itemTemplate={itemTemplate}
                    emptyTemplate={emptyTemplate}
                    chooseOptions={chooseOptions}
                    uploadOptions={uploadOptions}
                    cancelOptions={cancelOptions}
                    onClear={onTemplateRemove}
                    // <input id={field.name} name={field.name} type="file" onChange={(e)=> customBase64Uploader(e,field)} value={field.value} accept="/image/png, image/jpeg"/>
                    {...InputUpload}
                    /> 
                    </>
                )}
            />
        </>
    )
}