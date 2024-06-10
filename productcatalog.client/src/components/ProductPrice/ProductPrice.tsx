import clsx from "clsx";

import {
    Product
} from "../../interfaces";

import styles from './ProductPrice.module.css';

import {
    useMemo
} from "react";

import {
    Badge,
    Col,
    Container,
    Row
} from "reactstrap";

interface Props {
    product: Product
}

const ProductPrice = ({
    product
}: Props) => {
    const isDiscounted = useMemo(() => product.discountPercentage > 0, [product.discountPercentage]);

    return (
        <Container
            className="p-0"
            fluid
        >
            <Row className="g-1">
                <Col className={clsx(isDiscounted && styles.discounted)}>
                    {product.price}$
                </Col>

                {isDiscounted && (
                    <>
                        <Col>
                            {(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}$
                        </Col>

                        <Col>
                            <Badge color="danger">
                                -{product.discountPercentage}%
                            </Badge>
                        </Col>
                    </>
                )}
            </Row>
        </Container>
    );
};

export default ProductPrice;