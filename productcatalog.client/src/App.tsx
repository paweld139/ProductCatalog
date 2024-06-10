import {
    useEffect,
    useState,
    useCallback,
    useMemo
} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
    GridElement,
    Product
} from './interfaces';

import {
    getProducts
} from './requests';

import {
    Container
} from 'reactstrap';

import AppGrid from './components/AppGrid/AppGrid';

function App() {
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
        subtitle: product.category,
        text: product.description,
        image: {
            alt: product.title,
            src: product.thumbnail
        },
        button: {
            text: 'Details',
            onClick: () => alert(JSON.stringify(product))
        }
    })), [products]);

    const contents = elements === undefined
        ? <p><em>Loading...</em></p>
        :
        <AppGrid
            elements={elements}
        />

    return (
        <Container fluid>
            <h1>Product catalog</h1>

            {contents}
        </Container>
    );
}

export default App;