interface ProjectCardProps {
  iconId: React.ReactNode;
  title: string;
  description: string;
  gitHubLink: string;
  deployLink: string;
}

export const ProjectCard = ({
  iconId,
  title,
  description,
  gitHubLink,
  deployLink,
}: ProjectCardProps) => {
  return (
    <div className="transform transition-transform duration-300">
      <article className="flex items-center flex-col p-4 max-w-xl bg-gray-800 rounded-3xl text-gray-200 border border-gray-600 shadow-md hover:shadow-custom">
        <h3>{title}</h3>
        <div className=" description flex flex-col items-center p-4">
          <svg className="w-40 h-40 p-2">
            <use xlinkHref={`/assets/icons/sprite.svg#${iconId}`} />
          </svg>
          <p>{description}</p>
        </div>
        <div className="links flex gap-4 font-thin">
          <a
            className="bx bxl-github flex items-center gap-1"
            href={`${gitHubLink}`}
          >
            GitHub
          </a>
          <a
            className="bx bxl-netlify flex items-center gap-1"
            href={`${deployLink}`}
          >
            Deploy
          </a>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
