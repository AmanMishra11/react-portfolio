import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import './Header.css';

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <div className="container header-container">
        <h1 className="header-logo">aman</h1>
        <nav className="header-nav">
          <a href="#about" className="header-link">About</a>
          <a href="#projects" className="header-link">Projects</a>
          <a href="#resume" className="header-link">Resume</a>
          <a href="#contact" className="header-link">Contact</a>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle"
          >
            {darkMode ? (
              <SunIcon className="theme-icon sun" />
            ) : (
              <MoonIcon className="theme-icon moon" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}