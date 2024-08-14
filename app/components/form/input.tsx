import React from "react";
import { IInput } from "@/app/types/interfaces";

const Input:React.FC<IInput> = ({type, placeholder, id, className, name})=>{
    return(
        <input type={type} name={name} id={id} placeholder={placeholder} className={className}/>
    )
}

export default Input