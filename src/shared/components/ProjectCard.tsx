interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  hue?: number;
}

export const ProjectCard = ({ icon, title, description }: ProjectCardProps) => {
  return (
    <li>
      <article>
        {icon}
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
    </li>
  );
};

export default ProjectCard;
