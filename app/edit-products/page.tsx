"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { CardForm, Descripcion, Form, StyleContent, Tittle } from "../_components/create-form/form-style";
import Button from "../_components/UI/Button/button";
import { ContainerButton } from "../_components/UI/Button/button-style";
import HeaderComponent from "../_components/UI/Header/header";
import Input from "../_components/UI/Input/input";
import Label from "../_components/UI/Label/label";
import TextArea from "../_components/UI/TextArea/textArea";
import { IProduct } from "../_types/types";
import { updateProduct, getProduct } from "../services/_api/api";
import { successAlert } from "../utils/_alerts/alerts";

const initialState = {
  title: "",
  description: "",
  price: "",
  image: ""
}

export default function FormView() {
  const router = useRouter();
  
  const [values, setValues] = useState<IProduct>(initialState);

  useEffect(() => {
    const fetchProduct = async () => {
      const searchParams = window.location.search;
      const paramsTransformer = new URLSearchParams(searchParams);
      const Id = paramsTransformer.get("id");
      const product = await getProduct(Id!);
      if (product) {
        setValues({
          title: product.title || "",
          description: product.description || "",
          price: product.price || "",
          image: product.image || ""
        });
      }
    };
    
    fetchProduct();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const searchParams = window.location.search;
      const paramsTransformer = new URLSearchParams(searchParams);
      const Id = paramsTransformer.get("id");
      updateProduct(Id! ,values);
      successAlert("Se actualizó el producto exitosamente");
    } catch (e) {
      console.error("Error al actualizar el producto:", e);
    }
    setValues(initialState);
    router.push("/");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleButtonCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <>
      <HeaderComponent><Link href="/">Home</Link></HeaderComponent>

      <StyleContent>
        <CardForm>
          <Tittle>Editar producto</Tittle>
          <Descripcion>Completa los campos para editar el producto.</Descripcion>
          <Form action="" onSubmit={handleSubmit}>
            <Label name={"Nombre del producto"} />
            <Input
              type={"text"}
              name={"title"}
              placeholder={"Nombre del producto"}
              id={"name_Input"}
              onChange={handleChange}
              value={values.title}
            />
            <Label name={"Descripción del producto"} />
            <TextArea
              placeholder={"Descripción del producto"}
              id={"description_textArea"}
              onChange={handleChange}
              name={"description"}
              value={values.description}
            />
            <Label name={"Precio"} />
            <Input
              type={"number"}
              placeholder={"Precio del producto"}
              name={"price"}
              id={"price_Input"}
              onChange={handleChange}
              value={String(values.price)}
            />
            <Label name={"URL del producto"} />
            <Input
              type={"url"}
              placeholder={"URL del producto"}
              name={"image"}
              id={"img_Input"}
              onChange={handleChange}
              value={values.image}
            />
            <ContainerButton>
              <Button id={"btn_cancel"} name={"Cancelar"} color={"gray"} onClick={handleButtonCancel} />
              <Button id={"btn_save"} name={"Guardar"} color={"#4CAF50"} />
            </ContainerButton>
          </Form>
        </CardForm>
      </StyleContent>
    </>
  );
}
