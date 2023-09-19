import React from "react";
import MyLink from "../../../primitives/router/MyLink";
import Button from "../../buttons/Button";
import "./nav-cta.css";

/**
 * @type {React.FC}
 */
const NavCTA = () => {
  return (
    <Button
      as={MyLink}
      to="/#contact"
      linkType="NavLink"
      variant="primary"
      className="nav-cta"
    >
      Hire Me
    </Button>
  );
};
export default NavCTA;
