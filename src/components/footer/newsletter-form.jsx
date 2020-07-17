import React from "react";

const NewsletterForm = () => {
  return (
    <div className="form">
      <input type="text" className="newsletter-input" placeholder="Email" />
      <button className="newsletter-btn" type="submit">
        <i className="fas fa-envelope"></i>
      </button>
    </div>
  );
};

export default NewsletterForm;
