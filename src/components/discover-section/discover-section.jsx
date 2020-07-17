import React from "react";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";

import story from "../../images/our-story-1.jpg";
const DiscoverSection = () => {
  return (
    <section className="discover-our-story">
      <div className="container">
        <div className="restaurant-info">
          <div className="restaurant-description padding-right animate-left">
            <Slide left>
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
            </Slide>
          </div>
          <div className="restaurant-info-img animate-right">
            <Slide right>
              <img src={story} alt="restaurant info img" />
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
