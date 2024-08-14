import React from "react";
import { ITextArea } from "@/app/types/interfaces";

const TextArea: React.FC<ITextArea> =({placeholder, id, name})=>{
    return (
        <textarea name={name} id={id} placeholder={placeholder}></textarea>
    )
}

export default TextArea;