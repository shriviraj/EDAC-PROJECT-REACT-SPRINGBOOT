import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { Button, Table } from "reactstrap";
import BASE_URL from "../../services/UserService";
//import AdminUpdateCourses from "./AdminUpdateCourses";

const AdminCourse = ({ course }) => {
  const history = useHistory();
  const updateCourse = (courseObj) => {
    let path = `/AdminUpdateCourses`;
    history.push({ pathname: path, state: courseObj });
  };

  const deleteCourse = (courseId) => {
    console.log(courseId);
    axios
      .delete(
        `${BASE_URL}/courses`,

        { params: { courseId } },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then(
        (response) => {
          toast.dark("course deleted");
          console.log(response.data);
        },
        (error) => {
          toast.dark("error");
          console.log(error);
        }
      );
  };

  return (
    <>
      <Table hover className="AdminCourseDisp">
        <tbody>
          <tr className="text-center ">
            <td tag="h5"> {course.courseName}</td>
            <td tag="h6" className="mb-2 text-muted">
              Rating: {course.rating}
            </td>
            <td tag="h6" className="mb-2 text-muted">
              {" "}
              Price: {course.price} Tutor: {course.author}
            </td>
            <td>
              <Button color="primary ml-3" onClick={() => updateCourse(course)}>
                Update
              </Button>
              <Button
                color="danger ml-3"
                onClick={() => deleteCourse(course.courseId)}
              >
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      {/* <div className="course-container">
      <div>{course.courseName}</div>
      <div> Rating: {course.rating}</div>
      <div>
        Price: {course.price} Tutor: {course.author}
      </div>
  </div> */}
    </>
  );
};

export default AdminCourse;
