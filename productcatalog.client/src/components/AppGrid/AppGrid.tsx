import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
    CardFooter,
    Button
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
            {elements.map(element =>
                <Card
                    color="dark"
                    inverse
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

                    <CardFooter
                        className="text-end"
                    >
                        <Button
                            onClick={element.button.onClick}
                        >
                            {element.button.text}
                        </Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
};

export default AppGrid;