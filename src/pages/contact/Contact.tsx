import React from "react";
import "./contact.scss";

import ContactForm from "../../components/ContactForm/ContactForm";

function Contact() {
  return (
    <div id="Contact">
      <div className="subSection pageHero flexCenter" id="formSection">
        <div className="container" id="formContainer">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
