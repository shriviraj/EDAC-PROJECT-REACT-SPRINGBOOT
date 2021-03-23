import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import BASE_URL from "../../services/UserService";
import Navbar from "../Navbar2/Navbar";
import "./Admin.css";
export const AdminAddCourses = () => {
  const [values, setValues] = useState({
    courseId: "",
    courseName: "",
    price: "",
    author: "",
  });
  //form handler function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

 
  
  const history = useHistory();
  const IGotClicked = () => {
    let path = `/Admin`;
    history.push(path);
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
        toast.success("success");
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
        <h2 className="text-center ">- Add Course -</h2>
        <FormGroup className="AdminAddCourse-content">
          <Label className="AddCourseform-label" htmlFor="courseId">
            Course-ID:
          </Label>
          <Input
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
            className="form-input"
            type="text"
            placeholder="enter here"
            name="courseName"
            id="courseName"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup className="AdminAddCourse-content">
          <Label className="AddCourseform-label" htmlFor="price">
            Course Price:
          </Label>
          <Input
            className="form-input"
            type="number"
            placeholder="enter here"
            name="price"
            id="price"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup className="AdminAddCourse-content">
          <Label className="AddCourseform-label" htmlFor="author">
            Course Tutor:
          </Label>
          <Input
            className="form-input"
            type="text"
            placeholder="enter here"
            name="author"
            id="author"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Container className="text-center">
          <Button color="primary" onClick={IGotClicked} outline>
            Go Back
          </Button>
          <Button  type="submit" color="success ml-4">
            Add Course
          </Button>
        </Container>
      </Form>
    </div>
  );
};
