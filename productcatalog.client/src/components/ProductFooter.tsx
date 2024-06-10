import {
    Product
} from "../interfaces";

import {
    Badge,
    Button,
    Col,
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
            fluid
        >
            <Row className="mb-2">
                <Col>{product.stock} in stock</Col>

                <Col xs="auto">
                    <ProductPrice product={product} />
                </Col>
            </Row>

            <Row
                className="gap-1"
                noGutters
            >
                {product.tagsCollection?.map((tag, i) =>
                    <Col
                        key={i}
                        xs="auto"
                    >
                        <Badge color="secondary">
                            {tag.name}
                        </Badge>
                    </Col>
                )}
            </Row>

            <Row className="align-items-center">
                <Col>
                    <AppRating value={product.rating} />
                </Col>

                <Col xs="auto">
                    <Button
                        onClick={() => alert(JSON.stringify(product))}
                        color="primary"
                    >
                        Details
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductFooter;