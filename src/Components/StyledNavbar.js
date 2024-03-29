import React from "react";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
import { AiOutlineDatabase } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import ToggleColor from "./TogggleColor";

import "./Navbar.css";

const StyledNavbar = () => {
  return (
    <nav className="top-nav">
      <span className="symbol">
        <NavLink to="/">
          <IconContext.Provider value={{ className: "top-react-icons" }}>
            <BsSuitHeartFill className="icon-heart" />
          </IconContext.Provider>
          Hypertensive.io
        </NavLink>
      </span>
      <ul className="nav">
        <li>
          <NavLink to="/readings">
            <IconContext.Provider value={{ className: "top-react-icons" }}>
              <AiOutlineDatabase className="icon" />
            </IconContext.Provider>
            Readings
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics">
            <IconContext.Provider value={{ className: "top-react-icons" }}>
              <BsClipboardData className="icon" />
            </IconContext.Provider>
            Statistics
          </NavLink>
        </li>
        <ToggleColor />
      </ul>
    </nav>
  );
};
export default StyledNavbar;
