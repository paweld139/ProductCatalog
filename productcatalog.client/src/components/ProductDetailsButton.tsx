import {
    Button
} from "reactstrap";

import {
    Product
} from "../interfaces";

import {
    useNavigate
} from "react-router-dom";

import {
    useCallback
} from "react";

interface Props {
    product: Product
}

const ProductDetailsButton = ({
    product
}: Props) => {
    const navigate = useNavigate();

    const goToProductDetails = useCallback(() => navigate(`/productDetails/${product.id}`), [navigate, product.id]);

    return (
        <Button
            onClick={goToProductDetails}
            color="primary"
        >
            Details
        </Button>
    );
}

export default ProductDetailsButton;