import './App.css';
import Navbar from './components/Navbar/Navbar';
import Bio from './components/Bio/Bio'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'


const App = () => {
  return (
    <div className = "container">
     <Navbar/>
     <Bio/>
     <Projects/>
     <Skills/>
    </div>
    
  );
}

export default App

