import React from "react";
import CircularMenu from "../CircularMenu";
import skillsData from "../../../../../data/skillsData";
import DarkSection from "../../../../primitives/layout/DarkSection";
import "./skills.css";

/**
 * @type {React.FC}
 */
const SkillsSection = () => {
  return (
    <DarkSection>
      <div className="circular-menu-container" id="skills">
        <CircularMenu toggle="My Skills" data={skillsData} />
      </div>
      <p className="skills-text">
        With my extensive knowledge in both frontend and backend web
        development, UI/UX design, as well as 2D and 3D design, I have the
        unique ability to help you provide an amazing web experience to your
        clients.
      </p>
    </DarkSection>
  );
};
export default SkillsSection;
