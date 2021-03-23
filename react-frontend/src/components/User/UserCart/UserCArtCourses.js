import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Button, Container } from "reactstrap";

import { toast } from "react-toastify";
import BASE_URL from "../../../services/UserService";
import { AppContext } from "../../../App";

const UserCArtCourses = ({ course }) => {

  const { tempEmail } = useContext(AppContext);
  console.log(tempEmail);
  console.log(tempEmail + " ---userCartCourse");
let id = tempEmail;
 

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
    <div className="UserCart-cards">
      <div>
        <h5> {course.courseName}</h5>
        <br />
        <h6 className="Rating mb-2">Rating: {course.rating}</h6>
        <h6 className="priceTutor mb-2">Price: {course.price}</h6>
        <h6 className="priceTutor mb-2">Author: {course.author}</h6>
        <br />
        <Container className="buttons">
          <button
            onClick={() => {
              DeleteCourseFromCart(course);
            }}
            color="danger ml-3"
          >
            Delete
          </button>
        </Container>
      </div>
    </div>
  );
};

export default UserCArtCourses;
