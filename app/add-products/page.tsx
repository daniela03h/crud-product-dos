import Link from "next/link";
import Input from "../_components/Form/input";
import Label from "../_components/Form/label";
import TextArea from "../_components/Form/textArea";
import HeaderComponent from "../_components/Header/header";
import Button from "../_components/Form/button"

export default function FormView() {
  return (
    <>
    <HeaderComponent><Link href="/"> Home</Link></HeaderComponent>
    <main>
      <form action="">
        <Label name={"Nombre del produco"} />
        <Input
          type={"text"}
          placeholder={"Nombre del producto"}
          id={"name_Input"}
        />
        <Label name={"Descripcion del prodcuto"} />
       <TextArea placeholder={"Descripcion del producto"} id={"description_textArea"} />
        <Label name={"Precio"} />
        <Input
          type={"number"}
          placeholder={"Precio del producto"}
          id={"price_Input"}
        />
        <Button id={"btn_save"} name={"Guardar"}/>
        <Button id={"btn_cancel"} name={"Cancelar"}/>
      </form>
    </main>
    </>
  );
}

