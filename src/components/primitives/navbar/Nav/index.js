import React from "react";
import { useState } from "react";
import NavLinks from "../NavLinks";
import NavButtons from "../NavButtons";
import NavToggle from "../NavToggle";
import "./nav.css";

/**
 * @type {React.FC<{logo?:React.ReactNode, links?:{[x:string]:any}[], classLink?:string, cta?:React.ReactNode, toggle?:React.ReactNode, classToggle?:string} & React.AllHTMLAttributes>}
 */
const Nav = ({
  className,
  logo,
  links,
  classLink,
  cta,
  toggle,
  classToggle,
  children,
  ...props
}) => {
  const [toggleState, setToggleState] = useState(false);

  const toggleLinks = () => {
    setToggleState((prevState) => !prevState);
  };

  const toggleBtn = toggle ? (
    <NavToggle className={classToggle} toggleLinks={toggleLinks}>
      {toggle}
    </NavToggle>
  ) : null;

  return (
    <>
      <nav className={`nav fixed ${className}`} {...props}>
        <div className="nav-center">
          {logo ? logo : null}
          {links ? (
            <NavLinks
              links={links}
              classLink={classLink}
              toggleState={toggleState}
              setToggleState={setToggleState}
            />
          ) : null}
          <NavButtons cta={cta} toggle={toggleBtn} logo={logo ? true : false}>
            {children}
          </NavButtons>
        </div>
      </nav>
      <div className="nav-spacer"></div>
    </>
  );
};

export default Nav;
