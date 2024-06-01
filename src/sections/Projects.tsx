import ProjectComponent from "../components/Projects";
import { Project } from '../interfaces';
import projectsData from '../assets/data/projectsData.json';
import SectionHeading from "../components/SectionHeading";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from "react";

function Projects() {
  const [value, setValue] = useState('1');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const getProjectsByCategory = (category: string) => {
    return projectsData.filter((project: Project) => project.category === category);
  };

  return (
    <div className="min-h-screen ">
      <SectionHeading Heading={"PROJECTS"} Subheading={"Some of my recent works."} />
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} centered aria-label="Project categories tabs" textColor="inherit" className="px-3" >
            <Tab label="Web Apps" value="1"  />
            <Tab label="Mobile Apps" value="2" />
            <Tab label="Designs" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="flex flex-wrap justify-evenly lg:block">
            {getProjectsByCategory("Web Application").map((project: Project, index: number) => (
              <ProjectComponent key={index} project={project} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className="flex flex-wrap justify-evenly lg:block">
            {getProjectsByCategory("Mobile Application").map((project: Project, index: number) => (
              <ProjectComponent key={index} project={project} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value="3">
          <div className="flex flex-wrap justify-evenly lg:block">
            {getProjectsByCategory("Design").map((project: Project, index: number) => (
              <ProjectComponent key={index} project={project} />
            ))}
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
}

export default Projects;
