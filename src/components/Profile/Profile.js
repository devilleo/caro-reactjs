import React from "react"
import ChangePassword from "../ChangePassword/ChangePassword"
const Profile = ({ props }) => {
  const { userInfoForUpdateProfile, userInfoForUpdateProfile_state, userInfo, changePasswordModalOpen } = props
  const {
    updateProfile,
    refreshProfile,
    firstNameProfileOnchange,
    lastNameProfileOnchange,
    addressProfileOnchange,
    cityProfileOnchange,
    countryProfileOnchange,
    aboutMeProfileOnchange
  } = props

  // console.log(userInfo)
  return (
    <div className="col-md-12 profileArea" style={{ padding: "5% 15%" }}>
      <div className="card " style={{ padding: "5% 20%" }}>
        <div className="header">
          <h4 className="title">Your Profile</h4>
          <p className="category"></p>
        </div>
        <div className="content">
          <form>
            <div className="row">
              <div
                className=""
                style={{
                  maxWidth: "250px",
                  maxHeight: "250px",
                  marginRight: "0px",
                  display: "table",
                  margin: "0 auto"
                }}
              >
                <img
                  alt=""
                  src="login.icon.png"
                  style={{ width: "100%" }}
                ></img>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="col-md-5">
                <div className="form-group">
                  <label className="control-label">Username (disabled)</label>
                  <input
                    placeholder="Username"
                    disabled=""
                    readOnly
                    type="text"
                    className="form-control"
                    value={userInfoForUpdateProfile.email || ""}
                  ></input>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label">First name</label>
                  <input
                    placeholder="First name"
                    type="text"
                    className="form-control"
                    value={userInfoForUpdateProfile.firstName || ""}
                    onChange={e => firstNameProfileOnchange(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label">Last name</label>
                  <input
                    placeholder="Last name"
                    type="text"
                    className="form-control"
                    value={userInfoForUpdateProfile.lastName || ""}
                    onChange={e => lastNameProfileOnchange(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label className="control-label">Address</label>
                  <input
                    placeholder="Home Address"
                    type="text"
                    className="form-control"
                    value={userInfoForUpdateProfile.address || ""}
                    onChange={e => addressProfileOnchange(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label">City</label>
                  <input
                    placeholder="City"
                    type="text"
                    className="form-control"
                    value={userInfoForUpdateProfile.city || ""}
                    onChange={e => cityProfileOnchange(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label">Country</label>
                  <input
                    placeholder="Country"
                    type="text"
                    className="form-control"
                    value={userInfoForUpdateProfile.country || ""}
                    onChange={e => countryProfileOnchange(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label
                    htmlFor="formControlsTextarea"
                    className="control-label"
                  >
                    About Me
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Here can be your description"
                    id="formControlsTextarea"
                    className="form-control"
                    value={userInfoForUpdateProfile.aboutMe || ""}
                    onChange={e => aboutMeProfileOnchange(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            {userInfoForUpdateProfile_state.isUpdateProfilePending && (
              <div style={{ color: "red" }}>Please wait...</div>
            )}
            {userInfoForUpdateProfile_state.isUpdateProfileSuccess && (
              <div style={{ color: "red" }}>Success.</div>
            )}
            {userInfoForUpdateProfile_state.isUpdateProfileError && (
              <div style={{ color: "red" }}>
                {userInfoForUpdateProfile_state.isUpdateProfileError.message}
              </div>
            )}
            <br></br>
            <div className="row">
              <div className="col-md-4" style={{textAlign:'center'}}>
                <button
                  type="button"
                  onClick={updateProfile}
                  className="btn-fill pull-right btn btn-info"
                >
                  Update Profile
                </button>
              </div>
              <div className="col-md-4" style={{textAlign:'center'}}>
                <button
                  type="button"
                  onClick={() => refreshProfile(userInfo)}
                  className="btn-fill pull-right btn btn-info"
                >
                  Refresh
                </button>
              </div>
              <div className="col-md-4" style={{textAlign:'center'}}>
                  <button
                    type="button"
                    onClick={() => changePasswordModalOpen()}
                    className="btn-fill pull-right btn btn-info"
                  >
                    Change Password
                  </button>
                  <ChangePassword props={props}></ChangePassword>
              </div>
              
              
            </div>
            
            <div className="clearfix"></div>
          </form>
          <div className="footer">
            <div className="stats">
              <i></i>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
