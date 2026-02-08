import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Speaking from './components/Speaking';
import Achievements from './components/Achievements';
import Vision from './components/Vision';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Speaking />
      <Achievements />
      <Vision />
      <Contact />
    </div>
  );
}

export default App;
