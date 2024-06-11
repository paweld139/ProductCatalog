import {
    List
} from "reactstrap";

import {
    Product
} from "../interfaces";

import AppRating from "./AppRating";

interface Props {
    product: Product
}

const ProductReviews = ({
    product
}: Props) => {
    return (
        <>
            <h4>Reviews</h4>

            <List>
                {product.reviews.map(review => (
                    <li key={review.id}>
                        <h5>{review.reviewerName}</h5>

                        <p>{review.comment}</p>

                        <p>
                            <AppRating value={review.rating} />
                        </p>

                        <p>{new Date(review.date).toLocaleString()}</p>
                    </li>
                ))}
            </List>
        </>
    );
};

export default ProductReviews;