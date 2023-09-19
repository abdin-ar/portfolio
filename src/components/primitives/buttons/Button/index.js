import React from "react";
import "./button.css";

/**
 * @type {React.FC<{as?:React.ElementType<any> | keyof JSX.IntrinsicElements, isFullWidth?:boolean, variant?:'primary'|'grey'|'transparent'|'',to?:string,linkType?:'a'|'Link'|'NavLink'} & React.ButtonHTMLAttributes & React.AnchorHTMLAttributes>}
 */

const Button = ({
  as = "button",
  className,
  type = "button",
  isFullWidth = false,
  variant = "",
  children,
  ...props
}) => {
  const As = as;
  return (
    <As
      className={`btn ${
        isFullWidth ? "full-width" : ""
      } ${variant} ${className}`}
      type={!type && As === "button" ? "button" : type}
      {...props}
    >
      {children}
    </As>
  );
};
export default Button;
