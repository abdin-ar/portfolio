import React from "react";
import MyLink from "../../../primitives/router/MyLink";
import Logo from "../../../sections/layout/Logo";
import "./nav-logo.css";

/**
 * @type {React.FC}
 */
const NavLogo = () => {
  return (
    <MyLink to="/" linkType="NavLink" className="nav-logo-link">
      <Logo className="img nav-logo" />
    </MyLink>
  );
};
export default NavLogo;
