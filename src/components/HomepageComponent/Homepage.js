import React from "react";

const Homepage = ({props}) => {
  const {userInfo} = props;
  return (
    <div>
      <h3>{userInfo.email === ""? "đăng nhập đi!":((userInfo.firstName===undefined && userInfo.lastName ===undefined) || (userInfo.firstName===null && userInfo.lastName ===null))? "Hello No name": "Hello " + userInfo.lastName+" "+userInfo.firstName}</h3>
    </div>
  );
}

export default Homepage;
