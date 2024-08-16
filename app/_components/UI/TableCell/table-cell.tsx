import React from 'react';
import { TableCell } from '../../Table/styled';
import { ITcProps } from '@/app/_types/types';

const Tc:React.FC<ITcProps>= ({content}) => {
    return <TableCell>{content}</TableCell>;
};

export default Tc;