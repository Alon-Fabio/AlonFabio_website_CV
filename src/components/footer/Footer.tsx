import React from "react";
import "./footer.scss";

const Footer: React.FC<{ onRouteChange: Function }> = ({ onRouteChange }) => {
  return (
    <div id="Footer">
      <div className="container">
        <div id="FooterLinks" className="flexCenter">
          <button onClick={() => onRouteChange("Contact")}>Contact</button>
          <button onClick={() => onRouteChange("Dox")}>Dox</button>
          <button onClick={() => onRouteChange("Projects")}>Projects</button>
          <button onClick={() => onRouteChange("About")}>About</button>
        </div>
        <hr />
        <div id="FooterBottom" className="flexCenter">
          <div id="footerIconDiv">
            {/* Checkout the 'target="_blank"' problem that pops up if you don't add the 'rel="noreferrer"'*/}

            <div className="FooterLinkIcon">
              <a
                href="https://www.linkedin.com/in/alon-fabio/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in fa-lg"></i>
              </a>
            </div>
            <div className="FooterLinkIcon">
              <a
                href="https://github.com/alon-fabio"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github fa-lg"></i>
              </a>
            </div>
            <div className="FooterLinkIcon">
              <a
                href="https://www.instagram.com/alonfabio_photography/"
                target="_blank"
                rel="noreferrer"
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
