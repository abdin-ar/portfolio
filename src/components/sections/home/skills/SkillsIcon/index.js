import React from "react";
import "./skills-icon.css";

/**
 * @type {React.FC<{id?:number|string, text?:string, image?:string, noOfElements?:number, isMenuOpen?:boolean}>}
 */
const SkillsIcon = ({
  id = 0,
  text = "",
  image = "",
  noOfElements = 1,
  isMenuOpen,
}) => {
  return (
    <li
      style={
        isMenuOpen
          ? {
              transitionDelay: `calc(0.1s * ${id}`,
              transform: `rotate(calc(360deg / ${noOfElements} * ${id}))`,
            }
          : { transitionDelay: `calc(0.1s * ${id}` }
      }
      className="skills-icon"
    >
      <div
        style={{
          transform: `rotate(calc(360deg / -${noOfElements} * ${id}))`,
        }}
      >
        <div className="skills-icon-content skills-animation-bkwd">
          <img src={`./images/skills/${image}.png`} alt={text} />
          <p className="h6">{text}</p>
        </div>
      </div>
    </li>
  );
};
export default SkillsIcon;
