import React from "react";
import BannerSection from "../sections/home/banner/BannerSection";
import SkillsSection from "../sections/home/skills/SkillsSection";
import ProjectsSection from "../sections/home/projects/ProjectsSection";
import ContactSection from "../sections/home/contact/ContactSection";

/**
 * @type {React.FC}
 */
const Home = () => {
  return (
    <>
      <BannerSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;
