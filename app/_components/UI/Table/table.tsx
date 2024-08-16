import { CustomTableProps } from "@/app/_types/types";
import Th from "../TableHeader/table-header";
import Tr from "../TableRow/table-row";
import { StyledTable } from "../../product-table/styled";

const CustomTable: React.FC<CustomTableProps> = ({ columns, data }) => {
    return (
        <StyledTable>
            <Th columns={columns} />
                <tbody>
                    {data.map((row, index) => (
                        // row==="image"? 
                        <Tr key={index} row={row} columns={columns} />
                    ))}
                </tbody>
        </StyledTable>
    );
};
export default CustomTable;