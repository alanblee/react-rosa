import React from "react";
import { Link } from "react-router-dom";
import NewsletterForm from "./newsletter-form";

const FooterSection = () => {
  const socials = [
    "twitter",
    "facebook-square",
    "pinterest",
    "linkedin-in",
    "tripadvisor",
  ];
  const renderSocials = () => {
    return socials.map((social, indx) => {
      return (
        <li key={indx}>
          <Link to="#">
            <i className={`fab fa-${social}`}></i>
          </Link>
        </li>
      );
    });
  };
  return (
    <footer>
      <div className="container">
        <div className="back-to-top">
          <Link>
            <i className="fas fa-chevron-up"></i>
          </Link>
        </div>
        <div className="footer-content">
          <div className="footer-content-about animate-up">
            <h4>About Rosa</h4>
            <div className="asterisk">
              <i className="fas fa-asterisk"></i>
            </div>
            <p>
              t amet, consectetur adipiscing elit. Maecenas ultrices magna ac
              tristique rutrum. Curabitur nibh purus, dictum quis nulla sit
              amet, gravida gravida lorem. Sed fringilla massa nibh, a mattis
            </p>
            <div className="footer-content-divider animate-bottom">
              <div className="social-media">
                <h4>Follow along</h4>
                <ul className="social-icons">{renderSocials()}</ul>
              </div>
              <div className="newsletter-container">
                <h4>Newsletter</h4>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
