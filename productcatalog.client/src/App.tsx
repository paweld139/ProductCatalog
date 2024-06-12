import 'bootstrap/dist/css/bootstrap.min.css';

import AppRoutes from "./AppRoutes";

import {
    Link,
    Route,
    Routes
} from 'react-router-dom';

import {
    Breadcrumb,
    BreadcrumbItem,
    Container
} from 'reactstrap';

import useCurrentRoute from './hooks/useCurrentRoute';

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
            <Breadcrumb>
                {flatRoutes
                    .filter((route) => currentRoute && (route === currentRoute || route.subroutes?.includes(currentRoute)))
                    .map((route) => (
                        <BreadcrumbItem
                            key={route.name}
                            active={route === currentRoute}
                        >
                            {route !== currentRoute ? <Link to={route.path ?? "/"}>{route.name}</Link> : route.name}
                        </BreadcrumbItem>
                    ))}
            </Breadcrumb>

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