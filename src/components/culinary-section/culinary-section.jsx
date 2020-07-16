import React from "react";
import { Link } from "react-router-dom";
import delight1 from "../../images/delight-group-1.jpg";
const CulinarySection = () => {
  return (
    <section className="culinary">
      <div className="container">
        <div className="restaurant-info">
          <div className="restaurant-description padding-right animate-left">
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
          </div>
          <div className="restaurant-info-img ">
            <img src={delight1} alt="restaurant info img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulinarySection;
