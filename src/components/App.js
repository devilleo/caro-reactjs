import React from "react";

import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Login from './LoginComponent/Login'
import Register from './RegisterComponent/Register'
import Homepage from './HomepageComponent/Homepage'


const App = props => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Homepage</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/login">
                        <Login props={props}/>
                    </Route>
                    <Route path="/register">
                        <Register props={props}/>
                    </Route>
                     <Route path="/">
                        <Homepage props={props}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

