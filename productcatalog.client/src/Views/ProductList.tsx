import {
    useEffect,
    useState,
    useCallback,
    useMemo
} from 'react';

import {
    GridElement,
    Product
} from '../interfaces';

import {
    getProducts
} from '../requests';

import AppGrid from '../components/AppGrid/AppGrid';

import ProductBasicInformation from '../components/ProductBasicInformation';

import AppAccordion from '../components/AppAccordion';

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>();

    const populateProducts = useCallback(async () => {
        const data = await getProducts();

        setProducts(data);
    }, []);

    useEffect(() => {
        populateProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const elements = useMemo<GridElement[] | undefined>(() => products?.map(product => ({
        title: product.title,
        subtitle: (
            <>
                {product.brand}
                {product.brand && ' - '}
                {product.category}
            </>
        ),
        text: product.description,
        image: {
            alt: product.title,
            src: product.thumbnail
        },
        footer: <ProductBasicInformation product={product} />
    })), [products]);

    const contents = elements === undefined
        ? <p><em>Loading...</em></p>
        :
        <AppGrid
            elements={elements}
        />

    return (
        <>
            <h1>Product catalog</h1>

            <AppAccordion
                header="Filters"
                className="mb-3"
            >
                Filters will go here
            </AppAccordion>

            {contents}
        </>
    );
};

export default ProductList;