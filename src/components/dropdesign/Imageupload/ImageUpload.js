import React,{useState, useEffect, useRef} from 'react'
import "./styles.scss";
import {MdModeEdit} from 'react-icons/md';
import BlueButton from './../../BlueButton/BlueButton';

function ImageUpload(props) {
    const [file, setFile] =useState();
    const [previewUrl, setPreviewUrl] = useState();
    const filePickerRef = useRef();

    useEffect(()=>{
        if(!file){
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload=()=>{
            setPreviewUrl(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    },[file]);

    function pickedHandler(event){
        let pickedFile;
        if(event.target.files && event.target.files.length===1){
            pickedFile=event.target.files[0];
            setFile(pickedFile);
            props.setData((prev)=>{
                return{...prev,image:pickedFile}
            })

            console.log('setfile',props.setData)
        }
    }

    function pickedImageHandler(){
        filePickerRef.current.click()
    }

    return (
        <div className='image_upload_sec'>
          <input id={props.id}
          ref={filePickerRef}
          style={{display:"none"}}
          type="file"
          accept=".jpg, .png, .jpeg"
          onChange={pickedHandler} /> 
          <div className='upload_image_ref'>{previewUrl && <img  src={previewUrl} alt="preview" />}</div> 
          
          <div className={`image-upload ${props.center && "center"}`}>
                <div className="image-upload__preview">
                    
                    {!previewUrl && (
                        <div className="image-upload__preview_btn" >
                            <BlueButton onClick={pickedImageHandler}>
                                Upload Image
                            </BlueButton>
                        </div>
                    )}
                </div>
                {previewUrl && (
                    <div >
                        <BlueButton onClick={pickedImageHandler} style={{alignItems:"left"}}>
                              Edit Image
                        </BlueButton>
                    </div>
                )}
          </div>
        </div>
        
    )
}

export default ImageUpload
