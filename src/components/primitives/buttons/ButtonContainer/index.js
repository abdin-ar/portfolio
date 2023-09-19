import React from "react";
import "./button-container.css";

/**
 * @type {React.FC<{areMerged?:boolean, areWrapped?:boolean, position?:'start'|'center'|'end'} & React.AllHTMLAttributes>}
 */
const ButtonContainer = ({
  className,
  areMerged = false,
  areWrapped = true,
  position = "center",
  children,
  ...props
}) => {
  return (
    <div
      className={`btn-container ${areMerged ? "merged" : ""} ${
        areWrapped ? "" : "nowrap"
      } ${position} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
export default ButtonContainer;
