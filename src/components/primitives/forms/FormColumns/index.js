import React from "react";
import "./form-columns.css";

/**
 * @type {React.FC<React.AllHTMLAttributes>}
 */
const FormColumns = ({ className, children, ...props }) => {
  return (
    <div className={`form-columns ${className}`} {...props}>
      {children}
    </div>
  );
};
export default FormColumns;
