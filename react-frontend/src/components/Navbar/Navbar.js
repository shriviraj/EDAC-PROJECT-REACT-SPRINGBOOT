import React from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItem";
import { useHistory } from "react-router";

function Navbar() {
  const history = useHistory();
  const LogoClicked = () => {
    let path = `/`;
    history.push(path);
  };

  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="navbar-logo" onClick={LogoClicked}>
          <i class="fa fa-book" aria-hidden="true">
            {" "}
          </i>{" "}
          EducateNow
        </h1>
        <div className="menu-icon"></div>

        {MenuItems.map((item, index) => {
          return (
            <h5 key={index}>
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
