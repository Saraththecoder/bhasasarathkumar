import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import setSplitText from "./utils/splitText";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    setSplitText();
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-card-header">
              <span className="what-card-dot"></span>
              <span className="what-card-label">Specialization 01</span>
            </div>
            <div className="what-content-in">
              <h3 className="title">AI &amp; ML</h3>
              <h4>Intelligent Systems &amp; Applications</h4>
              <p className="para">
                Focused on building real-world AI solutions, including AI Chatbot Development, Prompt Engineering, and Generative AI using Gemini APIs.
              </p>
              <div className="what-details">
                <h5>Skillset &amp; tools</h5>
                <div className="what-content-flex">
                  <div className="what-tags">Python</div>
                  <div className="what-tags">Generative AI</div>
                  <div className="what-tags">FastAPI</div>
                  <div className="what-tags">MongoDB</div>
                  <div className="what-tags">OpenCV</div>
                  <div className="what-tags">NetworkX</div>
                </div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-card-header">
              <span className="what-card-dot"></span>
              <span className="what-card-label">Specialization 02</span>
            </div>
            <div className="what-content-in">
              <h3 className="title">FRONTEND &amp; OPEN-SOURCE</h3>
              <h4>Modern Web &amp; Collaborative Tech</h4>
              <p className="para">
                Building responsive web applications, exploring modern technologies, and contributing to collaborative open-source projects while driving creative ideas through tech communities.
              </p>
              <div className="what-details">
                <h5>Skillset &amp; tools</h5>
                <div className="what-content-flex">
                  <div className="what-tags">React</div>
                  <div className="what-tags">Next.js</div>
                  <div className="what-tags">Tailwind CSS</div>
                  <div className="what-tags">Firebase</div>
                  <div className="what-tags">Git/GitHub</div>
                  <div className="what-tags">UI/UX</div>
                  <div className="what-tags">Figma</div>
                </div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
