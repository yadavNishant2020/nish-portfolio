import './App.css'
import Sidebar from './components/Sidebar'
import About from './sections/About'
import Contact from './sections/Contact'
import Intro from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'


function App() {

  return (
    <div className='text-white bg-[#161616] min-[1120px]:pl-[16%] '>
      <Sidebar />
      <Intro />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  )
}

export default App
