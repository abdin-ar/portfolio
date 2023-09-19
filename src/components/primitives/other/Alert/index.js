import React from "react";
import "./alert.css";

/**
 * @type {React.FC<{isFormAlert:boolean,status:'error'|'success'|'closed'} & React.AllHTMLAttributes>}
 */
const Alert = ({
  isFormAlert = false,
  status = "error",
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={`alert ${isFormAlert ? "" : "general"} ${status} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
export default Alert;
