import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Fade from 'react-reveal/Fade'
import Projects from './components/Projects';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="noise"></div>
      <Fade top>
        <Header />
      </Fade>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App;