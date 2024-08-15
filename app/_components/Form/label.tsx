import React from 'react';
import { ILabel } from '../../_types/types';

const Label: React.FC<ILabel> =({name})=> {
    return(
        <label>
            {name}
        </label>
    )
}

export default Label;