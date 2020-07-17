import React from "react";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import menu1 from "../../images/menu-group-1.jpg";
import menu2 from "../../images/menu-group-2.jpg";
import menu3 from "../../images/menu-group-3.jpg";
import menu4 from "../../images/menu-group-4.jpg";

const DiscoverMenuSection = () => {
  const menuImages = [menu1, menu2, menu3, menu4];
  const renderImages = () => {
    return menuImages.map((img, indx) => {
      return <img src={img} alt="menu group" key={indx} />;
    });
  };
  return (
    <section className="discover-our-menu">
      <div className="container">
        <div className="restaurant-info">
          <Slide left>
            <div className="image-group padding-right animate-left">
              {renderImages()}
            </div>
          </Slide>
          <Fade right>
            <div className="restaurant-description animate-right">
              <div className="global-headline">
                <h2 className="sub-headline">
                  <span className="first-letter">D</span>iscover
                </h2>
                <h1 className="headline headline-dark">Menu</h1>
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
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default DiscoverMenuSection;
