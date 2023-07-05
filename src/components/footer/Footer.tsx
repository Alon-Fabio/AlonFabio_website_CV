import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./footer.scss";

import ContactForm from "../ContactForm/ContactForm";
interface NavBarT {
  routerLinkArr: Array<{
    siteName: string;
    routeList: Array<String>;
  }>;
}
const Footer: React.FC<NavBarT> = ({ routerLinkArr }) => {
  const [transitioning, setTransitioning] = useState(true);

  const onContactClick = () => {
    setTransitioning((prv) => !prv);
    if (transitioning) {
      setTimeout(() => {
        document.getElementById("footerForm")?.scrollIntoView();
      }, 500);
    }
  };
  return (
    <div id="Footer">
      <div className="container">
        <div id="footer_links" className="flexCenter">
          <div className="footer_nav_links ">
            {routerLinkArr.map((site, index) => {
              return (
                <div className="footer_nav_link_ul">
                  <h3>{site.siteName}</h3>

                  <ul>
                    {site.routeList.map((routeName) => (
                      <li key={`NavLink-${routeName}`}>
                        <NavLink
                          to={`${routeName.toString()}`}
                          // className="AF_button"
                        >
                          {routeName.toString()[0] === "/"
                            ? `${routeName.toString().slice(1)}`
                            : `${routeName.toString()}`}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <button className="AF_button" onClick={onContactClick}>
            Contact
          </button>
          {/* <button className="AF_button">
            <Link to="/Services">Services</Link>
          </button> */}
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
