import React from "react";
import { useRef, useEffect } from "react";
import NavLink from "./NavLink";

/**
 * @type {React.FC<{links?:{[x:string]:any}[],classLink?:string,toggleState?:boolean,setToggleState?:React.Dispatch<React.SetStateAction<boolean>>} & React.AllHTMLAttributes>}
 */
const NavLinks = ({
  links,
  classLink,
  toggleState,
  setToggleState,
  ...props
}) => {
  /**
   * @type {React.RefObject<HTMLDivElement>}
   */
  const navLinksContainerRef = useRef(null);

  /**
   * @type {React.RefObject<HTMLDivElement>}
   */
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef?.current?.getBoundingClientRect().height;
    if (!navLinksContainerRef?.current) return;
    if (toggleState) {
      navLinksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      navLinksContainerRef.current.style.height = `0px`;
    }
  }, [toggleState]);

  return (
    <>
      <div
        className="nav-links-container"
        ref={navLinksContainerRef}
        {...props}
      >
        <div className="nav-links" ref={linksRef}>
          {links?.map((link) => (
            <NavLink
              key={link.id}
              to={link.to}
              title={link.name}
              className={classLink}
              setToggleState={setToggleState}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavLinks;
