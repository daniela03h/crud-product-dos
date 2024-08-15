import { IInput } from "@/app/_types/types";
import React from "react";


const Input:React.FC<IInput> = ({type, placeholder, id, className, name, onChange , value})=>{
    return(
        <input type={type} name={name} id={id} placeholder={placeholder} className={className} onChange={onChange} value={value}/>
    )
}

export default Input