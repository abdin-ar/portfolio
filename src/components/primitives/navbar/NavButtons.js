import React from "react";
import ButtonContainer from "../buttons/ButtonContainer";

/**
 * @type {React.FC<{cta:React.ReactNode,toggle:React.ReactNode,logo:React.ReactNode} & React.AllHTMLAttributes>}
 */
const NavButtons = ({ cta, toggle, logo, children, style, ...props }) => {
  const quantity = (toggle ? 1 : 0) + (cta ? 1 : 0) + (children ? 1 : 0);
  if (quantity === 0) {
    return null;
  }
  if (quantity === 1 && toggle) {
    return <>{toggle}</>;
  }
  if (!logo) {
    return (
      <ButtonContainer
        position="end"
        style={{ margin: "0 0 0 auto", ...style }}
        {...props}
      >
        {children}
        {toggle}
        {cta}
      </ButtonContainer>
    );
  }
  return (
    <ButtonContainer
      position="end"
      style={{ margin: "0", ...style }}
      {...props}
    >
      {children}
      {toggle}
      {cta}
    </ButtonContainer>
  );
};

export default NavButtons;
