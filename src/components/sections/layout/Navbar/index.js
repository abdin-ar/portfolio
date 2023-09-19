import React from "react";
import DarkModeToggleSaved from "../../../primitives/navbar/DarkModeToggleSaved";
import Nav from "../../../primitives/navbar/Nav";
import navLinks from "../../../../data/navLinks";
import NavLogo from "../../../primitives/navbar/NavLogo";
import NavCTA from "../../../primitives/navbar/NavCTA";
import "./navbar.css";

/**
 * @type {React.FC}
 */
const Navbar = () => {
  return (
    <Nav
      className={"navbar-main"}
      logo={<NavLogo />}
      links={navLinks}
      cta={<NavCTA />}
      toggle={<i className="fas fa-bars"></i>}
      classToggle="navbar-toggle"
    >
      <DarkModeToggleSaved className="navbar-toggle" />
    </Nav>
  );
};

export default Navbar;
