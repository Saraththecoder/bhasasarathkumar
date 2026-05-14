import "./styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-card">
          <div className="card-header">
            <span className="card-dot"></span>
            <span className="card-label">PROFILE</span>
          </div>
          <div className="about-content">
            <h2 className="title"> About me </h2>
            <p className="para">
              Second-year Artificial Intelligence & Machine Learning student (CGPA: 9.03) with experience in frontend development, AI-powered web applications, and open-source development. Proficient in React, TypeScript, Python, Firebase, and FastAPI, focused on building responsive and real-world intelligent systems.
            </p>
          </div>
          <div className="card-footer">
            <div className="card-stat">
              <span className="stat-value">9.03</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="card-stat">
              <span className="stat-value">2ND</span>
              <span className="stat-label">YEAR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
