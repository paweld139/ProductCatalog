import ProductDetails from "./Views/ProductDetails";

import ProductList from "./Views/ProductList";

import {
    AppRoute
} from "./interfaces";

const AppRoutes: AppRoute[] = [
    {
        index: true,
        element: <ProductList />,
        name: 'Product list',
        subroutes: [
            {
                path: '/productDetails/:id',
                element: <ProductDetails />,
                name: 'Product details'
            }
        ]
    }
];

export default AppRoutes;