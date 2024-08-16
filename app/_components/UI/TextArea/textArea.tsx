import React from "react";
import { ITextArea } from "../../../_types/types";
import { StyleText } from "./textArea-style";

const TextArea: React.FC<ITextArea> =({placeholder, id, name, onChange, value})=>{
    return (
        <StyleText name={name} id={id} placeholder={placeholder} onChange={onChange} value = {value}/>
    )
}

export default TextArea;