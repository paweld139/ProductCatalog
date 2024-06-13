import {
    useEffect,
    useState,
    useCallback,
    useMemo
} from 'react';

import {
    FormInput,
    GridElement,
    Product,
    ProductSearch
} from '../interfaces';

import {
    getProducts
} from '../requests';

import AppGrid from '../components/AppGrid/AppGrid';

import ProductBasicInformation from '../components/ProductBasicInformation';

import AppAccordion from '../components/AppAccordion';

import AppForm from '../components/AppForm';

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>();

    const [search, setSearch] = useState<ProductSearch>({
        category: '',
        minPrice: 0,
        maxPrice: 0
    });

    const populateProducts = useCallback(async () => {
        const data = await getProducts();

        setProducts(data);
    }, []);

    useEffect(() => {
        populateProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const filteredProducts = useMemo<Product[] | undefined>(() => {
        if (products === undefined) {
            return;
        }

        return products.filter(product => {
            if (search.category !== '' && !product.category.toLowerCase().includes(search.category.toLowerCase())) {
                return false;
            }

            if (search.minPrice !== 0 && product.price < search.minPrice) {
                return false;
            }

            if (search.maxPrice !== 0 && product.price > search.maxPrice) {
                return false;
            }

            return true;
        });
    }, [products, search]);

    const elements = useMemo<GridElement[] | undefined>(() => filteredProducts?.map(product => ({
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
    })), [filteredProducts]);

    const contents = useMemo(() => elements === undefined
        ? <p><em>Loading...</em></p>
        : <AppGrid
            elements={elements}
        />, [elements]);

    const searchInputs = useMemo<FormInput<ProductSearch>[]>(() => [
        {
            label: 'Category',
            field: 'category',
            type: 'search'
        },
        {
            label: 'Minimum price',
            field: 'minPrice',
            type: 'number'
        },
        {
            label: 'Maximum price',
            field: 'maxPrice',
            type: 'number'
        }
    ], []);

    return (
        <>
            <h1>Product catalog</h1>

            <AppAccordion
                header="Filters"
                className="mb-3"
            >
                <AppForm
                    rowProps={{ xs: 1, sm: 2, md: 3 }}
                    inputs={searchInputs}
                    data={search}
                    setData={setSearch}
                />
            </AppAccordion>

            {contents}
        </>
    );
};

export default ProductList;