const SkillsIcon = ({ id, text, image, noOfElements, isMenuOpen }) => {
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
    >
      <div
        style={{
          transform: `rotate(calc(360deg / -${noOfElements} * ${id}))`,
        }}
        className="shadow-3"
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
