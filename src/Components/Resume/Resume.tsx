import "./Resume.css";

export default function Resume() {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: "Vellore Institute of Technology",
      year: "2020 - 2024",
      description: "Stream - Computer Science and Engineering",
    },
    {
      id: 2,
      degree: "High School",
      institution: "Sudhananda Vidyalaya",
      year: "2018 - 2020",
      description: "Percentage - 90.2%",
    },
    {
      id: 3,
      degree: "Secondary School",
      institution: "Loyola School",
      year: " - 2018",
      description: "Percentage - 91.0%",
    },
  ];

  const experience = [
    {
      id: 1,
      position: "Product Engineer",
      company: "Tata Consultancy Services",
      year: "2024 - Present",
      description:
        "I was part of a team and we developed Selenium scripts using Python from scratch which is being used to automate the Sanity Test Suit checks for the User Interface of the applications, which was being done manually before      I have documented the entire code base of an application which was built on Springboot and Javascript andhelped make amends to the code depending on the change requests by the customer.       I helped in deploying applications on the local server and on the AWS server and was involved in maintaining it and providing support or help.      Tools used: Selenium, AWS, Linux, SVN",
    },
  ];

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <h2 className="section-title">My Resume</h2>

        <div className="resume-grid">
          <div className="resume-column">
            <h3 className="resume-subtitle">Education</h3>
            <div className="timeline">
              {education.map((edu) => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-line"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{edu.degree}</h4>
                    <p className="timeline-meta">
                      {edu.institution} | {edu.year}
                    </p>
                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-column">
            <h3 className="resume-subtitle">Experience</h3>
            <div className="timeline">
              {experience.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-line"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{exp.position}</h4>
                    <p className="timeline-meta">
                      {exp.company} | {exp.year}
                    </p>
                    <p className="timeline-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="resume-download">
          <a
            href="https://olive-thomasine-68.tiiny.site"
            download
            className="download-button"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
