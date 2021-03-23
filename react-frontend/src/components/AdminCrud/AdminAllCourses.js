import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import BASE_URL from "./../../services/UserService";

import AdminCourse from "./AdminCourses";

const AdminAllcourse = () => {
  //function to call server
  const getAllCoursesFromServer = () => {
    axios.get(`${BASE_URL}/courses`).then(
      (response) => {
        console.log(response.data);
        setCourses(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  //loading course function

  const [courses, setCourses] = useState([]);

  useEffect((e) => {
    getAllCoursesFromServer();
  }, []);

  return (
    <div>
      <Table className="CourseHeader">
        <thead>
          <tr>
            <th>Course</th>
            <th>Rating</th>
            <th>Author & price</th>
            <th>Action</th>
          </tr>
        </thead>
      </Table>
      {courses.length > 0
        ? courses.map((item) => (
            <AdminCourse key={item.courseId} course={item} />
          ))
        : "No courses"}
    </div>
  );
};
export default AdminAllcourse;
