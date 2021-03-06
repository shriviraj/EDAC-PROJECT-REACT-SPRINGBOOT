import React from "react";
import {
  Card,
  Button,
  CardBody,
  CardText,
  CardSubtitle,
  
} from "reactstrap";

const Course = ({ course }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <CardSubtitle className="font-weight-bold"> { course.title }</CardSubtitle>
        <CardText>Rating: { course.rating }</CardText>
        <container>
          <Button color="danger" >Delete</Button>
          <Button color="warning ml-3">Update</Button>
        </container>
      </CardBody>
    </Card>
  );
};
export default Course;
