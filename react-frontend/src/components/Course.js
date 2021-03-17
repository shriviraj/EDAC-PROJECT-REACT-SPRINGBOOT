import React from "react";
import {
  Card,
  Button,
  CardBody,
  CardSubtitle,
  Container,
  CardTitle,
} from "reactstrap";

const Course = ({ course }) => {
  return (
    <div>
      <Card className="">
        <CardBody>
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
            <Button color="primary">Add</Button>
            <Button color="danger ml-3">Delete</Button>
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

export default Course;
