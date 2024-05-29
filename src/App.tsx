import './App.css'
import Sidebar from './components/Sidebar'
import Intro from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'


function App() {

  return (
    <div className='text-white bg-[#161616] md:pl-[16%] '>
      <Sidebar />
      <Intro />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
