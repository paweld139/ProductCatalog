import {
    useEffect,
    useState,
    useCallback
} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Product
} from './interfaces';

import {
    getProducts
} from './requests';

import {
    Container,
    Table
} from 'reactstrap';

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

    const contents = products === undefined
        ? <p><em>Loading...</em></p>
        :
        <Table
            striped
            bordered
            hover
            responsive
            dark            
        >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Discount Percentage</th>
                    <th>Rating</th>
                    <th>Stock</th>
                    <th>Brand</th>
                    <th>SKU</th>
                    <th>Weight</th>
                    <th>Warranty Information</th>
                    <th>Shipping Information</th>
                    <th>Availability Status</th>
                    <th>Return Policy</th>
                    <th>Minimum Order Quantity</th>
                    <th>Thumbnail</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product =>
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>{product.discountPercentage}</td>
                        <td>{product.rating}</td>
                        <td>{product.stock}</td>
                        <td>{product.brand}</td>
                        <td>{product.sku}</td>
                        <td>{product.weight}</td>
                        <td>{product.warrantyInformation}</td>
                        <td>{product.shippingInformation}</td>
                        <td>{product.shippingInformation}</td>
                        <td>{product.returnPolicy}</td>
                        <td>{product.minimumOrderQuantity}</td>
                        <td>
                            <img src={product.thumbnail} alt={product.title} />
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>;

    return (
        <Container fluid>
            <h1>Product catalog</h1>

            {contents}
        </Container>
    );
}

export default App;