import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
import "./Form.css";

const LoginSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">Login Successfull</h1>
      <ListGroup>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/Allcourses"
          action
        >
          Allcourses
        </Link>
      </ListGroup>
    </div>
  );
};

export default LoginSuccess;
