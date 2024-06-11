import {
    useParams
} from "react-router-dom";

import {
    CarouselElement,
    Product
} from "../interfaces";

import {
    useCallback,
    useEffect,
    useMemo,
    useState
} from "react";

import {
    getProduct
} from "../requests";

import ProductFooter from "../components/ProductFooter";

import {
    Col,
    Container,
    List,
    Row
} from "reactstrap";

import AppCarousel from "../components/AppCarousel";

import AppRating from "../components/AppRating";

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

    const images = useMemo<CarouselElement[] | undefined>(() => product?.imagesCollection?.map(image => ({
        src: image.url,
        altText: product?.title
    })), [product]);

    return product && (
        <Container fluid className="bg-dark text-white">
            <Row className="align-items-center">
                <Col>
                    {images &&
                        <AppCarousel
                            items={images}
                        />}
                </Col>

                <Col xs="auto">
                    <ProductFooter
                        product={product}
                        withoutDetailsButton
                    />
                </Col>
            </Row>

            <h1>{product.title}</h1>

            <h2>{product.brand}</h2>

            <h3>{product.category}</h3>

            <p>{product.description}</p>

            <hr />

            <Row>
                <Col>
                    <h4>Details</h4>

                    <dl>
                        <dt>SKU</dt>
                        <dd>{product.sku}</dd>

                        <dt>Weight</dt>
                        <dd>{product.weight}</dd>

                        <dt>Dimensions</dt>
                        <dd>{product.dimensions.height} x {product.dimensions.width} x {product.dimensions.depth}</dd>

                        <dt>Warranty Information</dt>
                        <dd>{product.warrantyInformation}</dd>

                        <dt>Shipping Information</dt>
                        <dd>{product.shippingInformation}</dd>

                        <dt>Availability Status</dt>
                        <dd>{product.availabilityStatus}</dd>

                        <dt>Return Policy</dt>
                        <dd>{product.returnPolicy}</dd>

                        <dt>Minimum Order Quantity</dt>
                        <dd>{product.minimumOrderQuantity}</dd>

                        <dt>Meta</dt>
                        <dd>
                            <dl>
                                <dt>Barcode</dt>
                                <dd>{product.meta.barcode}</dd>

                                <dt>QR Code</dt>
                                <dd>
                                    <img src={product.meta.qrCode} alt="QR Code" />
                                </dd>
                            </dl>
                        </dd>
                    </dl>
                </Col>

                <Col>
                    <h4>Reviews</h4>

                    <List>
                        {product.reviews.map(review => (
                            <li key={review.id}>
                                <h5>{review.reviewerName}</h5>

                                <p>{review.comment}</p>

                                <p><AppRating value={review.rating} /></p>

                                <p>{new Date(review.date).toLocaleString()}</p>
                            </li>
                        ))}
                    </List>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;