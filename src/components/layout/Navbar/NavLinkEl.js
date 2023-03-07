import { NavLink } from "react-router-dom";
import MyLink from "../../router/MyLink";

const NavLinkEl = ({ to, tooltip, children, classes, setToggleState }) => {
  return (
    <>
      <MyLink
        to={to}
        type="NavLink"
        title={tooltip}
        className={`nav-link ${classes}`}
        onClick={() => setToggleState(false)}
      >
        {children}
      </MyLink>
    </>
  );
};

export default NavLinkEl;
