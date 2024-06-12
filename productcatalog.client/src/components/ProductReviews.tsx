import {
    CardBody,
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardSubtitle
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

            {product.reviews.map(review => (
                <Card
                    key={review.id}
                    color="dark"
                    inverse
                    className="mb-2 border-light border-opacity-25"
                >
                    <CardHeader className="border-light border-opacity-25">{review.reviewerName}</CardHeader>

                    <CardBody>
                        <CardTitle>{review.comment}</CardTitle>

                        <CardSubtitle>
                            <AppRating value={review.rating} />
                        </CardSubtitle>
                    </CardBody>

                    <CardFooter className="border-light border-opacity-25">{new Date(review.date).toLocaleString()}</CardFooter>
                </Card>
            ))}
        </>
    );
};

export default ProductReviews;