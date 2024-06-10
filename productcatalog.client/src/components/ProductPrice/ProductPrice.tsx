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
        <Row
            xs="auto"
            noGutters
            className="align-items-center gap-1"
        >
            <div className={clsx(isDiscounted && styles.discounted)}>
                {product.price}$
            </div>

            {isDiscounted && (
                <>
                    <div>
                        {(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}$
                    </div>

                    <Badge color="danger">
                        -{product.discountPercentage}%
                    </Badge>
                </>
            )}
        </Row>
    );
};

export default ProductPrice;