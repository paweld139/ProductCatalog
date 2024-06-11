import {
    Product
} from "../interfaces";

import {
    Badge,
    Col,
    Row
} from "reactstrap";

interface Props {
    product: Product
}

const ProductTags = ({
    product
}: Props) => {
    return (
        <Row className="g-1">
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
    );
};

export default ProductTags;