
import { Control, Controller, RegisterOptions } from "react-hook-form";
import { FileUpload, FileUploadProps } from 'primereact/fileupload';
import { Dispatch, SetStateAction } from "react";

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
    const {control, setValue, controllerName, ...InputUpload} = props;

    const customBase64Uploader = async (event:any,data:any) => {
        const file = event.files[0];
        const reader = new FileReader();
        let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

        reader.readAsDataURL(blob);

        reader.onloadend = function () {
            const base64data = reader.result;
            const base64split = base64data?.split(",");
            setValue(data.name, base64split[1]);
        };
    }

    return (
        <>
            <Controller
                name={controllerName}
                control={control}
                render={({field,fieldState})=>(
                    <FileUpload mode="basic" name={field.name} url="/api/upload" accept="image/*" customUpload 
                    uploadHandler={(e)=>customBase64Uploader(e,field)}
                    
                    // <input id={field.name} name={field.name} type="file" onChange={(e)=> customBase64Uploader(e,field)} value={field.value} accept="/image/png, image/jpeg"/>
                    {...InputUpload}
                    /> 

                )}
            />
        </>
    )
}