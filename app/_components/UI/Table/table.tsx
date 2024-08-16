import { CustomTableProps } from "@/app/_types/types";
import { StyledTable } from "../../Table/styled";
import Th from "../TableHeader/table-header";
import Tr from "../TableRow/table-row";

const CustomTable: React.FC<CustomTableProps> = ({ columns, data }) => {
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