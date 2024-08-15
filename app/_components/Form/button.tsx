import React from "react";
import { IButton } from "../../_types/types";

const Button: React.FC<IButton>=({id, className, onClick, name})=>{
    return(
        <button onClick={onClick} id={id} className={className}>{name}</button>
    )
}


export default Button;