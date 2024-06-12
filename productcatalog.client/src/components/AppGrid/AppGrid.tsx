import {
    GridElement
} from "../../interfaces";

import styles from './AppGrid.module.css';

import AppCard from "../AppCard";

interface Props {
    elements: GridElement[];
}

const AppGrid = ({
    elements
}: Props) => {
    return (
        <div className={styles.container}>
            {elements.map((element, i) =>
                <AppCard
                    key={i}
                    title={element.title}
                    subtitle={element.subtitle}
                    text={element.text}
                    footer={element.footer}
                    image={element.image}
                />
            )}
        </div>
    );
};

export default AppGrid;