import CircularMenu from "./CircularMenu";
import skillsData from "../../../data/skillsData";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-bg"></div>
      <div className="circular-menu-container" id="skills">
        <CircularMenu toggle="My Skills" data={skillsData} />
      </div>
      <p className="my-2 fixed-width centered">
        With my extensive knowledge in both frontend and backend web
        development, UI/UX design, as well as 2D and 3D design, I have the
        unique ability to help you provide an amazing web experience to your
        clients.
      </p>
    </section>
  );
};
export default Skills;
