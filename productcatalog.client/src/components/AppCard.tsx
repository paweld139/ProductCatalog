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
    defaultTitlesProps?: boolean,
    className?: string
}

const AppCard = ({
    header,
    title,
    subtitle,
    text,
    footer,
    image,
    defaultTitlesProps,
    className
}: Props) => {
    return (
        <Card className={className}>
            {image &&
                <img
                    alt={image.alt}
                    src={image.src}
                />}

            {header &&
                <CardHeader>
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
                <CardFooter>
                    {footer}
                </CardFooter>}
        </Card>
    );
};

export default AppCard;