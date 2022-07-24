import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBook } from "@fortawesome/free-solid-svg-icons";
import '../Home/Home.css';

const Navbar = props => {
    return(
        <nav className="navbar navbar-expand-lg bg-success sticky-top ">
            <div className="container-fluid">
            <NavLink className="navbar-brand text-white" to="/">
                <span className="mx-1">            
                    <FontAwesomeIcon icon={faBook} />
                </span>
            <span className="mt-1">NotePad</span>
            </NavLink>
            <div className=" justify-content-end" id="navbarNavAltMarkup">
            <div className="nav nav-bar">
                <NavLink className="nav-text text-white" to="/favourite"> 
                    <span className="d-none d-md-block"> Favourites </span> 
                    <span className="d-block d-md-none">
                        <FontAwesomeIcon icon={faHeart} />
                    </span>               
               </NavLink>
                {/* <NavLink className="nav-link text-white d-sm-block d-md-none active" to='/'>
                   <span className="d-sm-block d-md-none"> &#9829; </span> 
                </NavLink>  */}
            </div>
            </div>
            </div>
        </nav>
   )
};

export default Navbar;