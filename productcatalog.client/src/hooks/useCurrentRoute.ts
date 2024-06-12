import {
    AppRoute
} from "../interfaces";

import {
    matchPath,
    useLocation
} from "react-router"


const useCurrentRoute = (routes: AppRoute[]) => {
    const location = useLocation();

    if (location.pathname === "/") {
        return routes.find((route) => route.index);
    }

    return routes.find((route) => route.path && matchPath({ path: route.path }, location.pathname));
};

export default useCurrentRoute;