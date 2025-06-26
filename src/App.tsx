import { useState, useEffect, lazy, Suspense } from "react";
import Sidebar from "./components/Sidebar";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load sections for better performance
const Hero = lazy(() => import("./sections/Hero"));
const Projects = lazy(() => import("./sections/Projects"));
const Skills = lazy(() => import("./sections/Skills"));
const About = lazy(() => import("./sections/About"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

function App() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="text-white bg-[#161616]">
        <Sidebar activeSection={activeSection} onCloseSidebar={() => {}} />

        <div className="min-[1120px]:pl-[16%]">
          <Suspense fallback={<LoadingSpinner />}>
            <section id="intro">
              <Hero />
            </section>

            <section id="projects">
              <Projects />
            </section>

            <section id="skills">
              <Skills />
            </section>

            <section id="about">
              <About />
            </section>

            <section id="contact">
              <Contact />
            </section>

            <Footer />
          </Suspense>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
