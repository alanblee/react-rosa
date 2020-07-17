import React from "react";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import delight1 from "../../images/delight-group-1.jpg";
import delight2 from "../../images/delight-group-2.jpg";

const CulinarySection = () => {
  return (
    <section className="culinary">
      <div className="container">
        <div className="restaurant-info">
          <div className="restaurant-description padding-right animate-left">
            <Slide left>
              <div className="global-headline">
                <h2 className="sub-headline">
                  <span className="first-letter">C</span>ulinary
                </h2>
                <h1 className="headline headline-dark">Delights</h1>
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
                Make a reservation
              </Link>
            </Slide>
          </div>
          <div className="image-group">
            <Fade top>
              <img
                className="animate-top"
                src={delight1}
                alt="restaurant info img"
              />
            </Fade>
            <Fade bottom>
              <img
                className="animate-bottom"
                src={delight2}
                alt="restaurant info img"
              />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulinarySection;
