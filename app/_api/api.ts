import { errorAlert } from "../_alerts/alerts";
import { IProduct } from "../_types/types"

async function postProducts(product: IProduct): Promise<IProduct> {
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

export default postProducts;