import { Link, NavLink, useLocation } from "react-router-dom";

const MyLink = (props) => {
  const { pathname } = useLocation();

  const { to, type, children } = props;

  const newProps = { ...props };
  for (const prop in newProps) {
    if (prop === "to" || prop === "type" || prop === "children") {
      delete newProps[prop];
    }
  }

  if (pathname === to.split("#")[0]) {
    if (to && to.split("#").length > 1) {
      return (
        <a href={to} {...newProps}>
          {children}
        </a>
      );
    } else {
      return (
        <a href="#" {...newProps}>
          {children}
        </a>
      );
    }
  } else {
    if (type === "Link") {
      return (
        <Link to={to} {...newProps}>
          {children}
        </Link>
      );
    }
    if (type === "NavLink") {
      return (
        <NavLink to={to} {...newProps}>
          {children}
        </NavLink>
      );
    }

    return (
      <a href={to} {...newProps}>
        {children}
      </a>
    );
  }
};
export default MyLink;
