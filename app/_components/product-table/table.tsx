import { useEffect, useState } from "react";
import { IProduct, ITableRowData } from "../../_types/types";
import { TableWrapper } from "./styled";
import CustomTable from "../UI/Table/table";

export function Table() {
    const [data, setData] = useState<IProduct[]>([]);
    const [columns,setColumns]=useState<string[]>([]);
    
    function convertToRowData(product: IProduct): ITableRowData {
        return {
            title: product.title,
            description: product.description,
            price: product.price,
            image: product.image
        };
    }

    useEffect(() => {
        fetch("http://localhost:8000/products")
        .then(response => response.json())
        .then(data => {
            data.forEach((product:any) => {
                if(product.id){
                delete product.id
            }
            });
            
            setColumns(Object.keys(data[1]));
            setData(data)})
    }, [])

    return (
        <TableWrapper>
            <CustomTable columns={columns} data={data.map(convertToRowData)}/>
        </TableWrapper>
    );
}