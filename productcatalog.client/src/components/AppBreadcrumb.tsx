import useCurrentRoute from "../hooks/useCurrentRoute";

import {
    AppRoute
} from "../interfaces";

import {
    Link
} from 'react-router-dom';

import {
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';

interface Props {
    routes: AppRoute[]
}

const AppBreadcrumb = ({
    routes
}: Props) => {
    const currentRoute = useCurrentRoute(routes);

    return (
        <Breadcrumb className="px-1">
            {routes
                .filter((route) => currentRoute && (route === currentRoute || route.subroutes?.includes(currentRoute)))
                .map((route) => (
                    <BreadcrumbItem
                        key={route.name}
                        active={route === currentRoute}
                    >
                        {route == currentRoute ? route.name : <Link to={route.path ?? "/"}>{route.name}</Link>}
                    </BreadcrumbItem>
                ))}
        </Breadcrumb>
    );
};

export default AppBreadcrumb;