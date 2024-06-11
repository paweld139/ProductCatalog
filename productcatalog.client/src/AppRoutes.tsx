import ProductDetails from "./Views/ProductDetails";

import ProductList from "./Views/ProductList";

const AppRoutes = [
    {
        index: true,
        element: <ProductList />,
        name: 'Product list'
    },
    {
        path: '/productDetails/:id',
        element: <ProductDetails />,
        name: 'Product details'
    }
];

export default AppRoutes;