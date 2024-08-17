import { ITrProps } from "@/app/_types/types";
import { TableRow } from '../../product-table/styled';
import Tc from "../TableCell/table-cell";
import Image from "../Image/image";
import IconButton from "../IconButtons/iconButtons";
import { deleteProducts } from "@/app/services/_api/api";
import { successAlert } from "@/app/utils/_alerts/alerts";
import { ContenEditDeleteButton } from "../IconButtons/iconbuttons-style";

const Tr:React.FC<ITrProps> = ({row,columns}) => {
    const hadleDelete = async(event: React.MouseEvent<HTMLButtonElement>)=>{
        const id  = event.currentTarget.id;
        try{
            await deleteProducts(id);
            successAlert("Se elimino el producto")
        }
        catch(e){
            console.log(e);
            
        }
    }
    return (
        <TableRow>
            {columns.map((col, index) => {
                 if (col === 'image'){                
                    return <Image src={row[col]}/>
                 }
                 else if(col === "actions"){        
                    return <Tc key={index} content={
                        <ContenEditDeleteButton>
                            <IconButton id={row.id} name={<i className="bi bi-pencil-square"></i>}/>
                            <IconButton onClick={hadleDelete} id={row.id} name={<i className="bi bi-trash"></i>}/>
                        </ContenEditDeleteButton>
                        }>
                    </Tc>
                 }
                 else{
                    return <Tc key={index} content={row[col]}></Tc>
                 }
            })}
        </TableRow>
    );
};

export default Tr;