import { LuBriefcase } from "react-icons/lu";
import { HiSparkles, HiCodeBracket } from "react-icons/hi2";
import { MdRocketLaunch, MdCloud } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import "./styles/Career.css";

const experiences = [
  {
    id: 0,
    title: "Women Ideathon 1.0 Finalist",
    role: "CBIT Hyderabad",
    subtitle: "Hackathon Finalist",
    date: "Mar 2026",
    duration: "Finalist",
    description:
      "Built Sakhi, a WhatsApp-based healthcare companion designed to make women’s healthcare more accessible and conversational. Presented the final solution after completing a structured mentorship phase.",
    icon: <FaUsers />,
    color: "#ec4899"
  },
  {
    id: 1,
    title: "Anantapur Police AI Hackathon",
    role: "Hackathon Finalist",
    subtitle: "FraudShield",
    date: "Mar 2026",
    duration: "Finalist",
    description:
      "Designed and developed FraudShield, a fraud detection platform using FastAPI, MongoDB, React, and NetworkX with multi-layer fraud detection and graph-based relationship traversal.",
    icon: <MdRocketLaunch />,
    color: "#f43f5e"
  },
  {
    id: 2,
    title: "Open Source Contributor",
    role: "GirlScript Summer of Code",
    subtitle: "GSSoC 2026",
    date: "Apr 2026",
    duration: "Present",
    description:
      "Contributing to open-source projects, collaborating with developers, and improving technical and problem-solving skills through real-world development workflows.",
    icon: <HiCodeBracket />,
    color: "#22d3ee"
  },
  {
    id: 3,
    title: "Google Student Ambassador",
    role: "Google Student Ambassadors India",
    subtitle: "GSA 2026",
    date: "May 2026",
    duration: "Present",
    description:
      "Representing student developer communities, promoting technology initiatives, and engaging in AI and development-focused collaborative activities.",
    icon: <HiSparkles />,
    color: "#a855f7"
  },
  {
    id: 4,
    title: "Google Cloud Certification",
    role: "Google Cloud",
    subtitle: "Generative AI Studio",
    date: "2025",
    duration: "Certified",
    description:
      "Completed Google Cloud certification focused on Generative AI Studio and foundational cloud-based AI workflows using GCP tools and services.",
    icon: <MdCloud />,
    color: "#3b82f6"
  }
];

const Career = () => {
  return (
    <section className="career-section section-container" id="experience">
      <div className="career-header">
        <LuBriefcase className="header-icon" />
        <h2 className="header-title">EXPERIENCE</h2>
        <div className="header-line"></div>
      </div>

      <div className="career-container">
        <div className="career-timeline-line"></div>

        <div className="career-items">
          {experiences.map((exp) => (
            <div className="career-item" key={exp.id}>
              <div className="career-date-container">
                <span className="career-month">{exp.date.split(' ')[0]}</span>
                <span className="career-year">{exp.date.split(' ')[1]}</span>
                <span className="career-duration">— {exp.duration}</span>
              </div>

              <div className="career-dot-container">
                <div className="career-dot"></div>
              </div>

              <div className="career-card">
                <div className="card-icon-wrapper" style={{ '--icon-color': exp.color } as any}>
                  <div className="card-icon">{exp.icon}</div>
                </div>

                <div className="card-content">
                  <div className="card-header-info">
                    <h3 className="card-title">{exp.title}</h3>
                    <h4 className="card-role">{exp.role}</h4>
                    <h5 className="card-subtitle">{exp.subtitle}</h5>
                  </div>

                  <p className="card-description">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;