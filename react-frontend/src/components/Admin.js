import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import AdminAllCourse from "./AdminCrud/AdminAllCourses";

const Admin = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <h3 className="text-center my-3">Admin</h3>
        </CardBody>
      </Card>
      <Link
        className="list-group-item list-group-item-action text-center"
        tag="a"
        to="/AdminAddCourses"
        action
      >
        Add Courses
      </Link>
      <AdminAllCourse />
    </div>
  );
};
export default Admin;
