import axios from "axios";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import BASE_URL from "../../services/UserService";
import Navbar from "../Navbar2/Navbar";
import "./Admin.css";

const AdminUpdateCourses = () => {
  const { state } = useLocation();
  const course = state;
  console.log(state + " from updateCourse");
  const [values, setValues] = useState({
    courseId: course.courseId,
    courseName: course.courseName,
    price: course.price,
    author: course.author,
  });

  const history = useHistory();
  const IGotClicked = () => {
    let path = `/Admin`;
    history.push(path);
  };
  //form handler function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    postDataToServer(values);
  };
  //function to post(add) data to server
  const postDataToServer = (data) => {
    axios.post(`${BASE_URL}/courses`, data).then(
      (response) => {
        console.log(response);
        toast.success("Course Updated Successfully");
      },
      (error) => {
        console.log(error);
        toast.error("error");
      }
    );
  };
  return (
    <div>
      <Navbar />
      {/* <h1 className=" text-center my-3 " >Add/Update the course details</h1> */}
      <Form className="AdminAddCourse-container" onSubmit={handleSubmit}>
        <h2 className="text-center ">- Update Course -</h2>
        <FormGroup className="AdminAddCourse-content">
          <Label className="AddCourseform-label" htmlFor="courseId">
            Course-ID:
          </Label>
          <Input
            value={values.courseId}
            className="form-input"
            type="number"
            placeholder="enter here"
            name="courseId"
            id="courseId"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="AdminAddCourse-content">
          <Label className="AddCourseform-label" htmlFor="courseName">
            Course Name:
          </Label>
          <Input
            value={values.courseName}
            className="form-input"
            type="text"
            placeholder="enter here"
            name="courseName"
            id="courseName"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="AdminAddCourse-content">
          <Label className="AddCourseform-label" htmlFor="price">
            Course Price:
          </Label>
          <Input
            value={values.price}
            className="form-input"
            type="number"
            placeholder="enter here"
            name="price"
            id="price"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="AdminAddCourse-content">
          <Label className="AddCourseform-label" htmlFor="author">
            Course Tutor:
          </Label>
          <Input
            value={values.author}
            className="form-input"
            type="text"
            placeholder="enter here"
            name="author"
            id="author"
            onChange={handleChange}
          />
        </FormGroup>
        <Container className="text-center">
          <Button color="primary" onClick={IGotClicked} >
            Go Back
          </Button>
          <Button type="submit" color="success ml-3 ">
            Add Course
          </Button>
        </Container>
      </Form>
    </div>
  );
};
export default AdminUpdateCourses;
