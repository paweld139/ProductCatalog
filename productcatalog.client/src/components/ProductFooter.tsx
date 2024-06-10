import {
    Product
} from "../interfaces";

import {
    Button,
    Container,
    Row
} from "reactstrap";

import ProductPrice from "./ProductPrice/ProductPrice";

import AppRating from "./AppRating";

interface Props {
    product: Product
}

const ProductFooter = ({
    product
}: Props) => {
    return (
        <Container
            className="p-0"
        >
            <Row
                xs="auto"
                className="justify-content-between align-items-center mb-2"
            >
                <span>{product.stock} in stock</span>

                <ProductPrice product={product} />
            </Row>

            <Row
                xs="auto"
                className="justify-content-between align-items-center"
            >
                <AppRating value={product.rating} />

                <Button
                    onClick={() => alert(JSON.stringify(product))}
                >
                    Details
                </Button>
            </Row>
        </Container>
    );
};

export default ProductFooter;