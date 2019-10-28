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
    const {userInfo, LoginModalOpen, logOut} = props
    return (
        <Router>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">Caro Game</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Homepage</Nav.Link>
                        <NavDropdown title="Game" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/game">Play 1vs1 offline</NavDropdown.Item>
                            <NavDropdown.Item>Play 1vs1 online</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Fight for AI</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link hidden={userInfo.email!==""} onClick={() => LoginModalOpen()}>Login</Nav.Link>
                        <Nav.Link hidden={userInfo.email!==""} as={Link} to="/register">Register</Nav.Link>
                        <NavDropdown hidden={userInfo.email===""} title={userInfo.email} id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={()=> logOut()}>Log out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Login props={props}></Login>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    {/* <Route path="/login">
                        <Login props={props} />
                    </Route> */}
                    <Route path="/register">
                        <Register props={props} />
                    </Route>
                    <Route path="/game">
                        <ShowGame props={props} />
                    </Route>
                    <Route path="/">
                        <Homepage props={props} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

