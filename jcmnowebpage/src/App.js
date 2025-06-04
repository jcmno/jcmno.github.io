import './App.css';
import Navbar from './components/Navbar/Navbar';
import Bio from './components/Bio/Bio'
import Projects from './components/Projects/Projects'


const App = () => {
  return (
    <div className = "container">
     <Navbar/>
     <Bio/>
     <Projects/>
    </div>
    
  );
}

export default App

