import { Link } from "react-router-dom";
import MyLink from "../router/MyLink";

const SocialLink = ({ icon, title, href, type }) => {
  if (type === "link") {
    return (
      <MyLink
        className="footer-social-link"
        to={href}
        type="Link"
        title={title}
      >
        <i className={icon}></i>
      </MyLink>
    );
  }
  return (
    <a className="footer-social-link" href={href} title={title}>
      <i className={icon}></i>
    </a>
  );
};
export default SocialLink;
