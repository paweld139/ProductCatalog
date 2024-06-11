import {
    useParams
} from "react-router-dom";

import {
    Product
} from "../interfaces";

import {
    useCallback,
    useEffect,
    useState
} from "react";

import {
    getProduct
} from "../requests";

import ProductFooter from "../components/ProductFooter";

import {
    Col,
    Container,
    Row
} from "reactstrap";

const ProductDetails = () => {
    const [product, setProduct] = useState<Product | null>(null);

    const { id } = useParams();

    const executeGetProduct = useCallback(async () => {
        if (!id)
            return;

        const product = await getProduct(parseInt(id));

        setProduct(product);
    }, [id]);

    useEffect(() => {
        executeGetProduct();
    }, [executeGetProduct]);

    return product && (
        <Container>
            <Row className="align-items-center">
                <Col>
                    <img src={product.thumbnail} alt={product.title} />
                </Col>

                <Col xs="auto">
                    <ProductFooter
                        product={product}
                        withDetailsButton
                    />
                </Col>
            </Row>

            <h1>{product.title}</h1>

            <h2>{product.brand}</h2>

            <h3>{product.category}</h3>

            <p>{product.description}</p>
        </Container>
    );
};

export default ProductDetails;