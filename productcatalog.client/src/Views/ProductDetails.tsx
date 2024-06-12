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

import ProductBasicInformation from "../components/ProductBasicInformation";

import {
    Col,
    Row
} from "reactstrap";

import AppCarousel from "../components/AppCarousel";

import ProductInformation from "../components/ProductInformation";

import ProductReviews from "../components/ProductReviews";

import ProductHeader from "../components/ProductHeader";

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
        <>
            <Row className="align-items-center">
                <Col md="6">
                    {images &&
                        <AppCarousel
                            items={images}
                        />}
                </Col>

                <Col>
                    <ProductHeader product={product} />
                </Col>

                <Col md="auto">
                    <ProductBasicInformation
                        product={product}
                        withoutDetailsButton
                    />
                </Col>
            </Row>

            <hr />

            <Row>
                <Col>
                    <ProductInformation product={product} />
                </Col>

                <Col>
                    <ProductReviews product={product} />
                </Col>
            </Row>
        </>
    );
};

export default ProductDetails;