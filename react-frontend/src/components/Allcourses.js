import React, { useState } from "react";

import Course from "./Course";

const Allcourse = () => {
  const [courses, setcourse] = useState(
    [
      { title: "Java Course", rating: "4/5" },
      { title: "Django Course", rating: "3/5" },
      { title: "ReactJs Course", rating: "5/5" },
    ],
    []
  );

  return (
    <div>
      <h1>All Courses</h1>
      <p>List of courses are:</p>
      {courses.length > 0
        ? courses.map((item) => <Course course={item} />)
        : "No courses"}
    </div>
  );
};
export default Allcourse;
