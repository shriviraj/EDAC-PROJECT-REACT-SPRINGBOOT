import React from "react";
import {  useHistory } from "react-router-dom";
//import { Button, Card, CardBody } from "reactstrap";
import AdminAllCourse from "./AdminCrud/AdminAllCourses";
import Navbar from "./Navbar2/Navbar";
const Admin = () => {
  const history = useHistory();
  const IGotClicked = () => {
    let path = `/AdminAddCourses`;
    history.push(path);
  };
  return (
    <div>
      <Navbar />

      {/* <Link
        className="list-group-item list-group-item-action text-center"
        tag="a"
        to="/AdminAddCourses"
        action
      >
        Add Courses
      </Link> */}

      <AdminAllCourse />
      <button className="AdminAddCourses-input-btn" onClick={IGotClicked}>
        Add Course
      </button>
    </div>
  );
};
export default Admin;
