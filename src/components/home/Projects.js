import projectsData from "../../data/projectsData";
import ProjectCard from "./ProjectCard";
import sortData from "../../utils/sortData";

const Projects = () => {
  return (
    <section className="projects mt-8 mb-4">
      <h2 className="h3 text-center mb-2" id="projects">
        Projects
      </h2>
      <article className="max-width gap-4 projects-list">
        {sortData(projectsData).map((project, index) => {
          return <ProjectCard key={project.id} index={index} {...project} />;
        })}
      </article>
    </section>
  );
};
export default Projects;
