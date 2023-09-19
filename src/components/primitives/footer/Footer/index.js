import React from "react";
import "./footer.css";

/**
 * @type {React.FC<React.AllHTMLAttributes>}
 */
const Footer = ({ className, children, ...props }) => {
  return (
    <footer className={`footer ${className}`} {...props}>
      {children}
    </footer>
  );
};
export default Footer;
