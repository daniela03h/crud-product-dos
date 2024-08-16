import { useEffect, useState } from "react";
import { IProduct} from '../../_types/types';
import { StyledTable, TableCell, TableHeader, TableRow, TableWrapper } from './styled';
import IconButtonEdit from "../UI/IconButtons/iconButtonsEdit";
import IconButtonDelete from "../UI/IconButtons/iconButtonsDelete";




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
                        <TableHeader>Editar</TableHeader>
                        <TableHeader>Eliminar</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, key) => {
                        
                        return (
                            <TableRow key={key}>
                                <TableCell>{value.title}</TableCell>
                                <TableCell>{value.description}</TableCell>
                                <TableCell>{value.price}</TableCell>
                                <TableCell><IconButtonEdit className="bi bi-pencil-square" id={value.id} onClick={(event:any)=>alert(event.target.id)}/></TableCell>
                                <TableCell><IconButtonDelete className="bi bi-trash3"/></TableCell>
                            </TableRow>
                        )
                    })}
                </tbody>
            </StyledTable>
        </TableWrapper>
    );
}