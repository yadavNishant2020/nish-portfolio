import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { Project } from '../interfaces';
import { useState } from 'react';

function ProjectComponent({ project }: { project: Project }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex flex-col-reverse flex-wrap  justify-between lg:justify-normal min-w-[22rem] max-w-[40%] lg:max-w-full lg:flex-row items-center relative m-[5%] lg:m-0 lg:p-[7%] z-10 lg:py-[6%] bg-[#111111c0] lg:bg-transparent rounded-md shadow-[8px_5px_15px_-6px_#2d3748] lg:shadow-none">
            <div className=" w-full lg:w-[35vw] gap-6 flex flex-col p-4 lg:p-0">
                <p className="text-lg pt-4 lg:pt-0">{project.id}</p>
                <p className="text-xl font-semibold">{project.title}</p>
                <div className="lg:bg-[#111111c0] lg:rounded-md lg:p-4 lg:shadow-[8px_5px_15px_-6px_#2d3748]">
                    <p className=" lg:text-lg">{project.description}</p>
                </div>
                <div className="flex gap-1 lg:gap-6 flex-wrap w-[120%]">
                    {project.techStack.map((tech: any, index: any) => (
                        <p key={index} className="bg-[#111111d7] p-2 px-5 rounded-full shadow-[8px_3px_15px_-6px_#2d3748]">{tech}</p>
                    ))}
                </div>
                <div className="flex gap-4 text-2xl">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <TbExternalLink />
                    </a>
                </div>
            </div>
            <div className={`lg:absolute lg:w-1/2 right-[7%] transform transition-transform duration-300 ${isHovered ? 'z-20 scale-105' : '-z-10'}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img className="rounded-t-md lg:rounded-md" src={project.image} alt={project.title} />
            </div>
        </div>
    );
}

export default ProjectComponent;