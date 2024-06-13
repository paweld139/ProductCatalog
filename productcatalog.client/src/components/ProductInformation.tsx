import {
    Attribute,
    Product,
    TableColumn
} from "../interfaces";

import AppTable from "./AppTable";

import {
    useMemo
} from "react";

interface Props {
    product: Product
}

const ProductInformation = ({
    product
}: Props) => {
    const columns = useMemo<TableColumn<Attribute>[]>(() => [
        {
            title: "Name",
            field: "name"
        },
        {
            title: "Value",
            field: "value"
        }
    ], []);

    const data = useMemo<Attribute[]>(() => [
        {
            name: "SKU",
            value: product.sku
        },
        {
            name: "Weight",
            value: product.weight
        },
        {
            name: "Dimensions",
            value: `${product.dimensions.height} x ${product.dimensions.width} x ${product.dimensions.depth}`
        },
        {
            name: "Warranty Information",
            value: product.warrantyInformation
        },
        {
            name: "Shipping Information",
            value: product.shippingInformation
        },
        {
            name: "Availability Status",
            value: product.availabilityStatus
        },
        {
            name: "Return Policy",
            value: product.returnPolicy
        },
        {
            name: "Minimum Order Quantity",
            value: product.minimumOrderQuantity
        },
        {
            name: "Meta",
            value: (
                <AppTable
                    data={[
                        {
                            name: "Barcode",
                            value: product.meta.barcode
                        },
                        {
                            name: "QR Code",
                            value: <img src={product.meta.qrCode} alt="QR Code" />
                        }
                    ]}
                    columns={columns}
                />
            )
        }
    ], [columns, product.availabilityStatus, product.dimensions.depth, product.dimensions.height, product.dimensions.width, product.meta.barcode, product.meta.qrCode, product.minimumOrderQuantity, product.returnPolicy, product.shippingInformation, product.sku, product.warrantyInformation, product.weight]);

    return (
        <>
            <h4>Information</h4>

            <AppTable
                data={data}
                columns={columns}
            />
        </>
    );
};

export default ProductInformation;