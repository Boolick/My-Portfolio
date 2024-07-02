import ProjectCard from "./ProjectCard";
import { projects } from "../data/projectData";

export const ProjectList = () => {
  return (
    <ul className="grid grid-cols-2 gap-1">
      {projects.map((project, index) => (
        <li key={index} className="p-4">
          <ProjectCard
            iconId={project.iconId}
            title={project.title}
            description={project.description}
            gitHubLink={project.gitHubLink}
            deployLink={project.deployLink}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
