import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";

import {
    faStar
} from "@fortawesome/free-solid-svg-icons";

import {
    IconProp
} from '@fortawesome/fontawesome-svg-core';

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
                        icon={faStar as IconProp}
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