import axios from "axios";
import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { Button, Container } from "reactstrap";
import { AppContext } from "../../App";
import BASE_URL from "../../services/UserService";

const Course = ({ course }) => {
  const { tempEmail } = useContext(AppContext);
  console.log(tempEmail);

  useEffect(() => {
    getIdByEmail();
  }, [tempEmail]);

  let id;
  const getIdByEmail = () => {
    let email = "";
    email = tempEmail;
    console.log(email + "------------------getIdbyEmail");
    axios
      .post(
        `${BASE_URL}/getuserid`,
        { data: { email } },
        {
          params: { email },
        },
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then(
        (response) => {
          console.log(response);
          id = response.data;
          console.log(id + " ----------response.data");
        },
        (error) => {
          console.log(error.data);
        }
      );
  };

  const AddCourseToCart = (courseObj) => {
    console.log(courseObj.courseId + " Add Course To cart");
    let cid = courseObj.courseId;

    addtocart(cid);
  };

  const addtocart = (cid) => {
    console.log(cid + " " + id + "------------------addtocart");
    axios
      .post(
        `${BASE_URL}/addtocart`,
        { data: { id, cid } },
        {
          params: { id, cid },
        },
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then(
        (response) => {
          console.log(response.data);
          toast("course added");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const DeleteCourseFromCart = (courseObj) => {
    let cid = courseObj.courseId;
    deletefromcart(cid);
  };

  const deletefromcart = (cid) => {
    console.log(cid + " " + id + "------------------addtocart");
    axios
      .post(
        `${BASE_URL}/deletefromcart`,
        { data: { id, cid } },
        {
          params: { id, cid },
        },
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then(
        (response) => {
          console.log(response.data);
          toast("course deleted");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="cards">
      <div>
        <h5> {course.courseName}</h5>
        <br />
        <h6 className="Rating mb-2 text-muted">Rating: {course.rating}</h6>
        <h6 className="priceTutor mb-2 text-muted">
          {" "}
          Price: {course.price} Tutor: {course.author}
        </h6>
        <br />
        <Container className="buttons">
          <Button
            onClick={() => {
              AddCourseToCart(course);
            }}
            color="primary"
          >
            Add
          </Button>
          <Button
            onClick={() => {
              DeleteCourseFromCart(course);
            }}
            color="danger ml-3"
          >
            Delete
          </Button>
        </Container>
      </div>
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
