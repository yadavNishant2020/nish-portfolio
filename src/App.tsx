import './App.css'
import Sidebar from './components/Sidebar'
import Intro from './sections/Hero'
import Projects from './sections/Projects'

function App() {

  return (
    <div className='text-white bg-[#161616] pl-64 '>
      <Sidebar />
      <Intro />
      <Projects />
    </div>
  )
}

export default App
