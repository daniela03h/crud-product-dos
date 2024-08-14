import { useEffect, useState } from "react";
import { productsArray } from "../_api/api";
import { IProduct } from "../_types/types";
 
export function Table() {
    const [data, setData] = useState<IProduct[]>([]);
 
    useEffect(() => {
        setData(productsArray)
    }, [])

    return (
        <table>
            <thead>
               <tr>
                    <th>Titulo</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                </tr> 
            </thead>
            <tbody>
                {data.map((value, key) => {
                    return (
                        <tr key={key}>
                            <td>{value.title}</td>
                            <td>{value.description}</td>
                            <td>{value.price}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}