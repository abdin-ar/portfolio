import React from "react";
import MyLink from "../../router/MyLink";
import Button from "../../buttons/Button";
import useStorage from "../../../../hooks/useStorage";
import "./terms-prompt.css";

/**
 * @type {React.FC}
 */
const TermsPrompt = () => {
  const [isAgreed, setIsAgreed] = useStorage("termsAgreementClosed", false);

  if (isAgreed) {
    return null;
  }

  return (
    <div className="terms-prompt">
      <div>
        <p>
          By continuing to use this website, you agree to our{" "}
          <MyLink to="/terms" linkType="Link" className="a">
            Terms of Service
          </MyLink>
        </p>
        <Button onClick={() => setIsAgreed(true)}>Ok, I got it</Button>
      </div>
    </div>
  );
};
export default TermsPrompt;
