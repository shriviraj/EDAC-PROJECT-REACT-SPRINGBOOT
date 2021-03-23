import React, { useState } from "react";
//import { Container, Row, Col } from "reactstrap";
//import Course from "./components/Course";
//import Header from "./components//Header";
//import Menus from "./components//Menus";
import AllCourses from "./components/User/AllCourses";
import Form from "./components//Form";
import Home from "./components/Home";
import Admin from "./components/Admin";

//import Login from ".Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AdminAddCourses } from "./components/AdminCrud/AdminAddCourses";

import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import AdminUpdateCourses from "./components/AdminCrud/AdminUpdateCourses";
import UserCourses from "./components/User/UserCourses";
import UserCart from "./components/User/UserCart/UserCart";

export const AppContext = React.createContext();

function App() {
  const [tempEmail, settempEmail] = useState("tempMail initialstate");
  const settingTempMail = (e) => {
    settempEmail(e);
  };
  return (
    <AppContext.Provider value={{ tempEmail, settingTempMail }}>
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
            <Route path="/Allcourses" component={AllCourses} exact />
            <Route path="/AdminAddCourses" component={AdminAddCourses} exact />
            <Route path="/Admin" component={Admin} exact />
            <Route
              path="/AdminUpdateCourses"
              component={AdminUpdateCourses}
              exact
            />
            <Route path="/UserCourses" component={UserCourses} exact />
            <Route path="/UserCart" component={UserCart} exact />
          </Switch>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
