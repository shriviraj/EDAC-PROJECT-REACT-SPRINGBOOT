import axios from "axios";

import React, { useContext, useEffect, useState } from "react";
import { Button, Container } from "reactstrap";
import { AppContext } from "../../../App";
import BASE_URL from "../../../services/UserService";
import Navbar from "../../Navbar2/Navbar";
import UserCArtCourses from "./UserCArtCourses";

function UserCart() {
  const { tempEmail } = useContext(AppContext);
  console.log(tempEmail);

  useEffect(() => {
    getIdByEmail();
  }, []);

  let id;
  const getIdByEmail = () => {
    let email = "";
    email = tempEmail;
    console.log(email + "------------------getIdbyEmail before call");
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
          console.log(id + " ----------id response.data");
          getUserCartFromServer();
        },
        (error) => {
          console.log(error.data);
        }
      );
  };

  const getUserCartFromServer = () => {
    axios
      .post(
        `${BASE_URL}/userAllCourses`,
        { data: { id } },
        {
          params: { id },
        },
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then(
        (response) => {
          console.log(response.data.userCourse);
          setCourses(response.data.userCourse);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const [courses, setCourses] = useState([]);

  useEffect(() => {}, []);

  return (
    <div>
      <Navbar />
      <div className="list-of-courses">
        <h4>Cart</h4>
        {courses.length > 0
          ? courses.map((item) => (
              <UserCArtCourses key={item.courseId} course={item} id={id} />
            ))
          : "No courses"}
        <Button className="cartCheckout-btn">checkout</Button>
      </div>
    </div>
  );
}
export default UserCart;
