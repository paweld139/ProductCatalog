import {
    Button
} from "reactstrap";

import {
    Product
} from "../interfaces";

interface Props {
    product: Product
}

const ProductDetailsButton = ({
    product
}: Props) => {

    return (
        <Button
            onClick={() => alert(JSON.stringify(product))}
            color="primary"
        >
            Details
        </Button>
    );
}

export default ProductDetailsButton;