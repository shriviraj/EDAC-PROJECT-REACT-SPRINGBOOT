import React from "react";
//import { Container, Row, Col } from "reactstrap";
//import Course from "./components/Course";
//import Header from "./components//Header";
//import Menus from "./components//Menus";
import Allcourse from "./components/Allcourses";
import Form from "./components//Form";
import Home from "./components/Home";
import Admin from "./components/Admin";

//import Login from ".Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AdminAddCourses } from "./components/AdminCrud/AdminAddCourses";

import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import AdminUpdateCourses from "./components/AdminCrud/AdminUpdateCourses";
function App() {
  return (
    <div className="container">
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Router>
        {/* 
          <Navbar />

          <Row>
            <Col> */}

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Navbar" component={Navbar} exact />
          <Route path="/Form" component={Form} exact />
          <Route path="/Allcourses" component={Allcourse} exact />
          <Route path="/AdminAddCourses" component={AdminAddCourses} exact />
          <Route path="/Admin" component={Admin} exact />
          {/* <Route
            path="/AdminUpdateCourses"
            component={AdminUpdateCourses}
            exact
          /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
