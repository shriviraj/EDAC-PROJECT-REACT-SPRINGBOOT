import axios from "axios";
import React, { useState, useEffect } from "react";
import BASE_URL from "./../../services/UserService";

import Course from "./AdminCourses";

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

  useEffect(() => {
    getAllCoursesFromServer();
  },[]);

  const [courses, setCourses] = useState([]);

  return (
    <div>
      <h3>List of all Courses:</h3>
      <p></p>
      {courses.length > 0
        ? courses.map((item) => <Course key={item.courseId} course={item} />)
        : "No courses"}
    </div>
  );
};
export default AdminAllcourse;
