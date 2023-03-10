import React from "react";
import { Link } from "react-router-dom";
import "./NavbarComponent.scss";

function NavbarComponent() {
  return (
    <nav>
      <ul className="nav-wrapper">
        <li>
          <Link to="/">
            <img
              src="./global.png"
              width={"50px"}
              height={"50px"}
              alt="logo"
            ></img>
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarComponent;
