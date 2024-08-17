import { IProduct, ITableRowData } from "@/app/_types/types";

export function convertToRowData(product: IProduct): ITableRowData {
    return {
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image
    };
}