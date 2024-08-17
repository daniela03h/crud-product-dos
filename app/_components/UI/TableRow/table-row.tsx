import { ITrProps } from "@/app/_types/types";
import { TableRow } from '../../product-table/styled';
import Tc from "../TableCell/table-cell";
import Image from "../Image/image";
import IconButtonEdit from "../IconButtons/iconButtonsEdit";
import IconButtonDelete from "../IconButtons/iconButtonsDelete";

const Tr:React.FC<ITrProps> = ({row,columns}) => {
    return (
        <TableRow>
            {columns.map((col, index) => {
                 if (col === 'image'){
                    return <Image src={row[col]} alt="" key={index}/> 
                 }
                 if(col==="actions"){
                    return [<IconButtonEdit className="bi bi-pencil-square" key={index}/>, <IconButtonDelete className="bi bi-trash3" key={index}/>
                ]
                 }else{
                    return <Tc key={index} content={row[col]}></Tc>
                 }
            })}
        </TableRow>
    );
};

export default Tr;