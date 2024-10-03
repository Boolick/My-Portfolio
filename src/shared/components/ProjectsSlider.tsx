import { useState } from "react";
import { projects } from "../data/projectData";

export const ProjectsSlider = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  
  return (
    <div className="project-slider flex w-11/12 mx-auto h-[70vh]">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`relative flex-1 m-2 rounded-lg transition-[flex] duration-700 ease-in-out cursor-pointer ${
            activeIndex === index ? "flex-[5]" : "flex-[0.5]"
          }`}
          style={{
            backgroundImage: `url(${project.iconId})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => handleClick(index)}
        >
          <h3
            className={`absolute bottom-25 left-5 text-white text-2xl transition-opacity duration-500 ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`absolute bottom-5 left-5 transition-opacity duration-500 ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {project.description}
          </p>
          {activeIndex === index && (
            <div className="absolute bottom-5 right-5">
              <a
                href={project.gitHubLink}
                className="text-white mr-4 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={project.deployLink}
                className="text-white underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
