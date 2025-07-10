import { useState } from "react";

interface SidebarProps {
  activeSection: string;
  onCloseSidebar: () => void;
}

export default function Sidebar({
  activeSection,
  onCloseSidebar,
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSectionClick = (sectionId: string) => {
    setIsOpen(false);
    onCloseSidebar();

    // Smooth scroll to section without changing URL
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const listStyle = "ms-3 transition-all duration-200 ease-in cursor-pointer hover:text-gray-100 text-xl sm:text-2xl min-[1120px]:text-lg";

  return (
    <>
      {/* Mobile Header */}
      <div className="min-[1120px]:hidden flex items-center justify-between p-4 sm:p-6 bg-[#111111] text-gray-400 fixed top-0 left-0 right-0 z-50">
        <img
          src="/logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="w-16 h-auto sm:w-20 hover:opacity-90 transition-opacity duration-200"
        />
        <button
          onClick={toggleSidebar}
          className="text-gray-400 focus:outline-none hover:text-white transition-colors duration-200"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-full min-[1120px]:w-64 h-screen bg-[#111111] text-gray-400 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full "
        } transition-transform duration-300 ease-in-out min-[1120px]:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="flex items-center justify-center h-full px-4 sm:px-6">
          <ul className="flex flex-col space-y-4 sm:space-y-6 min-[1120px]:space-y-2 font-sans text-lg gap-4 sm:gap-7 min-[1120px]:gap-7 text-center min-[1120px]:text-left w-full">
            {/* Desktop Logo */}
            <li className="cursor-pointer min-[1120px]:block hidden">
              <img
                src="/logo.png"
                alt="Nishant Singh Yadav Logo"
                width={170}
                height={170}
                className="mb-12 xl:mb-16 transition-all duration-200 ease-in hover:opacity-90 w-32 lg:w-40 xl:w-44 h-auto mx-auto"
              />
            </li>

            {/* Navigation Items */}
            <li>
              <button
                onClick={() => handleSectionClick("intro")}
                className={`${listStyle} ${
                  activeSection === "intro" ? "text-white" : "text-gray-400"
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionClick("projects")}
                className={`${listStyle} ${
                  activeSection === "projects" ? "text-white" : "text-gray-400"
                }`}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionClick("skills")}
                className={`${listStyle} ${
                  activeSection === "skills" ? "text-white" : "text-gray-400"
                }`}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionClick("about")}
                className={`${listStyle} ${
                  activeSection === "about" ? "text-white" : "text-gray-400"
                }`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionClick("contact")}
                className={`${listStyle} ${
                  activeSection === "contact" ? "text-white" : "text-gray-400"
                }`}
              >
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-30 min-[1120px]:hidden"
          aria-hidden="true"
        ></div>
      )}
    </>
  );
}
