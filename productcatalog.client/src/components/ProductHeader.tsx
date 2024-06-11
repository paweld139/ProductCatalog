import {
    Product
} from "../interfaces";

interface Props {
    product: Product
}

const ProductHeader = ({
    product
}: Props) => {
    return (
        <>
            <h1>{product.title}</h1>

            <h2>{product.brand}</h2>

            <h3>{product.category}</h3>

            <p>{product.description}</p>
        </>
    );
};

export default ProductHeader;