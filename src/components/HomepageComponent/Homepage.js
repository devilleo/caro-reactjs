import React from "react";
import {Button} from "react-bootstrap";

const Homepage = ({props}) => {
  const {userInfo, logOut} = props;
  return (
    <div>
      <h3>{userInfo.email === ""? "đăng nhập đi!":"Chào "+userInfo.email}</h3>
      <Button variant="secondary" onClick={()=> logOut()}>Đăng xuất</Button>
    </div>
  );
}

export default Homepage;
