import { Link } from "react-router-dom";
import MyLink from "../router/MyLink";
import useStorage from "../../hooks/useStorage";

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
          <MyLink
            to="/terms"
            type="Link"
            className="a txt-primary txt-10 h-txt-primary h-txt-40 dm-h-txt-primary dm-h-txt-20"
          >
            Terms of Service
          </MyLink>
        </p>
        <button
          type="button"
          className="btn bg-grey bg-70 txt-grey txt-30 h-bg-grey h-bg-80 h-txt-grey h-txt-20"
          onClick={() => setIsAgreed(true)}
        >
          Ok, I got it
        </button>
      </div>
    </div>
  );
};
export default TermsPrompt;
