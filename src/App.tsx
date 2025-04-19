import { useState } from "react";
import Header from "./Components/Header/Header.js";
import Hero from "./Components/Hero/Hero.js";
import About from "./Components/About/About.js";
import Skills from "./Components/Skills/Skills.js";
import Projects from "./Components/Projects/Projects.js";
import Resume from "./Components/Resume/Resume.js";
import Contact from "./Components/Contact/Contact.js";
import Footer from "./Components/Footer/Footer.js";
import "./App.css";
import 'devicon';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className={`app ${darkMode ? "dark" : ""}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
