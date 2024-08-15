"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "../_components/Form/input";
import Label from "../_components/Form/label";
import TextArea from "../_components/Form/textArea";
import HeaderComponent from "../_components/Header/header";
import { successAlert } from "../_alerts/alerts";
import postProducts from "../_api/api";
import Button from "../_components/Form/button"
import { CardForm, ContenButon, Descripcion, Formulario, StyleContent, Titulo } from "../_components/Form/styled";

export default function FormView() {
  const router = useRouter();

  const [values, setValues] = useState({
    title: "",
    description: "",
    price: ""
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      postProducts(values);
      successAlert("Se creo producto exitosamente")
    } catch (e) {
      console.log("e");
    }
    setValues({
      title: "",
      description: "",
      price: ""
    });
    router.push("/");
  }


  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <>
      <HeaderComponent><Link href="/"> Home</Link></HeaderComponent>

      <StyleContent>
        <CardForm>
          <Titulo>Agregar un nuevo producto</Titulo>
          <Descripcion>Completa los campos para registrar un nuevo producto.</Descripcion>
          <Formulario action="" onSubmit={handleSubmit}>
            <Label name={"Nombre del producto"} />
            <Input
              type={"text"}
              name={"title"}
              placeholder={"Nombre del producto"}
              id={"name_Input"}
              onChange={handleChange}
              value={values.title}
            />
            <Label name={"Descripcion del producto"} />
            <TextArea placeholder={"Descripcion del producto"} id={"description_textArea"} onChange={handleChange} name={"description"} value={values.description} />
            <Label name={"Precio"} />
            <Input
              type={"number"}
              placeholder={"Precio del producto"}
              name={"price"}
              id={"price_Input"}
              onChange={handleChange}
              value={String(values.price)}
            />
            <ContenButon>
              <Button id={"btn_cancel"} name={"Cancelar"} color={"gray"} onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                router.push('/');
              }} />
              <Button id={"btn_save"} name={"Guardar"} color={"#4CAF50"} />
            </ContenButon>
          </Formulario >
        </CardForm>
      </StyleContent>
    </>
  );
}

