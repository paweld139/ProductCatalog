
import {
    useCallback,
    useMemo,
    useState
} from 'react';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';

import {
    CarouselElement
} from '../interfaces';

interface Props {
    items: CarouselElement[];
}

const AppCarousel = ({
    items,
    ...args
}: Props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const [animating, setAnimating] = useState(false);

    const next = useCallback(() => {
        if (animating) return;

        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;

        setActiveIndex(nextIndex);
    }, [activeIndex, animating, items.length]);

    const previous = useCallback(() => {
        if (animating) return;

        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;

        setActiveIndex(nextIndex);
    }, [activeIndex, animating, items.length]);

    const goToIndex = useCallback((newIndex: number) => {
        if (animating) return;

        setActiveIndex(newIndex);
    }, [animating]);

    const slides = useMemo(() => items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} className="img-fluid" />

                {item.text &&
                    <CarouselCaption
                        captionText={item.header}
                        captionHeader={item.text}
                    />}
            </CarouselItem>
        );
    }), [items]);

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            {...args}
        >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />

            {slides}

            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />

            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    );
}

export default AppCarousel;