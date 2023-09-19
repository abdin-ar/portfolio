import React from "react";
import MyLink from "../router/MyLink";
import Button from "../buttons/Button";

/**
 * @type {React.FC<{to?:string,setToggleState?:React.Dispatch<React.SetStateAction<boolean>>} & React.ButtonHTMLAttributes>}
 */
const NavLink = ({
  to,
  title,
  children,
  className,
  setToggleState,
  onClick,
  ...props
}) => {
  return (
    <>
      <Button
        as={MyLink}
        to={to}
        linkType="NavLink"
        variant="transparent"
        title={title}
        className={`nav-link ${className}`}
        onClick={setToggleState ? () => setToggleState(false) : undefined}
        {...props}
      >
        {children}
      </Button>
    </>
  );
};

export default NavLink;
