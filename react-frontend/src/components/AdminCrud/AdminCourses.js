import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import {
  Card,
  Button,
  CardBody,
  CardSubtitle,
  Container,
  CardTitle,
} from "reactstrap";
import BASE_URL from "../../services/UserService";

const AdminCourse = ({ course }) => {
  const history = useHistory();

  const updateCourse = (course) => {
    console.log(course.courseId);
    let path = `/AdminAddCourses`;
    history.push(path);
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
          console.log(response);
        },
        (error) => {
          toast.dark("error");
          console.log(error);
        }
      );
  };

  return (
    <div>
      <Card>
        <CardBody className="course-container ">
          <CardTitle tag="h5"> {course.courseName}</CardTitle>
          <br />
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Rating: {course.rating}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {" "}
            Price: {course.price} Tutor: {course.author}
          </CardSubtitle>
          <br />
          <Container>
            <Button
              color="primary"
              onClick={() => updateCourse(course)}
            >
              Update
            </Button>
            <Button
              color="danger ml-3"
              onClick={() => deleteCourse(course.courseId)}
            >
              Delete
            </Button>
          </Container>
        </CardBody>
      </Card>
    </div>
    /*  <div className="course-container">
      <div>{course.courseName}</div>
      <div> Rating: {course.rating}</div>
      <div>
        Price: {course.price} Tutor: {course.author}
      </div>
    </div> */
  );
};

export default AdminCourse;
