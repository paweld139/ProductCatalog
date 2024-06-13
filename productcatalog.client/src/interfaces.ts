import React from "react";
import { InputType } from "reactstrap/types/lib/Input";

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
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    imagesCollection?: Image[];
    thumbnail: string;
}

export interface ImageProps {
    alt: string;
    src: string;
}

export interface GridElement {
    image: ImageProps,
    title: React.ReactNode;
    subtitle: React.ReactNode;
    text: React.ReactNode;
    footer?: JSX.Element;
}

export interface CarouselElement {
    src: string;
    altText: string;
    header?: string;
    text?: string;
}

export interface AppRoute {
    index?: boolean;
    path?: string;
    element: JSX.Element;
    name: string;
    subroutes?: AppRoute[];
}

export interface TableColumn<T> {
    field: keyof T;
    title: string;
}

export interface Attribute {
    name: string;
    value: React.ReactNode;
}

export interface ProductSearch {
    category: string;
    minPrice: number;
    maxPrice: number;
}

export interface FormInput<T> {
    type: InputType;
    label: string;
    field: keyof T;
}