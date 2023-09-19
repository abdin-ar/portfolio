import React from "react";
import FooterSocialLink from "../FooterSocialLink";
import "./footer-social-links.css";

/**
 * @type {React.FC<{socialLinks:{[x:string]:any}[],linkClassName?:string} & React.AllHTMLAttributes>}
 */
const FooterSocialLinks = ({
  socialLinks,
  className,
  linkClassName,
  ...props
}) => {
  return (
    <div className={`footer-social-links ${className}`} {...props}>
      {socialLinks.map((sLink) => {
        return (
          <FooterSocialLink
            key={sLink.id}
            className={linkClassName}
            {...sLink}
          />
        );
      })}
    </div>
  );
};
export default FooterSocialLinks;
