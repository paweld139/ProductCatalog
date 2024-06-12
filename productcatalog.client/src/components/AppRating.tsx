import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";

import {
    faStar
} from "@fortawesome/free-solid-svg-icons";

interface Props {
    value: number;
}

const AppRating = ({
    value
}: Props) => {
    return (
        <span>
            {Array.from({ length: 5 }).map((_, index) => {
                return (
                    <FontAwesomeIcon
                        icon={faStar}
                        key={index}
                        style={{
                            color: index < value ? 'gold' : 'lightgrey'
                        }}
                    />
                );
            })}
            {' '}
            {value}
        </span>
    );
};

export default AppRating;