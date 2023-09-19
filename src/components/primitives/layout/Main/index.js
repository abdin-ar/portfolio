import React from "react";
import "./main.css";

/**
 * @type {React.FC<React.AllHTMLAttributes>}
 */
const Main = ({ className, children, ...props }) => {
  return (
    <main className={`main ${className}`} {...props}>
      {children}
    </main>
  );
};
export default Main;
