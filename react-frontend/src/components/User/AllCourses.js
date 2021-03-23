import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import BASE_URL from "./../../services/UserService";

import Courses from "./Courses";
import Navbar from "./../Navbar2/Navbar";
import "./UserCourse.css";

const Allcourse = () => {
  const history = useHistory();

  const { state } = useLocation();

  const email = state;

  console.log(email + "++++++++++++++++++++++++++++");

  //view user courses button function
  const AllAvailableCourseGotClicked = () => {
    let path = `/UserCourses`;
    history.push(path);
  };

  const YourCartGotClicked = ()=>{
    let path = `/UserCart`;
    history.push(path);
  }

  return (
    <div className="UserCourse-List">
      <Navbar />
      <button className="AdminAddCourses-input-btn" onClick={YourCartGotClicked}>Your Cart</button>

      <button className="AdminAddCourses-input-btn" onClick={AllAvailableCourseGotClicked}>
        All Available Courses
      </button>

      {/* <h1>All Courses</h1> */}
    </div>
  );
};
export default Allcourse;
