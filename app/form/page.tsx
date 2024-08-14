import Input from "../components/form/input";
import Label from "../components/form/label";
import TextArea from "../components/form/textArea";


export default function FormView() {
  return (
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
      </form>
    </main>
  );
}

