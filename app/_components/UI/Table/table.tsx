import { StyledTable } from "../../Table/styled";
import Th from "../TableHeader/table-header";
import Tr from "../TableRow/table-row";

export interface RowData {
    [key: string]: string; // Tipo general para los valores de las filas, puede ser cadena o número
  }

interface TableProps {
    columns: string[];
    data: RowData[];
  }
const CustomTable: React.FC<TableProps> = ({ columns, data }) => {
    return (
      <StyledTable>
        <Th columns={columns} />
        <tbody>
          {data.map((row, index) => (
            <Tr key={index} row={row} columns={columns} />
          ))}
        </tbody>
      </StyledTable>
    );
  };
  
  export default CustomTable;