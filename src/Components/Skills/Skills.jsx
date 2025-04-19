import './Skills.css';

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="user">
          <div className="tech">
            <h2>Languages</h2>
            <i className="devicon-python-plain colored"></i>
            <i className="devicon-java-plain-wordmark colored"></i>
            <i className="devicon-cplusplus-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <p>My favorite languages for systems programming, software engineering, and data analysis.</p>
          </div>

          <div className="tech">
            <h2>Front-End</h2>
            <i className="devicon-react-original colored"></i>
            <i className="devicon-bootstrap-plain-wordmark colored"></i>
            <i className="devicon-html5-plain-wordmark colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>
            <p>My preferred technologies for front-end web development and component design.</p>
          </div>

          <div className="tech">
            <h2>Back-End</h2>
            <i className="devicon-nodejs-plain colored"></i>
            <i className="devicon-express-original-wordmark colored"></i>
            <i className="devicon-mongodb-plain-wordmark colored"></i>
            <i className="devicon-postgresql-plain-wordmark colored"></i>
            <p>My preferred technologies for back-end web programming and database architecture.</p>
          </div>

          <div className="tech">
            <h2>Tools</h2>
            <i className="devicon-git-plain-wordmark colored"></i>
            <i className="devicon-visualstudio-plain colored"></i>
            <i className="devicon-github-plain-wordmark colored"></i>
            <i className="devicon-linux-plain"></i>
            <p>My favorite tools for version control, code editing, and container orchestration.</p>
          </div>
        </div>
      </div>
    </section>
  );
}