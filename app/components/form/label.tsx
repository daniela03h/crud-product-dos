import React from 'react';
import { ILabel } from '@/app/types/interfaces';



const Label: React.FC<ILabel> =(name)=> {
    return(
        <label>
            {name}
        </label>
    )
}

export default Label;