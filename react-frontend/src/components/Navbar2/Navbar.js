import React from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItem";
//import { useHistory } from "react-router";

function Navbar() {
  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <i className="fa fa-book" aria-hidden="true">
            {" "}
          </i>{" "}
          EducateNow
        </h1>
        <div className="menu-icon"></div>

        {MenuItems.map((item, index) => {
          return (
            <h5 className="navbar" key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </h5>
          );
        })}
      </nav>
    </div>
  );
}

export default Navbar;
