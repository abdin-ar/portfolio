import SkillsIcon from "./SkillsIcon";
import { useRef } from "react";
import useIntersection from "../../../hooks/useIntersection";

const CircularMenu = (props) => {
  const list = useRef();
  const isMenuOpen = useIntersection(list, 0.75);

  const { toggle, data } = props;

  const newProps = { ...props };
  for (const prop in newProps) {
    if (prop === "toggle" || prop === "data") {
      delete newProps[prop];
    }
  }

  return (
    <div className="circular-menu skills-animation-fwd" {...newProps}>
      <div
        className="circular-menu-toggle shadow-3 skills-animation-bkwd"
        style={isMenuOpen ? { transform: "rotate(360deg)" } : null}
        ref={list}
      >
        {toggle}
      </div>
      {data.map((item) => {
        return (
          <SkillsIcon
            key={item.id}
            noOfElements={data.length}
            isMenuOpen={isMenuOpen}
            {...item}
          />
        );
      })}
    </div>
  );
};
export default CircularMenu;
