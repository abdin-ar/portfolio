import React from "react";
import "./dark-section.css";

/**
 * @type {React.FC<{isFirst?:boolean,isLast?:boolean} & React.AllHTMLAttributes>}
 */
const DarkSection = ({
  isFirst = false,
  isLast = false,
  className,
  children,
  ...props
}) => {
  return (
    <section
      className={`dark-section ${isFirst ? "" : "not-first"} ${
        isLast ? "" : "not-last"
      } ${className}`}
      {...props}
    >
      <div className="dark-section-bg"></div>
      {children}
    </section>
  );
};
export default DarkSection;
