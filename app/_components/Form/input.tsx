import React from "react";
import { IInput } from "../../_types/types";
import { StyleInput } from "./styled";

const Input:React.FC<IInput> = ({type, placeholder, id, className, name})=>{
    return(
        <StyleInput type={type} name={name} id={id} placeholder={placeholder} className={className}/>
    )
}

export default Input