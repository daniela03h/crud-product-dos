import { useEffect, useState } from "react";
import { IProduct } from "../../_types/types";
import { StyledTable, TableCell, TableHeader, TableRow, TableWrapper } from "./styled";
import Image from "../UI/Image/image";

export function Table() {
    const [data, setData] = useState<IProduct[]>([]);

    useEffect(() => {
        fetch("http://localhost:8000/products")
        .then(response => response.json())
        .then(data => setData(data))
    }, [])

    return (
        <TableWrapper>
            <StyledTable>
                <thead>
                    <tr>
                        <TableHeader>Título</TableHeader>
                        <TableHeader>Descripción</TableHeader>
                        <TableHeader>Precio</TableHeader>
                        <TableHeader>Imagen</TableHeader>

                    </tr>
                </thead>
                <tbody>
                    {data.map((value, key) => {
                        
                        return (
                            <TableRow key={key}>
                                <TableCell>{value.title}</TableCell>
                                <TableCell>{value.description}</TableCell>
                                <TableCell>{value.price}</TableCell>
                                <TableCell><Image src={value.image} /></TableCell>
                            </TableRow>
                        )
                    })}
                </tbody>
            </StyledTable>
        </TableWrapper>
    );
}