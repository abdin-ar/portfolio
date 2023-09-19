import React from "react";
import "./label.css";

/**
 * @type {React.FC<React.LabelHTMLAttributes>}
 */
const Label = ({ className, children, ...props }) => {
  return (
    <label className={`label ${className}`} {...props}>
      {children}
    </label>
  );
};
export default Label;
