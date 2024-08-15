'use client'
import Link from "next/link";
import Input from "../_components/Form/input";
import Label from "../_components/Form/label";
import TextArea from "../_components/Form/textArea";
import HeaderComponent from "../_components/Header/header";
import Button from "../_components/Form/button"
import { CardForm, ContenButon, Descripcion, Formulario, StyleContent, Titulo } from "../_components/Form/styled";


export default function FormView() {
  return (
    <>
    <HeaderComponent><Link href="/"> Home</Link></HeaderComponent>
    <StyleContent>
      <CardForm>
      <Titulo>Agregar un nuevo producto</Titulo>
      <Descripcion>Completa los campos para registrar un nuevo producto.</Descripcion>

        <Formulario action="">
          <Label name={"Nombre del producto"} />
          <Input
            type={"text"}
            placeholder={"Nombre del producto"}
            id={"name_Input"}
          />
          <Label name={"Descripcion del producto"} />
        <TextArea placeholder={"Descripcion del producto"} id={"description_textArea"} />
          <Label name={"Precio"} />
          <Input
            type={"number"}
            placeholder={"Precio del producto"}
            id={"price_Input"}
          />
          <ContenButon>
            <Button id={"btn_cancel"} name={"Cancelar"}  color={"gray"}/>
            <Button id={"btn_save"} name={"Guardar"} color={"#4CAF50"}/>
          </ContenButon>
        </Formulario>
      </CardForm>
    </StyleContent>
    </>
  );
}

