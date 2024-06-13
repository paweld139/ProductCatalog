import 'bootstrap/dist/css/bootstrap.min.css';

import AppRoutes from "./AppRoutes";

import {
    Route,
    Routes
} from 'react-router-dom';

import {
    Container
} from 'reactstrap';

import AppBreadcrumb from './components/AppBreadcrumb';

import {
    useEffect
} from 'react';

function App() {
    const flatRoutes = AppRoutes
        .reduce((acc, route) => {
            acc.push(route);

            if (route.subroutes) {
                acc.push(...route.subroutes);
            }
            return acc;
        }, [] as typeof AppRoutes);

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    }, []);

    return (
        <Container fluid>
            <AppBreadcrumb routes={flatRoutes} />

            <Routes>
                {flatRoutes.map((route) => (
                    <Route
                        key={route.name}
                        {...route}
                    />
                ))}
            </Routes>
        </Container>
    );
}

export default App;