import React from "react";
import "./form.css";

/**
 * @type {React.FC<{isWide?:boolean} & React.FormHTMLAttributes>}
 */
const Form = ({ isWide = false, className, children, ...props }) => {
  return (
    <form
      className={`form ${isWide ? "wide-form" : ""} ${className}`}
      {...props}
    >
      {children}
    </form>
  );
};
export default Form;
