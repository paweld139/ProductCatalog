import {
    useEffect,
    useState,
    useCallback,
    useMemo
} from 'react';

import {
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

import {
    Form,
    FormGroup,
    Input,
    Label,
    Row
} from 'reactstrap';

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

    return (
        <>
            <h1>Product catalog</h1>

            <AppAccordion
                header="Filters"
                className="mb-3"
            >
                <Form>
                    <Row xs="3">
                        <FormGroup>
                            <Label for="category">Category</Label>
                            <Input
                                name="category"
                                id="category"
                                type="search"
                                onChange={e => setSearch({ ...search, category: e.target.value })}
                                value={search.category}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="minPrice">Minimum price</Label>
                            <Input
                                name="minPrice"
                                id="minPrice"
                                type="number"
                                onChange={e => setSearch({ ...search, minPrice: +e.target.value })}
                                value={search.minPrice}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="maxPrice">Maximum price</Label>
                            <Input
                                name="maxPrice"
                                id="maxPrice"
                                type="number"
                                onChange={e => setSearch({ ...search, maxPrice: +e.target.value })}
                                value={search.maxPrice}
                            />
                        </FormGroup>
                    </Row>
                </Form>
            </AppAccordion>

            {contents}
        </>
    );
};

export default ProductList;