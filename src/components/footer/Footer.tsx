import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

import ContactForm from "../ContactForm/ContactForm";

const Footer = () => {
  const [transitioning, setTransitioning] = useState(true);

  return (
    <div id="Footer">
      <div className="container">
        <div id="FooterLinks" className="flexCenter">
          <button onClick={() => setTransitioning((preVal) => !preVal)}>
            Contact
          </button>
          <button>
            <Link to="/Services">Services</Link>
          </button>
        </div>
        <div
          id={"footerForm"}
          className={transitioning === true ? "closed" : "opened"}
        >
          <ContactForm />
        </div>
        <hr className="underlineWAni" />
        <div id="FooterBottom" className="flexCenter">
          <div id="footerIconDiv">
            {/* Checkout the 'target="_blank"' problem that pops up if you don't add the 'rel="noreferrer nofollow" */}

            <div className="FooterLinkIcon">
              <a
                href="https://www.linkedin.com/in/alon-fabio/"
                target="_blank"
                rel="noreferrer nofollow"
                aria-label="See my (Alon's) Linkedin profile"
              >
                <i className="fab fa-linkedin-in fa-lg"></i>
              </a>
            </div>
            <div className="FooterLinkIcon">
              <a
                href="https://github.com/alon-fabio"
                target="_blank"
                rel="noreferrer nofollow"
                aria-label="See my (Alon's) GitHub profile"
              >
                <i className="fab fa-github fa-lg"></i>
              </a>
            </div>
            <div className="FooterLinkIcon">
              <a
                href="https://www.instagram.com/alonfabio_photography/"
                target="_blank"
                rel="noreferrer nofollow"
                aria-label="See my (Alon's) Instagram profile"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
          <p>
            <span className="far fa-copyright"></span> Alon Fabio
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
