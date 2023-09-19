import React from "react";
import MyLink from "../../router/MyLink";
import "./footer-social-link.css";

/**
 * @type {React.FC<React.AnchorHTMLAttributes & {icon?:string,title?:string,type?:'Link'|'NavLink'|'a'}>}
 */
const FooterSocialLink = ({ icon, title, href, type, className, ...props }) => {
  if (type === "Link") {
    return (
      <MyLink
        className={`footer-social-link ${className}`}
        to={href}
        linkType="Link"
        title={title}
        {...props}
      >
        <i className={icon}></i>
      </MyLink>
    );
  }
  return (
    <a
      className={`footer-social-link ${className}`}
      href={href}
      title={title}
      {...props}
    >
      <i className={icon}></i>
    </a>
  );
};
export default FooterSocialLink;
