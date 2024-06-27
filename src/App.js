import './App.css';
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import ThemeProvider from './components/ThemeContext/ThemeContext';
import Banner from './components/Banner/Banner';
import LocomotiveScroll from 'locomotive-scroll';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';

function App() {
  const locomotive = new LocomotiveScroll();

  return (
    <ThemeProvider>
      <Navbar />
      <Banner />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
