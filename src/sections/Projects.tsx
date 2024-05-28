import ProjectComponent from "../components/Projects";
import { Project } from '../interfaces'; 
import projectsData from '../assets/data/projectsData.json'; // Import your project data

function Projects() {
    return (
        <div>
            {projectsData.map((project: Project, index: number) => (
                <ProjectComponent key={index} project={project} />
            ))}
        </div>
    );
}

export default Projects;
