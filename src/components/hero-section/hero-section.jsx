import React from "react";
import { Link } from "react-router-dom";
const HeroSection = React.forwardRef((props, ref) => {
  return (
    <section className="hero" ref={ref}>
      <div className="container">
        <h2 className="sub-headline">
          <span className="first-letter">W</span>
          elcome
        </h2>
        <h1 className="headline">The Rosa</h1>
        <div className="headline-description">
          <div className="separator">
            <div className="line line-left"></div>
            <div className="asterisk">
              <i className="fas fa-asterisk"></i>
            </div>
            <div className="line line-right"></div>
          </div>
          <div className="single-animation">
            <h5>Ready to be opened</h5>
            <Link to="/" className="btn cta-btn">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
