import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section hero-1" id="hero-1">
      <div className="hero-bg-animation">
        <div className="floating-shape circle"></div>
        <div className="floating-shape square"></div>
        <div className="floating-shape circle"></div>
        <div className="floating-shape square"></div>
        <div className="floating-shape triangle"></div>
        <div className="floating-shape triangle"></div>
      </div>

      <div className="particle-system">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${(i + 1) * 10}%`,
              animationDelay: `${(i % 4) * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-icon-massive">🚀</div>
        <h1 className="hero-title-massive">
          {" "}
          ESIC Compliance: Effortless Management for Employee Well-being &
          Business Protection
        </h1>
        <p className="hero-subtitle-massive">
          Master ESIC compliance with EPFDesk.com. We handle registration,
          accurate contributions, monthly filings & ensure all employee
          benefits. Avoid penalties, achieve 99.9% accuracy, and empower your
          HR.
        </p>
        <div className="hero-cta-container">
          <a href="#" className="hero-cta-primary">
            Start Innovation
          </a>
          <a href="#" className="hero-cta-secondary">
            Learn More
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default HeroSection;
