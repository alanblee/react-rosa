import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

import story from "../../images/our-story-1.jpg";
const DiscoverSection = () => {
  return (
    <section className="discover-our-story">
      <div className="container">
        <div className="restaurant-info">
          <Slide left>
            <div className="restaurant-description padding-right animate-left">
              <div className="global-headline">
                <h2 className="sub-headline">
                  <span className="first-letter">D</span>iscover
                </h2>
                <h1 className="headline headline-dark">Our story</h1>
                <div className="asterisk">
                  <i className="fas fa-asterisk"></i>
                </div>
              </div>
              <p>
                t amet, consectetur adipiscing elit. Maecenas ultrices magna ac
                tristique rutrum. Curabitur nibh purus, dictum quis nulla sit
                amet, gravida gravida lorem. Sed fringilla massa nibh, a mattis
                ligula aliquam in. Mauris vestibulum quam a suscipit ultricies.
                Praesent id lacinia sapien, at tincidunt metus.
              </p>
              <Link to="/" className="btn body-btn">
                About Us
              </Link>
            </div>
          </Slide>
          <Fade right>
            <div className="restaurant-info-img animate-right">
              <img src={story} alt="restaurant info img" />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
