import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { Project } from "../interfaces";
import { useState, memo } from "react";

interface ProjectComponentProps {
  project: Project;
}

const ProjectComponent = memo(({ project }: ProjectComponentProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="flex flex-col-reverse flex-wrap justify-between lg:justify-normal min-w-[85%] max-w-[40%] lg:max-w-full lg:flex-row items-center relative m-[5%] lg:m-0 lg:p-[7%] z-10 lg:py-[6%] bg-[#111111c0] lg:bg-transparent rounded-md shadow-[8px_5px_15px_-6px_#2d3748] lg:shadow-none">
      <div className="w-full lg:w-[35vw] gap-4 sm:gap-6 flex flex-col p-4 lg:p-0">
        <p className="text-sm sm:text-base lg:text-lg pt-4 lg:pt-0 text-gray-300">{`PROJECT #${
          project.id.split("-")[1]
        }`}</p>
        <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
        <div className="lg:bg-[#111111c0] lg:rounded-md lg:p-4 lg:shadow-[8px_5px_15px_-6px_#2d3748]">
          <p className="text-sm sm:text-base lg:text-lg text-gray-200">
            {project.description}
          </p>
        </div>
        <div
          className="flex gap-2 sm:gap-4 lg:gap-6 flex-wrap md:w-[120%]"
          role="list"
          aria-label="Technologies used"
        >
          {project.techStack.map((tech: string, index: number) => (
            <span
              key={`${project.id}-tech-${index}`}
              className="bg-[#111111d7] py-1 px-3 sm:py-2 sm:px-4 lg:p-2 lg:px-5 rounded-full shadow-[8px_3px_15px_-6px_#2d3748] text-xs sm:text-sm lg:text-sm"
              role="listitem"
            >
              {tech}
            </span>
          ))}
        </div>
        <div
          className="flex gap-4 text-xl sm:text-2xl"
          role="group"
          aria-label="Project links"
        >
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="hover:text-gray-300 transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
            className="hover:text-gray-300 transition-colors duration-200"
          >
            <TbExternalLink />
          </a>
        </div>
      </div>
      <div
        className={`lg:absolute lg:w-1/2 right-[7%] transform transition-transform duration-300 ${
          isHovered ? "z-20 scale-105" : "-z-10"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} demo`}
        >
          <div className="relative">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-t-md lg:rounded-md" />
            )}
            <img
              className={`rounded-t-md lg:rounded-md cursor-pointer transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
            />
          </div>
        </a>
      </div>
    </article>
  );
});

ProjectComponent.displayName = "ProjectComponent";

export default ProjectComponent;
