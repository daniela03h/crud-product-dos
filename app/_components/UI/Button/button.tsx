import React from "react";
import { IButton } from "../../../_types/types";
import { StyleButton } from "./button-style";

const Button: React.FC<IButton>=({id, className, onClick, name,color})=>{
    return(
        <StyleButton onClick={onClick} id={id} className={className} color={color}>{name}</StyleButton>
    )
}

export default Button;