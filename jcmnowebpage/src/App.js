import './App.css';
import Navbar from './components/Navbar/Navbar';
import Bio from './components/Bio/Bio'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Work from './components/Work/Work'


const App = () => {
  return (
    <div className = "container">
     <Navbar/>
     <Bio/>
     <Projects/>
     <Skills/>
     <Education/>
     <Work/>
    </div>
    
  );
}

export default App

