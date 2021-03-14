import React from "react";
import {  NavLink } from "react-router-dom";
import {  Nav, NavItem } from "reactstrap";

const Menus = () => {
  return (
    <div className="align-center">
    
    <Nav>
      <NavItem>
      <NavLink
        className="list-group-item list-group-item-action"
        tag="a"
        to="/"
        action
      >
        Home
      </NavLink>
      </NavItem>
      <NavItem>
      <NavLink
        className="list-group-item list-group-item-action"
        tag="a"
        to="/Form"
        action
      >
        Register
      </NavLink>
      </NavItem>
      {/* <Link className="list-group-item list-group-item-action"tag="a" to='/Allcourses' action>
                View Courses
            </Link> */}
            <NavItem>
      <NavLink
        className="list-group-item list-group-item-action"
        tag="a"
        to="#!"
        action
      >
        About
      </NavLink>
      </NavItem>
      <NavItem>
      <NavLink
        className="list-group-item list-group-item-action"
        tag="a"
        to="/Allcourses"
        action
      >
        AllCourses
      </NavLink>
      
      </NavItem>
      </Nav>
   </div>
  );
};
export default Menus;
