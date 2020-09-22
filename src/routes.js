import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Login from './pages/Login';
import ListRoutes from './pages/ListRoutes';
import AddRoutes from './pages/AddRoutes';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/listRoutes" component={ListRoutes}/>
                <Route path="/addRoutes" component={AddRoutes}/>
            </Switch>
        </Router>
    );
}

export default Routes;