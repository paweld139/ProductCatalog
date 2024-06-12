import {
    Table
} from "reactstrap";

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

            <Table
                striped
                bordered
                hover
                responsive
                dark
            >
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Value</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>SKU</td>
                        <td>{product.sku}</td>
                    </tr>

                    <tr>
                        <td>Weight</td>
                        <td>{product.weight}</td>
                    </tr>

                    <tr>
                        <td>Dimensions</td>
                        <td>{product.dimensions.height} x {product.dimensions.width} x {product.dimensions.depth}</td>
                    </tr>

                    <tr>
                        <td>Warranty Information</td>
                        <td>{product.warrantyInformation}</td>
                    </tr>

                    <tr>
                        <td>Shipping Information</td>
                        <td>{product.shippingInformation}</td>
                    </tr>

                    <tr>
                        <td>Availability Status</td>
                        <td>{product.availabilityStatus}</td>
                    </tr>

                    <tr>
                        <td>Return Policy</td>
                        <td>{product.returnPolicy}</td>
                    </tr>

                    <tr>
                        <td>Minimum Order Quantity</td>
                        <td>{product.minimumOrderQuantity}</td>
                    </tr>

                    <tr>
                        <td>Meta</td>
                        <td>
                            <Table
                                striped
                                bordered
                                hover
                                responsive
                                dark
                            >
                                <thead>
                                    <tr>
                                        <th>Attribute</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Barcode</td>
                                        <td>{product.meta.barcode}</td>
                                    </tr>

                                    <tr>
                                        <td>QR Code</td>
                                        <td>
                                            <img src={product.meta.qrCode} alt="QR Code" />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default ProductInformation;