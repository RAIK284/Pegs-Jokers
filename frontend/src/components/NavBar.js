import React from 'react';
import "../Styling.css";
import homeIcon from "../images/home-icon.svg";

const NavBar = ({ title }) => {
    return (
      <nav className="navBar">
        <button className="navButton" onClick={() => window.location.href = '/'}>
            <img src={homeIcon} />
        </button>
        <h1 className="navTitle">{title}</h1>
      </nav>
    );
  };

export default NavBar;