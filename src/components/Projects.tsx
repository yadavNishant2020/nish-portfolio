import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { Project } from '../interfaces';
import { useState } from 'react';

function ProjectComponent({ project }: { project: Project }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex items-center relative p-[7%] z-10 py-[6%]">
            <div className="w-[35vw] gap-6 flex flex-col">
                <p className="text-lg">{project.id}</p>
                <p className="text-xl font-semibold">{project.title}</p>
                <div className="bg-[#111111c0] rounded-md p-4 shadow-[8px_5px_15px_-6px_#2d3748]">
                    <p className="text-lg">{project.description}</p>
                </div>
                <div className="flex gap-6">
                    {project.techStack.map((tech:any, index:any) => (
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
            <div className={`absolute w-1/2 right-[7%] transform transition-transform duration-300 ${isHovered ? 'z-20 scale-105' : '-z-10'}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img className="rounded-md" src={project.image} alt={project.title} />
            </div>
        </div>
    );
}

export default ProjectComponent;
