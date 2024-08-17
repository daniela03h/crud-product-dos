import { ITrProps } from "@/app/_types/types";
import { TableRow } from '../../product-table/styled';
import Tc from "../TableCell/table-cell";
import Image from "../Image/image";

const Tr:React.FC<ITrProps> = ({row,columns}) => {
    return (
        <TableRow>
            {columns.map((col, index) => {
                 if (col === 'image'){
                    return <Image src={row[col]}/>
                 }else{
                    return <Tc key={index} content={row[col]}></Tc>
                 }
            })}
        </TableRow>
    );
};

export default Tr;