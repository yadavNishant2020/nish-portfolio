import { useState } from 'react';
import Sidebar from './components/Sidebar';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Intro from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const handleCloseSidebar = () => {};
  
  return (
    <div className='text-white bg-[#161616] min-[1120px]:pl-[16%] '>
      <Sidebar activeSection={activeSection} onCloseSidebar={handleCloseSidebar} /> 
      <div id="intro" onFocus={() => setActiveSection('intro')} onBlur={() => setActiveSection('')}>
        <Intro />
      </div>
      <div id="projects" onFocus={() => setActiveSection('projects')} onBlur={() => setActiveSection('')}>
        <Projects />
      </div>
      <div id="skills" onFocus={() => setActiveSection('skills')} onBlur={() => setActiveSection('')}>
        <Skills />
      </div>
      <div id="about" onFocus={() => setActiveSection('about')} onBlur={() => setActiveSection('')}>
        <About />
      </div>
      <div id="contact" onFocus={() => setActiveSection('contact')} onBlur={() => setActiveSection('')}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;