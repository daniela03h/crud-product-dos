import { useEffect, useState } from "react";
import { IProduct } from "../../_types/types";
import { StyledTable, TableCell, TableHeader, TableRow, TableWrapper } from "./styled";
import CustomTable from "../UI/Table/table";

export function Table() {
    const [data, setData] = useState<IProduct[]>([]);
    const [columns,setColumns]=useState<string[]>([]);

    useEffect(() => {
        fetch("http://localhost:8000/products")
        .then(response => response.json())
        .then(data => {
            console.log(Object.values(data[0]));
            setColumns(Object.keys(data[1]));
            setData(data)})
    }, [])

    return (
        <TableWrapper>
            <CustomTable columns={columns} data={data}/>
        </TableWrapper>
    );
}