import { connect } from "react-redux"
import {
  loginSubmit,
  emailOnchange,
  passwordOnchange,
  logOut,
  LoginModalOpen,
  LoginModalClose,
  LoginWithFacebook,
  LoginWithGoogle
} from "../actions/login_actions"
import {
  registerSubmit,
  emailRegisterOnchange,
  passwordRegisterOnchange,
  passwordConfirmRegisterOnchange,
  RegisterModalOpen,
  RegisterModalClose
} from "../actions/register_action"
import {
  updateProfile,
  refreshProfile,
  firstNameProfileOnchange,
  lastNameProfileOnchange,
  addressProfileOnchange,
  cityProfileOnchange,
  countryProfileOnchange,
  aboutMeProfileOnchange,
  changePasswordModalOpen,
  changePasswordModalClose,
  oldPasswordOfChangePasswordOnChange,
  newPasswordOfChangePasswordOnChange,
  confirmNewPasswordOfChangePasswordOnChange,
  changePasswordSubmit,
} from "../actions/userProfile_actions"
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
  userInfoForUpdateProfile_state: state.userInfoForUpdateProfile_state,
  changePassword_modal: state.changePassword_modal,
  changePassword: state.changePassword,
  changePassword_state: state.changePassword_state
})

const mapDispatchToProps = dispatch => ({
  loginSubmit: () => dispatch(loginSubmit()),
  LoginWithFacebook: (response) => dispatch(LoginWithFacebook(response)),
  LoginWithGoogle: (response) => dispatch(LoginWithGoogle(response)),
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
  RegisterModalClose: () => dispatch(RegisterModalClose()),
  updateProfile: () => dispatch(updateProfile()),
  refreshProfile: userInfo => dispatch(refreshProfile(userInfo)),
  firstNameProfileOnchange: firstName =>
    dispatch(firstNameProfileOnchange(firstName)),
  lastNameProfileOnchange: lastName =>
    dispatch(lastNameProfileOnchange(lastName)),
  addressProfileOnchange: address => dispatch(addressProfileOnchange(address)),
  cityProfileOnchange: city => dispatch(cityProfileOnchange(city)),
  countryProfileOnchange: country => dispatch(countryProfileOnchange(country)),
  aboutMeProfileOnchange: aboutMe => dispatch(aboutMeProfileOnchange(aboutMe)),
  changePasswordModalOpen: () => dispatch(changePasswordModalOpen()),
  changePasswordModalClose: () => dispatch(changePasswordModalClose()),
  oldPasswordOfChangePasswordOnChange: oldPassword =>
    dispatch(oldPasswordOfChangePasswordOnChange(oldPassword)),
  newPasswordOfChangePasswordOnChange: newPassword =>
    dispatch(newPasswordOfChangePasswordOnChange(newPassword)),
  confirmNewPasswordOfChangePasswordOnChange: confirmNewPassword =>
    dispatch(confirmNewPasswordOfChangePasswordOnChange(confirmNewPassword)),
  changePasswordSubmit: () => dispatch(changePasswordSubmit()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
