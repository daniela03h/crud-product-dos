import React from "react";
import { ITextArea } from "../../_types/types";
import { StyleText } from "./styled";

const TextArea: React.FC<ITextArea> =({placeholder, id, name})=>{
    return (
        <StyleText name={name} id={id} placeholder={placeholder}></StyleText>
    )
}

export default TextArea;