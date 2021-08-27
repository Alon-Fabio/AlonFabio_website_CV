import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div id="Footer">
      <hr />
      <div id="FooterBottom" className="flexCenter">
        <div id="footerIconDiv">
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-instagram"></i>
        </div>
        <p>
          <span className="far fa-copyright"></span> Alon Fabio
        </p>
      </div>
    </div>
  );
}

export default Footer;
