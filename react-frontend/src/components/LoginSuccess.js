import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
import "./Form.css";
import { toast } from "react-toastify";

const LoginSuccess = ({ whoIsThis }) => {
  console.log(whoIsThis + "inside login success");

  if (whoIsThis === "user") {
    return (
      <div className="form-content-right">
        <h1 className="form-success">Login Successfull</h1>
        <ListGroup>
          <Link
            className="list-group-item list-group-item-action text-center"
            tag="a"
            to="/Allcourses"
            action
          >
            Allcourses
          </Link>
        </ListGroup>
      </div>
    );
  } else {
    // {
    //   toast("Logged in as Admin");
    // }
    return (
      <div className="form-content-right">
        <h1 className="form-success">Login Successfull as Admin</h1>

        <ListGroup>
          <Link
            className="list-group-item list-group-item-action text-center"
            tag="a"
            to="/Admin"
            action
          >
            Admin
          </Link>
        </ListGroup>
      </div>
    );
  }
};
export default LoginSuccess;
