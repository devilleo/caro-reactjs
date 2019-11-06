import React from "react"

import FacebookLogin from "react-facebook-login"

import GoogleLogin from "react-google-login"

const FacebookGoogle = ({ props }) => {
  const { LoginWithFacebook, LoginWithGoogle } = props

  const responseFacebook = response => {
    console.log(response)
    if (response.status === "unknown") {
      console.log("log in with facebook fail")
    } else {
      LoginWithFacebook(response)
    }
  }

  const responseGoogle = response => {
    if (response.error === "popup_closed_by_user") {
      console.log("log in with google fail")
    } else {
      var result = {email: response.w3.U3}
      LoginWithGoogle(result)
    }
  }

  return (
    <div className="App">
      <FacebookLogin
        appId="2307377392925722" //APP ID NOT CREATED YET
        fields="name,email,picture, gender, birthday"
        callback={responseFacebook}
        cssClass="my-facebookgoogle-button-class"
        icon="fa-facebook"
        autoLoad={false}
        textButton="&nbsp;&nbsp;Login with Facebook"
      />
      <br />
      <br />

      <GoogleLogin
        clientId="184251590251-0tfh67fk69sc0ll4bhljgonc44csvfup.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        render={renderProps => (
          <button
            className="my-facebookgoogle-button-class"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <i className="fa fa-google"></i>
            <span>&nbsp;&nbsp;</span>Login with Google
          </button>
        )}
      />
    </div>
  )
}

export default FacebookGoogle
