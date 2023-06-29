import React from "react";
import "./contact.scss";

import ContactForm from "../../components/ContactForm/ContactForm";

function Contact() {
  return (
    <div id="Contact">
      <div className="Padding_for_nav subSection flexCenter" id="formSection">
        <div className="container" id="formContainer">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
