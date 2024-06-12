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

import './App.css';

function App() {
    const flatRoutes = AppRoutes
        .reduce((acc, route) => {
            acc.push(route);

            if (route.subroutes) {
                acc.push(...route.subroutes);
            }
            return acc;
        }, [] as typeof AppRoutes);

    return (
        <Container
            className="bg-dark text-white"
            fluid
        >
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