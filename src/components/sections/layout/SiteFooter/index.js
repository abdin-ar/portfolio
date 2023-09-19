import React from "react";
import Footer from "../../../primitives/footer/Footer";
import MyLink from "../../../primitives/router/MyLink";
// import FooterSocialLinks from "../../../primitives/layout/FooterSocialLinks";
import "./site-footer.css";

/**
 * @type {React.FC}
 */
const SiteFooter = () => {
  const year = new Date().getFullYear();
  return (
    <Footer>
      <p>
        &copy;{year} Abdin Web Dev. All Rights Reserved.{" "}
        <MyLink to="/terms" linkType="Link" className="site-footer-link">
          Terms of Service
        </MyLink>
      </p>
      {/* <FooterSocialLinks /> */}
    </Footer>
  );
};

export default SiteFooter;
