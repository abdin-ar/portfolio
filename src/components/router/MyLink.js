import { Link, NavLink, useLocation } from "react-router-dom";

const MyLink = ({ to, type, children, ...props }) => {
  const { pathname } = useLocation();

  if (pathname === to.split("#")[0]) {
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
    if (type === "Link") {
      return (
        <Link to={to} {...props}>
          {children}
        </Link>
      );
    }
    if (type === "NavLink") {
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
