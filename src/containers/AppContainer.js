import { connect } from "react-redux"
import {
  loginSubmit,
  emailOnchange,
  passwordOnchange,
  logOut,
  LoginModalOpen,
  LoginModalClose
} from "../actions/login_actions"
import {
  registerSubmit,
  emailRegisterOnchange,
  passwordRegisterOnchange,
  passwordConfirmRegisterOnchange,
  RegisterModalOpen,
  RegisterModalClose
} from "../actions/register_action"
import App from "../components/App"

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  login: state.login,
  login_state: state.login_state,
  register: state.register,
  register_state: state.register_state,
  login_modal: state.login_modal,
  register_modal: state.register_modal,
  userInfoForUpdateProfile: state.userInfoForUpdateProfile,
})

const mapDispatchToProps = dispatch => ({
  loginSubmit: () => dispatch(loginSubmit()),
  emailOnchange: email => dispatch(emailOnchange(email)),
  passwordOnchange: password => dispatch(passwordOnchange(password)),
  logOut: () => dispatch(logOut()),
  registerSubmit: () => dispatch(registerSubmit()),
  emailRegisterOnchange: email => dispatch(emailRegisterOnchange(email)),
  passwordRegisterOnchange: password =>
    dispatch(passwordRegisterOnchange(password)),
  passwordConfirmRegisterOnchange: passwordConfirm =>
    dispatch(passwordConfirmRegisterOnchange(passwordConfirm)),
  LoginModalOpen: () => dispatch(LoginModalOpen()),
  LoginModalClose: () => dispatch(LoginModalClose()),
  RegisterModalOpen: () => dispatch(RegisterModalOpen()),
  RegisterModalClose: () => dispatch(RegisterModalClose())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
