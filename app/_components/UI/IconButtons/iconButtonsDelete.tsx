import React from "react";
import { IButton } from "../../../_types/types";
import { StyleButon } from "./iconbuttons-style";

const IconButtonDelete: React.FC<IButton>=({id, className, onClick, name,color})=>{
    return(
        <StyleButon onClick={onClick} id={id} className={className} color={color}>{name}</StyleButon>
    )
}

export default IconButtonDelete;