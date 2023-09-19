import React from "react";
import Button from "../../../../primitives/buttons/Button";
import ButtonContainer from "../../../../primitives/buttons/ButtonContainer";
import "./banner-cta.css";

/**
 * @type {React.FC}
 */
const BannerCTA = () => {
  return (
    <ButtonContainer className="banner-cta">
      <Button as="a" href="#contact" variant="primary" className="banner-btn">
        Start Building Your Great Website
      </Button>
      <Button as="a" href="#projects" variant="grey" className="banner-btn">
        View Sample Projects
      </Button>
    </ButtonContainer>
  );
};
export default BannerCTA;
