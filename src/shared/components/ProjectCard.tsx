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
      <article className="flex items-center flex-col p-4 bg-gray-800 rounded-3xl text-gray-200 border border-gray-600 shadow-md hover:bg-gray-700">
        <div>
          <h3>{title}</h3>
          <div className="flex flex-col items-center">
            <svg className="w-40 h-40 p-2">
              <use xlinkHref={`/assets/icons/sprite.svg#${iconId}`} />
            </svg>
            <p>{description}</p>
          </div>
        </div>
        <div className="links flex gap-4 font-thin">
          <a className="flex items-center gap-1" href={`${gitHubLink}`}>
            <svg className="w-4 h-4">
              <use xlinkHref={`/assets/icons/sprite.svg#${iconId}`} />
            </svg>
            GitHub
          </a>
          <a className="flex items-center gap-1" href={`${deployLink}`}>
            <svg className="w-4 h-4">
              <use xlinkHref={`/assets/icons/sprite.svg#${iconId}`} />
            </svg>
            Deploy
          </a>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
