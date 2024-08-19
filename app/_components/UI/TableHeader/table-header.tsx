import { ITableHeaderProps } from "@/app/_types/types";
import { TableHeader, TableRow } from '../../product-table/styled';



const Th: React.FC<ITableHeaderProps> = ({ columns }) => {
    return (
        <thead>
            <TableRow>
                {columns.map((col, index) => (
                <TableHeader key={index}>{col.toUpperCase()}</TableHeader>
                ))}
            </TableRow>
        </thead>
    );
};

export default Th;