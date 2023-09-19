import React from "react";
import BannerText from "../BannerText";
import BannerIllustration from "../BannerIllustration";
import BannerCTA from "../BannerCTA";
import NormalSection from "../../../../primitives/layout/NormalSection";
import "./banner.css";

/**
 * @type {React.FC}
 */
const BannerSection = () => {
  return (
    <NormalSection>
      <div className="banner" id="home">
        <BannerText />
        <BannerIllustration />
      </div>
      <BannerCTA />
    </NormalSection>
  );
};
export default BannerSection;
