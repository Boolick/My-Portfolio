import ProjectCard from "./ProjectCard";
import { projects } from "../data/projectData";
import AutoText from "./AutoText";
import { useTranslationContext } from "../../app/providers/TranslationContext";

interface ProjectListProps {
  className?: string;
}
export const ProjectList = ({ className }: ProjectListProps) => {
  const { t } = useTranslationContext();
  return (
    <section
      className={`main ${className} p-4 sm:text-base md:text-lg lg:text-xl`}
    >
      <AutoText text={t("portfolio.title")} speed={100}></AutoText>
      <ul className="grid sm:grid-cols-1 lg:grid-cols-2 gap-1 transition-all duration-300">
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
    </section>
  );
};

export default ProjectList;
