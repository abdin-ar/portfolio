import React from "react";
import NormalSection from "../primitives/layout/NormalSection";
import MyLink from "../primitives/router/MyLink";
import Button from "../primitives/buttons/Button";
import ButtonContainer from "../primitives/buttons/ButtonContainer";

/**
 * @type {React.FC}
 */
const Error = () => {
  return (
    <NormalSection>
      <h2 className="h3">Page Not Found!</h2>
      <p>Oops! There is no page with this URL.</p>
      <ButtonContainer position="start" areWrapped={false}>
        <Button as={MyLink} to="/" linkType="Link" variant="primary">
          Navigate Back Home
        </Button>
        <Button as={MyLink} to="/#contact" linkType="Link" variant="grey">
          Report a Problem
        </Button>
      </ButtonContainer>
    </NormalSection>
  );
};

export default Error;
