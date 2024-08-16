import { TableHeader, TableRow } from "../../Table/styled";

interface TableHeaderProps {
    columns: string[];
}

const Th: React.FC<TableHeaderProps> = ({ columns }) => {
    return (
        <thead>
        <TableRow>
            {columns.map((col, index) => (
            <TableHeader key={index}>{col}</TableHeader>
            ))}
        </TableRow>
        </thead>
    );
};

export default Th;