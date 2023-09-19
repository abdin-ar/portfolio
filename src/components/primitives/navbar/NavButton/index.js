import React from "react";
import Button from "../../buttons/Button";
import "./nav-button.css";

/**
 * @type {React.FC<{as?:React.ElementType<any> | keyof JSX.IntrinsicElements,isFullWidth?: boolean} & React.ButtonHTMLAttributes & React.AnchorHTMLAttributes>}
 */
const NavButton = ({ className, children, ...props }) => {
  return (
    <Button className={`nav-btn ${className}`} variant="transparent" {...props}>
      {children}
    </Button>
  );
};
export default NavButton;
