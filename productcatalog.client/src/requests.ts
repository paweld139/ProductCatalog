import {
    Product
} from "./interfaces";

export const getProducts = async (): Promise<Product[]> => {
    const response = await fetch('/api/product');

    return await response.json();
};

export const getProduct = async (id: number): Promise<Product> => {
    const response = await fetch(`/api/product/${id}`);

    return await response.json();
}