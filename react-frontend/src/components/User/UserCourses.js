import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { AppContext } from "../../App";
import { HomeContext } from "../Home";
import Navbar from "../Navbar2/Navbar";
import BASE_URL from "./../../services/UserService";
import Courses from "./Courses";

function UserCourses() {
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

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  return (
    <div>
      <Navbar />
      <p>List of courses are:</p>
      {courses.length > 0
        ? courses.map((item) => <Courses key={item.courseId} course={item} />)
        : "No courses"}
    </div>
  );
}
export default UserCourses;
