import React from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle
} from 'reactstrap';

import {
    ImageProps
} from '../interfaces';

interface Props {
    header?: React.ReactNode;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    text?: React.ReactNode;
    footer?: React.ReactNode;
    image?: ImageProps;
    defaultTitlesProps?: boolean
}

const AppCard = ({
    header,
    title,
    subtitle,
    text,
    footer,
    image,
    defaultTitlesProps
}: Props) => {
    return (
        <Card
            color="dark"
            inverse
            className="mb-2 border-light border-opacity-25"
        >
            {image &&
                <img
                    alt={image.alt}
                    src={image.src}
                />}

            {header &&
                <CardHeader
                    className="border-light border-opacity-25"
                >
                    {header}
                </CardHeader>}

            {(title || subtitle || text) &&
                <CardBody>
                    {title &&
                        <CardTitle
                            tag={defaultTitlesProps ? undefined : "h5"}
                        >
                            {title}
                        </CardTitle>}

                    {subtitle &&
                        <CardSubtitle
                            className={defaultTitlesProps ? undefined : "mb-2"}
                            tag={defaultTitlesProps ? undefined : "h6"}
                        >
                            {subtitle}
                        </CardSubtitle>}

                    {text &&
                        <CardText>
                            {text}
                        </CardText>}
                </CardBody>}

            {footer &&
                <CardFooter
                    className="border-light border-opacity-25"
                >
                    {footer}
                </CardFooter>}
        </Card>
    );
};

export default AppCard;