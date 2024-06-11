import {
    Product
} from "../interfaces";

interface Props {
    product: Product
}

const ProductInformation = ({
    product
}: Props) => {
    return (
        <>
            <h4>Information</h4>

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
        </>
    );
};

export default ProductInformation;