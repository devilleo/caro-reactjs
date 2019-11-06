import React, { useEffect } from "react"

import "../App.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
// import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"

import Login from "./LoginComponent/Login"
import Register from "./RegisterComponent/Register"
import Homepage from "./HomepageComponent/Homepage"
import ShowGame from "../containers/ShowGame"
import ShowGameAI from "../containers/ShowGameAI"
import ShowGameOnline from "../containers/ShowGameOnline"
import Profile from "./Profile/Profile"
import FindingAGame from "./GameOnline/FindingAGame"
import { connect } from "react-redux"

const App = props => {
  const { userInfo, LoginModalOpen, RegisterModalOpen, logOut, roomInfo } = props

  useEffect(() => {
    // console.log("mount it!")
    // socket.emit("finding room", userInfo)
  }, [userInfo]) // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour
  console.log("roomInfo: ", roomInfo)
  return (
    <Router>
      <Navbar style={{height:'5vh'}} collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          Caro VN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Homepage
            </Nav.Link>
            <NavDropdown title="Game" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/game">
                Play 1vs1 offline
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gameOnline">
                Play 1vs1 online
                </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/gameAI">
                Fight for AI
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav style={{ minWidth: "180px" }}>
            <Nav.Link
              hidden={userInfo.email !== ""}
              onClick={() => LoginModalOpen()}
            >
              Login
            </Nav.Link>
            <Nav.Link
              hidden={userInfo.email !== ""}
              onClick={() => RegisterModalOpen()}
            >
              Register
            </Nav.Link>
            <NavDropdown
              hidden={userInfo.email === ""}
              title={
                (userInfo.firstName === undefined &&
                  userInfo.lastName === undefined) ||
                (userInfo.firstName === null && userInfo.lastName === null)
                  ? "No name"
                  : userInfo.lastName + " " + userInfo.firstName
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/profile">
                Your Information
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => logOut()}>
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Login props={props}></Login>
      <Register props={props}></Register>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/login">
                        <Login props={props} />
                    </Route> */}
          {/* <Route path="/register">
                        <Register props={props} />
                    </Route> */}
          <Route exact path="/profile">
            {userInfo.email === "" ? (
              <Redirect to="/" />
            ) : (
              <Profile props={props}></Profile>
            )}
          </Route>
          <Route path="/game">
            {userInfo.email === "" ? (
              <Redirect to="/" />
            ) : (
              <ShowGame props={props} />
            )}
          </Route>
          <Route path="/gameAI">
            {userInfo.email === "" ? (
              <Redirect to="/" />
            ) : (
              <ShowGameAI props={props} />
            )}
          </Route>
          <Route path="/gameOnline">
            {userInfo.email === "" ? (
              <Redirect to="/" />
            ) 
            :
            
            (
              <ShowGameOnline props={props} />
            )
            }
          </Route>
          <Route path="/findGame">
              <FindingAGame props={props}></FindingAGame>
          </Route>
          <Route path="/">
            <Homepage props={props} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
const mapStateToProps = state => ({
  roomInfo: state.roomInfo
})
export default connect(mapStateToProps)(App)
