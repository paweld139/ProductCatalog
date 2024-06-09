import {
    Product
} from "./interfaces";

export const getProducts = async (): Promise<Product[]> => {
    const response = await fetch('/api/product');

    return await response.json();
};