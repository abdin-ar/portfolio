import React from "react";
import "./form-row.css";

/**
 * @type {React.FC<React.AllHTMLAttributes>}
 */
const FormRow = ({ className, children, ...props }) => {
  return (
    <div className={`form-row ${className}`} {...props}>
      {children}
    </div>
  );
};
export default FormRow;
