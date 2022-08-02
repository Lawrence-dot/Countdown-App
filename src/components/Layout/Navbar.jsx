import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBook, faHome } from "@fortawesome/free-solid-svg-icons";
import "../Home/Home.css";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-success sticky-top ">
      <div className="nav-container">
        <NavLink className="navbar-brands fadeIn text-white" to="/">
          <span className="mx-1">
            {props.title === "Home" ? (
              <FontAwesomeIcon icon={faHome} />
            ) : (
              <FontAwesomeIcon icon={faBook} />
            )}
          </span>
          <span className="mt-1">{props.title}</span>
        </NavLink>
        <div
          className="d-flex ms-auto justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div
            className="nav nav-bar navbar-brands"
            style={{ margingRight: "0px" }}
          >
            <NavLink className="nav-text text-white" to="/favourite">
              <span className="d-block">
                Favourites <FontAwesomeIcon icon={faHeart} />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
