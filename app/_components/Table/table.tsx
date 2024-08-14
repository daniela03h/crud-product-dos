import { useEffect, useState } from "react";
import { productsArray } from "../../_api/api";
import { IProduct } from "../../_types/types";
import { StyledTable, TableCell, TableHeader, TableRow, TableWrapper } from "./styled";

export function Table() {
    const [data, setData] = useState<IProduct[]>([]);

    useEffect(() => {
        setData(productsArray)
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