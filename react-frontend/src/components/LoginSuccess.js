import React from "react";
import {  Redirect, Route } from "react-router-dom";

import "./Form.css";


const LoginSuccess = ({ whoIsThis }) => {
  console.log(whoIsThis + "  inside login success");

  if (whoIsThis === "undefined") {
    return <div></div>;
  } else if (whoIsThis === "user") {
    return (
      <div>
        <Route exact path="/">
          <Redirect to="/Allcourses" />
        </Route>
      </div>
    );
  } else if (whoIsThis === "admin") {
    return (
      <div>
        <Route exact path="/">
          <Redirect to="/Admin" />
        </Route>
      </div>
    );
  } else {
    return <div>login fail</div>;
  }
};
export default LoginSuccess;
