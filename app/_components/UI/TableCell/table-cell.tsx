import React from 'react';
import { TableCell } from '../../Table/styled';

interface ITcProps{
    content:string;
}

const Tc:React.FC<ITcProps>= ({content}) => {
    return <TableCell>{content}</TableCell>;
};

export default Tc;