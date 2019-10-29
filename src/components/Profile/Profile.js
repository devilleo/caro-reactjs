import React from "react"

const Profile = ({ props }) => {
  const { userInfoForUpdateProfile } = props
  // console.log(userInfoForUpdateProfile, " and ", userInfo)
  return (
    <div className="col-md-12" style={{padding:'0px', }}>
      <div className="card profileArea" style={{ padding: "5% 20%" }}>
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
                  display: 'table',
                  margin: '0 auto'
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
                    type="text"
                    className="form-control"
                    value={userInfoForUpdateProfile.email}
                    onChange={() => true}
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
                    value={userInfoForUpdateProfile.firstName}
                    onChange={() => true}
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
                    value={userInfoForUpdateProfile.lastName}
                    onChange={() => true}
                  ></input>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label className="control-label">Adress</label>
                  <input
                    placeholder="Home Adress"
                    type="text"
                    className="form-control"
                    value={userInfoForUpdateProfile.address}
                    onChange={() => true}
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
                    value={userInfoForUpdateProfile.city}
                    onChange={() => true}
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
                    value={userInfoForUpdateProfile.country}
                    onChange={() => true}
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
                    value={userInfoForUpdateProfile.aboutMe}
                    onChange={() => true}
                  ></textarea>
                </div>
              </div>
            </div>
            <button type="submit" className="btn-fill pull-right btn btn-info">
              Update Profile
            </button>
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
