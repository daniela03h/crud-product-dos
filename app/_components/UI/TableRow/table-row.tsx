import { TableRow } from "../../Table/styled";
import Tc from "../TableCell/table-cell";

export interface RowData {
    [key: string]: string; // Tipo general para los valores de las filas, puede ser cadena o número
  }

interface ITrProps{
    columns:string[];
    row:RowData;
}



const Tr:React.FC<ITrProps> = ({row,columns}) => {
    return (
        <TableRow>
            {columns.map((col, index) => (
            <Tc key={index} content={row[col]}></Tc>
            ))}
        </TableRow>
    );
};

export default Tr;