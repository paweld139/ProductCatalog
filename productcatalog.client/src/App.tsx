import 'bootstrap/dist/css/bootstrap.min.css';

import AppRoutes from "./AppRoutes";

import {
    Route,
    Routes
} from 'react-router-dom';

import {
    Container
} from 'reactstrap';

import useCurrentRoute from './hooks/useCurrentRoute';

import AppBreadcrumb from './components/AppBreadcrumb';

function App() {
    const flatRoutes = AppRoutes
        .reduce((acc, route) => {
            acc.push(route);

            if (route.subroutes) {
                acc.push(...route.subroutes);
            }
            return acc;
        }, [] as typeof AppRoutes);

    const currentRoute = useCurrentRoute(flatRoutes);

    return (
        <div className="p-1">
            <AppBreadcrumb routes={flatRoutes} />

            <Container
                className={currentRoute?.className}
                fluid
            >
                <Routes>
                    {flatRoutes.map((route) => (
                        <Route
                            key={route.name}
                            {...route}
                        />
                    ))}
                </Routes>
            </Container>
        </div>
    );
}

export default App;