import React,{useState} from "react";
import logo from "../../Assets/nav_logo.png";
import "../../Styles/navbar.css";
import navbarItems from "./NavbarItems";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";


const Navbar = ({ toggle }) => {
    
  return (
    <nav>
      <NavLink to="/" className="link" id="logo">
        <img src={logo} />
      </NavLink>
      <div className="menu-items">
        {navbarItems.map((item, index) => (
          <NavLink  activeClassName="active" className="link" to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </div>
      <div className="icons">
        <div className="mobile-menu-icon">
          <FaBars onClick={toggle} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
