import ProjectComponent from "../components/Projects";
import { Project } from "../interfaces";
import projectsData from "../assets/data/projectsData.json";
import SectionHeading from "../components/SectionHeading";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CustomPagination from "../components/CustomPagination";
import { useState } from "react";

function Projects() {
  const [value, setValue] = useState("1");
  const [currentPage, setCurrentPage] = useState<{ [key: string]: number }>({
    "1": 1,
    "2": 1,
    "3": 1,
  });
  const projectsPerPage = 4;

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    // Reset to page 1 when switching tabs if current page doesn't exist for new category
    if (!currentPage[newValue]) {
      setCurrentPage((prev) => ({
        ...prev,
        [newValue]: 1,
      }));
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage((prev) => ({
      ...prev,
      [value]: page,
    }));
  };

  const getProjectsByCategory = (category: string) => {
    return projectsData.filter(
      (project: Project) => project.category === category
    );
  };

  const getPaginatedProjects = (category: string) => {
    const projects = getProjectsByCategory(category);
    const currentPageForTab = currentPage[value] || 1;
    const startIndex = (currentPageForTab - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    return projects.slice(startIndex, endIndex);
  };

  const getTotalPages = (category: string) => {
    const projects = getProjectsByCategory(category);
    return Math.ceil(projects.length / projectsPerPage);
  };

  return (
    <div className="min-h-screen">
      <SectionHeading
        Heading={"PROJECTS"}
        Subheading={"Some of my recent works."}
      />
      <TabContext value={value}>
        <Box className="w-full flex justify-center">
          <TabList
            onChange={handleChange}
            centered
            aria-label="Project categories tabs"
            textColor="inherit"
            className="px-2 sm:px-3"
          >
            <Tab
              label="Web Apps"
              value="1"
              className="text-xs sm:text-sm md:text-base"
            />
            <Tab
              label="Mobile Apps"
              value="2"
              className="text-xs sm:text-sm md:text-base"
            />
            <Tab
              label="Designs"
              value="3"
              className="text-xs sm:text-sm md:text-base"
            />
          </TabList>
        </Box>

        <TabPanel value="1">
          <div className="flex flex-wrap justify-evenly lg:block">
            {getPaginatedProjects("Web Application").map(
              (project: Project, index: number) => (
                <ProjectComponent key={index} project={project} />
              )
            )}
          </div>
          {getTotalPages("Web Application") > 1 && (
            <CustomPagination
              currentPage={currentPage[value] || 1}
              totalPages={getTotalPages("Web Application")}
              onPageChange={handlePageChange}
            />
          )}
        </TabPanel>

        <TabPanel value="2">
          <div className="flex flex-wrap justify-evenly lg:block">
            {getPaginatedProjects("Mobile Application").map(
              (project: Project, index: number) => (
                <ProjectComponent key={index} project={project} />
              )
            )}
          </div>
          {getTotalPages("Mobile Application") > 1 && (
            <CustomPagination
              currentPage={currentPage[value] || 1}
              totalPages={getTotalPages("Mobile Application")}
              onPageChange={handlePageChange}
            />
          )}
        </TabPanel>

        <TabPanel value="3">
          <div className="flex flex-wrap justify-evenly lg:block">
            {getPaginatedProjects("Design").map(
              (project: Project, index: number) => (
                <ProjectComponent key={index} project={project} />
              )
            )}
          </div>
          {getTotalPages("Design") > 1 && (
            <CustomPagination
              currentPage={currentPage[value] || 1}
              totalPages={getTotalPages("Design")}
              onPageChange={handlePageChange}
            />
          )}
        </TabPanel>
      </TabContext>
    </div>
  );
}

export default Projects;
