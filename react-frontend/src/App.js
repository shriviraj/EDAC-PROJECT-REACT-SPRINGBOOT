import React from "react";
import { Container, Row, Col } from "reactstrap";
import Allcourse from "./components/Allcourses";
//import Course from "./components/Course";
import Form from "./components/Form";
import Header from "./components/Header";
import Home from "./components/Home";
import Menus from "./components/Menus";
import Admin from "./components/Admin";
//import Login from "./components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AdminAddCourses } from "./components/AdminCrud/AdminAddCourses";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="container">
      {/* <Home />
      <Form/>
      <Allcourse/> */}

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
      <Header />
      <Router>
        <Container>
          <Row>
         
              
           
            </Row>
            <Row>
            <Col md={8}>
              <Route path="/" component={Home} exact />
              <Route path="/Form" component={Form} exact />
              <Route path="/Allcourses" component={Allcourse} exact />
              <Route path="/Admin" component={Admin} exact />
              <Route
                path="/AdminAddCourses"
                component={AdminAddCourses}
                exact
              />
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
