import {
    Product
} from "../interfaces";

import AppRating from "./AppRating";

import AppCard from "./AppCard";

interface Props {
    product: Product
}

const ProductReviews = ({
    product
}: Props) => {
    return (
        <>
            <h4>Reviews</h4>

            {product.reviews.map(review => (
                <AppCard
                    key={review.id}
                    header={review.reviewerName}
                    title={review.comment}
                    subtitle={<AppRating value={review.rating} />}
                    footer={new Date(review.date).toLocaleString()}
                    className="mb-3"
                    defaultTitlesProps
                />
            ))}
        </>
    );
};

export default ProductReviews;