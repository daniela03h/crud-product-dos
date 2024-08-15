import { ITextArea } from "@/app/_types/types";
import React from "react";


const TextArea: React.FC<ITextArea> =({placeholder, id, name, onChange, value})=>{
    return (
        <textarea name={name} id={id} placeholder={placeholder} onChange={onChange} value = {value}/>
    )
}

export default TextArea;