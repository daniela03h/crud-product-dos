import { ITrProps } from "@/app/_types/types";
import { TableRow } from '../../product-table/styled';
import Tc from "../TableCell/table-cell";
import Image from "../Image/image";
import IconButton from "../IconButtons/iconButtons";

const Tr:React.FC<ITrProps> = ({row,columns}) => {
    return (
        <TableRow>
            {columns.map((col, index) => {
                 if (col === 'image'){
                    return <Image src={row[col]}/>
                 }
                 else if(col === "actions"){
                    return <Tc key={index} content={<IconButton name={<i className="bi bi-trash"></i>}/>}></Tc>
                 }
                 else{
                    return <Tc key={index} content={row[col]}></Tc>
                 }
            })}
        </TableRow>
    );
};

export default Tr;