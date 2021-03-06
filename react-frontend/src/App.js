import React from "react";
import { Container, Row, Col } from "reactstrap";
import Allcourse from "./components/Allcourses";
import Course from "./components/Course";
import Form from "./components/Form";
import Header from "./components/Header";
import Home from "./components/Home";
import Menus from './components/Menus';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <div className="container">
      
      {/* <Home />
      <Form/>
      <Allcourse/> */}
      <Header/>
       <Router>
       <Container>
         <Row>
           <Col md={4}>
           <Menus/>
           </Col>
           <Col md={8}>
           

           <Route path='/' component={Home} exact />
           <Route path='/Form' component={Form} exact />
           <Route path='/Allcourses' component={Allcourse} exact />

           </Col>
         </Row>
       </Container>
       </Router>
    </div>
  );
}

export default App;
