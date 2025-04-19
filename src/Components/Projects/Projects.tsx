import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="user-details">
          <h1 className="section-title">Featured Projects</h1>
        </div>

        <div className="user-projects">
          <div className="images-right">
            <picture>
              <source type="image/webp" srcSet="/src/assets/img/webp/netflix-clone.webp" />
              <img alt="simple designs" src="/src/assets/img/jpg/netflix-clone.jpg" />
            </picture>
          </div>
          <div className="contents">
            <h3>Frontend Clones</h3>
            <div className="tech-icons">
              <img height="32" width="32" src="https://unpkg.com/simple-icons@3.4.0/icons/html5.svg" alt="HTML5" />
              <img height="32" width="32" src="https://unpkg.com/simple-icons@3.4.0/icons/css3.svg" alt="CSS3" />
              <img height="32" width="32" src="https://unpkg.com/simple-icons@3.4.0/icons/github.svg" alt="GitHub" />
            </div>
            <p>
              I Used HTML and CSS to create some designs and developed clones of platforms such as Netflix, Facebook,
              Google, LinkedIn, and YouTube. Focused on designing functional and responsive web pages to enhance
              front-end development skills.
            </p>
            <a className="project-link" target="_blank" rel="noopener" href="https://github.com/AmanMishra11/html_css_projects">
              Check it out!
            </a>
          </div>
        </div>

        <div className="user-projects">
          <div className="images-left">
            <picture>
              <source type="image/webp" srcSet="/src/assets/img/webp/mediacontrol.webp" />
              <img alt="Media Control" src="/src/assets/img/jpg/mediacontrol.png" />
            </picture>
          </div>
          <div className="contents-right">
            <h3>Media Player Controller Using Hand Gesture</h3>
            <div className="tech-icons">
              <img height="32" width="32" src="https://unpkg.com/simple-icons@3.4.0/icons/python.svg" alt="Python" />
              <img height="32" width="32" src="https://img.icons8.com/?size=100&id=lOqoeP2Zy02f&format=png&color=000000" alt="OpenCV" />
              <img height="32" width="32" src="https://unpkg.com/simple-icons@3.4.0/icons/github.svg" alt="GitHub" />
            </div>
            <p>
              I designed a system to recognize a range of hand gestures and translate them into control signals for a media
              player. The system uses a camera to capture images of the users hand and then applies various DIP techniques
              to extract relevant information from the captured images.
            </p>
            <a className="project-link" target="_blank" rel="noopener" 
               href="https://github.com/AmanMishra11/MediaPlayerControllerUsingHandGestures">
              Check it out!
            </a>
          </div>
        </div>

        {/* Add the other two projects following the same pattern */}
        <div className="user-projects">
          <div className="images-right">
            <picture>
              <source type="image/webp" srcSet="/src/assets/img/webp/js2.webp" />
              <img alt="Interactive JS Projects" src="/src/assets/img/jpg/js2.png" />
            </picture>
          </div>
          <div className="contents">
            <h3>Interactive JS Projects</h3>
            <div className="tech-icons">
              <img height="32" width="32" src="https://unpkg.com/simple-icons@3.4.0/icons/html5.svg" alt="HTML5" />
              <img height="32" width="32" src="https://unpkg.com/simple-icons@3.4.0/icons/css3.svg" alt="CSS3" />
              <img height="32" width="32" src="https://unpkg.com/simple-icons@3.4.0/icons/javascript.svg" alt="JavaScript" />
              <img height="32" width="32" src="https://unpkg.com/simple-icons@3.4.0/icons/github.svg" alt="GitHub" />
            </div>
            <p>
              A collection of interactive web applications built with JavaScript.
            </p>
            <a className="project-link" target="_blank" rel="noopener" href="https://amanmishra11.github.io/js-2/home.html">
              Check it out!
            </a>
          </div>
        </div>

        <div className="user-projects">
          <div className="images-left">
            <picture>
              <source type="image/webp" srcSet="/src/assets/img/webp/papaji.webp" />
              <img alt="Food Ordering App" src="/src/assets/img/jpg/js2.png" />
            </picture>
          </div>
          <div className="contents-right">
            <h3>Food Ordering Web Application using Springboot</h3>
            <div className="tech-icons">
              <img height="32" width="32" src="https://unpkg.com/simple-icons@3.4.0/icons/java.svg" alt="Java" />
              <img height="32" width="32" src="https://unpkg.com/simple-icons@3.4.0/icons/mysql.svg" alt="MySQL" />
              <img height="32" width="32" src="https://unpkg.com/simple-icons@3.4.0/icons/spring.svg" alt="Spring" />
            </div>
            <p>
              I worked on the front-end development of the application for a restaurant called "Papaji's" that included the
              design of the user interface, flowcharts for different user and admin scenarios, and some database components
              using spring boot.
            </p>
            <div className="project-links">
              <a className="project-link" target="_blank" rel="noopener" href="https://github.com/AmanMishra11/Food-Ordering">
                Source Code
              </a>
              <a className="project-link" target="_blank" rel="noopener" 
                 href="https://drive.google.com/file/d/1wCF_hpoVVOCaQClmvQtG224adFExwPUn/view?usp=sharing">
                Demo Video
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}