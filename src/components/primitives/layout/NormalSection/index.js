import React from "react";
import "./normal-section.css";

/**
 * @type {React.FC<React.AllHTMLAttributes>}
 */

const NormalSection = ({ className, children, ...props }) => {
  return (
    <section className={`normal-section ${className}`} {...props}>
      {children}
    </section>
  );
};
export default NormalSection;
