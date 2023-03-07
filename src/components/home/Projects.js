import projectsData from "../../data/projectsData";
import ProjectCard from "./ProjectCard";
import sortData from "../../utils/sortData";

const Projects = () => {
  return (
    <section className="projects mt-8 mb-4">
      <h2 className="h3 text-center mb-2" id="projects">
        Projects
      </h2>
      <article className="max-width flex justify-center align-center gap-4 column">
        {sortData(projectsData).map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </article>
    </section>
  );
};
export default Projects;
