export interface Tag {
    id: number;
    name: string;
}

export interface Dimensions {
    id: number;
    width: number;
    height: number;
    depth: number;
}

export interface Review {
    id: number;
    rating: number;
    comment: string;
    date: Date;
    reviewerName: string;
    reviewerEmail: string;
}

export interface Meta {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    barcode: string;
    qrCode: string;
}

export interface Image {
    id: number;
    url: string;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tagsCollection?: Tag[];
    brand?: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilistyStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    imagesCollection?: Image[];
    thumbnail: string;
}

export interface GridElementImage {
    alt: string;
    src: string;
}

export interface GridElementButton {
    text: string;
    onClick: () => void;
}

export interface GridElement {
    image: GridElementImage,
    title: string;
    subtitle: string;
    text: string;
    button: GridElementButton;
}