import 'bootstrap/dist/css/bootstrap.min.css';

import AppRoutes from "./AppRoutes";

import {
    Route,
    Routes
} from 'react-router-dom';

function App() {
    return (
        <Routes>
            {AppRoutes.map((route) => (
                <Route
                    key={route.name}
                    {...route}
                />
            ))}
        </Routes>
    );
}

export default App;