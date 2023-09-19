import React from "react";
import NavButton from "./NavButton";

/**
 * @type {React.FC<{toggleLinks:() => void} & React.ButtonHTMLAttributes>}
 */
const NavToggle = ({ className, toggleLinks, children, ...props }) => {
  return (
    <NavButton
      className={`nav-toggle ${className}`}
      onClick={toggleLinks}
      aria-label="Menu"
      {...props}
    >
      {children}
    </NavButton>
  );
};

export default NavToggle;
