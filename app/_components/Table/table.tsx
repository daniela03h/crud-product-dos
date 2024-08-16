"use client"
import { useEffect, useState } from "react";
import { IProduct } from "../../_types/types";
import { StyledTable, TableCell, TableHeader, TableRow, TableWrapper } from "./styled";
import { getProducts } from "@/app/services/_api/api";
import { errorAlert } from "@/app/utils/_alerts/alerts";

export function Table() {
    const [data, setData] = useState<IProduct[]>([]);

    useEffect(() => {
        getProducts()
        .then(data => {
            setData(data)
        })
        .catch(e => {
            errorAlert("No se pudo mostrar los productos, vuelva a intentar")
            console.log(e);
        })
    }, [])

    return (
        <TableWrapper>
            <StyledTable>
                <thead>
                    <tr>
                        <TableHeader>Título</TableHeader>
                        <TableHeader>Descripción</TableHeader>
                        <TableHeader>Precio</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, key) => {
                        
                        return (
                            <TableRow key={key}>
                                <TableCell>{value.title}</TableCell>
                                <TableCell>{value.description}</TableCell>
                                <TableCell>{value.price}</TableCell>
                            </TableRow>
                        )
                    })}
                </tbody>
            </StyledTable>
        </TableWrapper>
    );
}