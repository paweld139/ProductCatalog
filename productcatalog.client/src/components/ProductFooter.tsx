import {
    Product
} from "../interfaces";

import {
    Col,
    Container,
    Row
} from "reactstrap";

import ProductPrice from "./ProductPrice/ProductPrice";

import AppRating from "./AppRating";

import ProductTags from "./ProductTags";

import ProductStock from "./ProductStock";

import ProductDetailsButton from "./ProductDetailsButton";

interface Props {
    product: Product,
    withDetailsButton?: boolean
}

const ProductFooter = ({
    product,
    withDetailsButton
}: Props) => {
    return (
        <Container
            className="p-0"
            fluid
        >
            <Row className="mb-2">
                <Col>
                    <ProductStock product={product} />
                </Col>

                <Col xs="auto">
                    <ProductPrice product={product} />
                </Col>
            </Row>

            <ProductTags product={product} />

            <Row className="align-items-center">
                <Col>
                    <AppRating value={product.rating} />
                </Col>

                {withDetailsButton !== true &&
                    <Col xs="auto">
                        <ProductDetailsButton product={product} />
                    </Col>}
            </Row>
        </Container>
    );
};

export default ProductFooter;