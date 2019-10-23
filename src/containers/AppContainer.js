import { connect } from "react-redux";
import { loginSubmit, emailOnchange, passwordOnchange, logOut } from "../actions/login_actions";
import App from "../components/App";

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  login: state.login,
  login_state: state.login_state
});

const mapDispatchToProps = dispatch => ({
  loginSubmit: () => dispatch(loginSubmit()),
  emailOnchange: (email) => dispatch(emailOnchange(email)),
  passwordOnchange: (password) => dispatch(passwordOnchange(password)),
  logOut: () => dispatch(logOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
