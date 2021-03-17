import React from "react";
import { Link, Redirect, Route } from "react-router-dom";
import { ListGroup } from "reactstrap";
//import { ListGroup } from "reactstrap";
import "./Form.css";
// import { toast } from "react-toastify";
// import Allcourse from "./Allcourses";
// import Admin from "./Admin";
// import Navbar from "./Navbar/Navbar";
import Allcourses from "./Allcourses";
import Admin from "./Admin";

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
