import React from "react";

import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Login from './LoginComponent/Login'
import Register from './RegisterComponent/Register'
import Homepage from './HomepageComponent/Homepage'
import ShowGame from '../containers/ShowGame'

const App = props => {
    return (
        <Router>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Caro Game By Kha</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link><Link to="/">Homepage</Link></Nav.Link>
                <NavDropdown title="Game" id="collasible-nav-dropdown">
                    <NavDropdown.Item><Link to="/game">Play 2vs2 offline</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="">Play online</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><Link to="/game">Fight for AI</Link></NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                <Nav.Link><Link to="/register">Register</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/login">
                        <Login props={props}/>
                    </Route>
                    <Route path="/register">
                        <Register props={props}/>
                    </Route>
                    <Route path="/game">
                        <ShowGame props={props}/>
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

