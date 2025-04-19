import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img
                src="/src/assets/img/jpg/hero_2.jpg"
                srcSet="/src/assets/img/webp/hero_2.webp" 
                alt="Profile"
                className="about-image"
              />
            </div>
          </div>
          <div className="about-text">
            <h3 className="about-subtitle">Who am I?</h3>
            <p className="about-description">
              I am a graduate from Vellore Institute of Technology, Chennai. I
              did my B.Tech in Computer Science and Engineering. I am working as
              a Product Engineer at Tata Consultancy Services, Bhubaneswar. I am
              a keen learner, curious to discover more and enhance my technical
              knowledge. Looking for opportunities to be part of an environment
              where I can practically apply my skills and become a strong
              software developer.
              I love creating beautiful, responsive, and
              user-friendly web applications. With a strong foundation in
              JavaScript and modern web technologies, I bring ideas to life with
              clean and efficient code.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <h4 className="detail-label">Name:</h4>
                <p className="detail-value">Aman Mishra</p>
              </div>
              <div className="detail-item">
                <h4 className="detail-label">Email:</h4>
                <p className="detail-value">amanmishralm10@gmail.com</p>
              </div>
              <div className="detail-item">
                <h4 className="detail-label">From:</h4>
                <p className="detail-value">Bhubaneswar</p>
              </div>
              <div className="detail-item">
                <h4 className="detail-label">Phone:</h4>
                <p className="detail-value">+91 7847953767</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
