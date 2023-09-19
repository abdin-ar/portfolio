import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

/**
 * @type {React.FC<{to?:string,linkType?:'a'|'Link'|'NavLink'} & React.AnchorHTMLAttributes>}
 */
const MyLink = ({ to = "#", linkType, children, ...props }) => {
  const { pathname } = useLocation();

  if (pathname === to?.split("#")[0]) {
    if (to && to.split("#").length > 1) {
      return (
        <a href={to} {...props}>
          {children}
        </a>
      );
    } else {
      return (
        <a href="#" {...props}>
          {children}
        </a>
      );
    }
  } else {
    if (linkType === "Link") {
      return (
        <Link to={to} {...props}>
          {children}
        </Link>
      );
    }
    if (linkType === "NavLink") {
      return (
        <NavLink to={to} {...props}>
          {children}
        </NavLink>
      );
    }

    return (
      <a href={to} {...props}>
        {children}
      </a>
    );
  }
};
export default MyLink;
