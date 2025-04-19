import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <h1 className="hero-title">Hi, I'm Aman</h1>
        <p className="hero-subtitle">Software Engineer</p>
        <div className="hero-buttons">
          <a href="#contact" className="hero-button primary">Hire Me</a>
          <a href="#projects" className="hero-button secondary">View Work</a>
        </div>
      </div>
    </section>
  );
}