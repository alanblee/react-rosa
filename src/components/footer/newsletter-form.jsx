import React from "react";

const NewsletterForm = () => {
  return (
    <form className="newsletter-form">
      <input type="text" className="newsletter-input" placeholder="Email" />
      <button className="newsletter-btn" type="submit">
        <i className="fas fa-envelope"></i>
      </button>
    </form>
  );
};

export default NewsletterForm;
