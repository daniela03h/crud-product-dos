import { useEffect, useState } from "react";
import { IProduct } from "../../_types/types";
import { TableWrapper } from "./styled";
import CustomTable from "../UI/Table/table";
import { getProducts } from "@/app/services/_api/api";
import { convertToRowData } from "@/app/utils/table-data-handler/table-data-handler";
import { errorAlert } from "@/app/utils/_alerts/alerts";

export function Table() {
    const [data, setData] = useState<IProduct[]>([]);
    const [columns,setColumns]=useState<string[]>([]);
    
    useEffect(() => {
        const fetchProducts=async()=>{
            try{
                const products = await getProducts();
                setData(products);
                const columns = Object.keys(products[0]).filter(key => key !== 'id');
                setColumns([...columns,"actions"]);
            }
            catch(e){
                console.log(e);
                errorAlert("No se pudo mostrar los productos, intente luego") 
            }
        }
        fetchProducts();
    }, []);

    return (
            <TableWrapper>
                <CustomTable columns={columns} data={data.map(convertToRowData)}/>
            </TableWrapper>
    );
}