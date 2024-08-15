import React from "react";
import { ITextArea } from "../../_types/types";

const TextArea: React.FC<ITextArea> =({placeholder, id, name})=>{
    return (
        <textarea name={name} id={id} placeholder={placeholder}></textarea>
    )
}

export default TextArea;