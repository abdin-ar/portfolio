import React from "react";
import "./banner-text.css";

/**
 * @type {React.FC}
 */
const BannerText = () => {
  return (
    <div className="banner-text">
      <h1 className="h3 banner-h1">
        Improve the <span>Connection</span> with your <span>Customers</span>
      </h1>
      <h2 className="h5 banner-h2">Create a stunning website!</h2>
      <p className="banner-p">
        Hi. I'm Abdul-Rahman Abdin, a web developer. I help you build a better
        relationship with customers by creating an eye-catching website for your
        business.
      </p>
    </div>
  );
};
export default BannerText;
