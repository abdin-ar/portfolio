import { Link } from "react-router-dom";
import MyLink from "../router/MyLink";
// import SocialMediaLinks from "./SocialMediaLinks";

const SiteFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        &copy;{year} Abdin Web Dev. All Rights Reserved.{" "}
        <MyLink
          to="/terms"
          type="Link"
          className="txt-primary txt-20 h-txt-primary h-txt-50 transition dm-h-txt-primary dm-h-txt-30 transition"
        >
          Terms of Service
        </MyLink>
      </p>
      {/* <SocialMediaLinks /> */}
    </footer>
  );
};

export default SiteFooter;
