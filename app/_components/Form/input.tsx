import { IInput } from "../../_types/types";
import React from "react";
import { StyleInput } from "./styled";

const Input:React.FC<IInput> = ({type, placeholder, id, className, name, onChange , value})=>{
    return(
        <StyleInput type={type} name={name} id={id} placeholder={placeholder} className={className} onChange={onChange} value={value} required/>
    )
}

export default Input