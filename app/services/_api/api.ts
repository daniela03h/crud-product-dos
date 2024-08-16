import { errorAlert } from "../../utils/_alerts/alerts";
import { IProduct } from "../../_types/types"


export async function getProducts() {
    const response = await fetch("http://localhost:8000/products");
    const data = await response.json();

    if (response.status !== 200) {
        throw new Error("No se pudo mostrar los productos")
    }
    return data;
}

export async function postProducts(product: IProduct): Promise<IProduct> {
    const response = await fetch("http://localhost:8000/products", {
        method: "POST",
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(product)
    })

    if (!response.ok) {
        errorAlert("No se pudo publicar el producto")
        throw new Error("No se pudo publicar el producto")

    }
    console.log(response.status);

    const data = response.json();
    return data
}

