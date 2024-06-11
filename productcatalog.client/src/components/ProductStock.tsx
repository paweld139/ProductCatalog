import {
    Product
} from "../interfaces";

interface Props {
    product: Product
}

const ProductStock = ({
    product
}: Props) => {
    return (
        <>
            {product.stock} in stock
        </>
    );
};

export default ProductStock;