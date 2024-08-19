import React from 'react';
import { ITcProps } from '@/app/_types/types';
import { TableCell } from '../../product-table/styled';

const Tc:React.FC<ITcProps>= ({content}) => {
    return <TableCell>{content}</TableCell>;
};

export default Tc;