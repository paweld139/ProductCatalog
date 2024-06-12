import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
    CardFooter
} from "reactstrap";

import {
    GridElement
} from "../../interfaces";

import styles from './AppGrid.module.css';

interface Props {
    elements: GridElement[];
}

const AppGrid = ({
    elements
}: Props) => {
    return (
        <div className={styles.container}>
            {elements.map((element, i) =>
                <Card
                    color="dark"
                    className="border-light border-opacity-25"
                    inverse
                    key={i}
                >
                    <img
                        alt={element.image.alt}
                        src={element.image.src}
                    />

                    <CardBody>
                        <CardTitle tag="h5">
                            {element.title}
                        </CardTitle>

                        <CardSubtitle
                            className="mb-2"
                            tag="h6"
                        >
                            {element.subtitle}
                        </CardSubtitle>

                        <CardText>
                            {element.text}
                        </CardText>
                    </CardBody>

                    <CardFooter>
                        {element.footer}
                    </CardFooter>
                </Card>
            )}
        </div>
    );
};

export default AppGrid;