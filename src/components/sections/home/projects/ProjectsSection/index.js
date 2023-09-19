import React from "react";
import NormalSection from "../../../../primitives/layout/NormalSection";
import projectsData from "../../../../../data/projectsData";
import ProjectCard from "../ProjectCard";
import sortData from "../../../../../utils/sortData";
import "./projects.css";

const ProjectsSection = () => {
  return (
    <NormalSection>
      <h2 className="h3 projects-heading" id="projects">
        Projects
      </h2>
      <article className="projects-list">
        {sortData(projectsData).map((project, index) => {
          return <ProjectCard key={project.id} index={index} {...project} />;
        })}
      </article>
    </NormalSection>
  );
};
export default ProjectsSection;
