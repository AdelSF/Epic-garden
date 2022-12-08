import { useState } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";



export default function UploadForm() {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg']

    function changeHandler(e) {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('please insert correct image type (png/jpeg');
        }
    }

    return(
        
        <form>
            <input type="file" onChange={changeHandler}/>
            <Div>
                { error && <ErrorDiv>{ error }</ErrorDiv>}
                { file && <FileDiv>{file.name}</FileDiv>}
                { file && <ProgressBar file={file} setFile={setFile} />}
            </Div>
        </form>
    )
}


const Div = styled.div`

`
const ErrorDiv = styled.div`

`
const FileDiv = styled.div`

`