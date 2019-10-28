import React from "react";

const Homepage = ({props}) => {
  const {userInfo} = props;
  return (
    <div>
      <h3>{userInfo.email === ""? "đăng nhập đi!":"Chào "+userInfo.email}</h3>
    </div>
  );
}

export default Homepage;
