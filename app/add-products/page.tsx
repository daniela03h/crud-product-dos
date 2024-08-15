"use client"
import { useState } from "react";
import { productsArray } from "../_api/api";
import { useRouter } from "next/navigation";
import Label from "../_components/Form/label";
import Input from "../_components/Form/input";
import TextArea from "../_components/Form/textArea";
import HeaderComponent from "../_components/Header/header";
import Link from "next/link";
import { successAlert } from "../_alerts/alerts";


export default function FormView() {
  const router=useRouter();
  
  const [values, setValues] = useState({
    title: "",
    description: "",
    price: ""
  })

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    productsArray.push(values)
    successAlert("Se creo producto exitosamente")
    setValues({
      title: "",
      description: "",
      price: ""
    });
    router.push("/");
    
  }
    

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name, value} = event.target
    setValues({
      ...values,
      [name]: value
    })
  }

  
  
  return (
    <>
    <HeaderComponent><Link href="/"> Home</Link></HeaderComponent>
    <main>
      <form action="" onSubmit={handleSubmit}>
        <Label name={"Nombre del produco"} />
        <Input
          type={"text"}
          name = {"title"}
          placeholder={"Nombre del producto"}
          id={"name_Input"}
          onChange={handleChange}
          value={values.title}
        />
        <Label name={"Descripcion del prodcuto"} />
        <TextArea placeholder={"Descripcion del producto"} id={"description_textArea"} onChange={handleChange} name = {"description"} value={values.description}/>
        <Label name={"Precio"} />
        <Input
          type={"number"}
          placeholder={"Precio del producto"}
          name = {"price"}
          id={"price_Input"}
          onChange={handleChange}
          value={String(values.price)}
        />
        <button> Enviar </button>
      </form>
    </main>
    </>
  );
}

