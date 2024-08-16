import { ITrProps } from "@/app/_types/types";
import { TableRow } from "../../Table/styled";
import Tc from "../TableCell/table-cell";

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