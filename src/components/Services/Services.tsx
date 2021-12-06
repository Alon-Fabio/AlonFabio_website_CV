import React from "react";
// components
import ContactForm from "../ContactForm/ContactForm";
import ScrollDown from "../AddOnsCom/ScrollDown/ScrollDown";
// Style:
import "./Services.scss";
// logos:
import mongoLogo from "../../styles/img/logos/servicesLogos/MongoDB_Logo_Black_RGB.png";
import awsLogo from "../../styles/img/logos/servicesLogos/aws.png";
import nodeLogo from "../../styles/img/logos/servicesLogos/nodejs-new-pantone-black.png";
import dockerLogo from "../../styles/img/logos/servicesLogos/horizontal-logo-monochromatic-white.png";
import redisLogo from "../../styles/img/logos/servicesLogos/redis.png";
import typeScriptLogo from "../../styles/img/logos/servicesLogos/ts-logo-128.png";
import reactLogo from "../../styles/img/logos/servicesLogos/React_logo.png";
import sassLogo from "../../styles/img/logos/servicesLogos/sass.png";
import bootstrapLogo from "../../styles/img/logos/servicesLogos/bootstrap.png";
import cssLogo from "../../styles/img/logos/servicesLogos/css.png";
import HTML5Logo from "../../styles/img/logos/servicesLogos/HTML5.png";
// import illustratorLogo from "../../styles/img/logos/servicesLogos/Adobe_illustrator.png";

const Services = () => {
  return (
    <section className="services">
      <div className="pageHero servicesHero">
        <div id="serviceHeaderContainer">
          <p className={"serviceHeaderDownAni"}>Alon Fabio</p>
          <p className={"serviceHeaderDownAni"}>Programing</p>
          <p className={"serviceHeaderDownAni"}>Web Design</p>
          <p className={"serviceHeaderDownAni"}>Graphic Design</p>
        </div>
        <ScrollDown />
      </div>
      {/* Skill section */}
      <div className="subSection flexCenter skills" id="servicesCodeSkills">
        <div className="container">
          <div className="subSectionHeading">
            <h1>Alon's Code services</h1>
            <p>As a programmer, I can offer a lot of services</p>
          </div>
          <div className="servicesProg">
            <ul id="servicesCards">
              <li className="flexCenter">
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-coins"></span>
                  </legend>
                  <div className="cardHeader">
                    <h3>Data handling</h3>
                  </div>
                  <div className="cardContent cardBGGray">
                    <h5>SQL or NoSQL, that is the question</h5>
                    <p>
                      Manage your data with the latest technology and improve
                      your performance and security.
                    </p>
                    <div className="cardLogos flexCenter">
                      <img src={mongoLogo} alt="MongoDB" />
                      <img src={redisLogo} alt="Redis" />
                    </div>
                  </div>
                </fieldset>
              </li>
              <li className="flexCenter">
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-server"></span>
                  </legend>
                  <div className="cardHeader">
                    <h3>Back-end</h3>
                  </div>
                  <div className="cardContent cardBGGray">
                    <h5>Fester, stronger, better!</h5>
                    <p>
                      We have the technology!
                      <br /> Improve, add, or build a brand new server for your
                      every need.
                    </p>
                    <div className="cardLogos flexCenter">
                      <img src={nodeLogo} alt="node.JS" />
                      <img src={dockerLogo} alt="Docker" />
                    </div>
                  </div>
                </fieldset>
              </li>
              <li className="flexCenter">
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-money-check"></span>
                  </legend>
                  <div className="cardHeader">
                    <h3>Front-end</h3>
                  </div>
                  <div className="cardContent cardBGGray">
                    <h5>There's no UI without you & I</h5>
                    <p>
                      Building an intuitive interface with smart design is key
                      to all successful products.
                    </p>
                    <div className="cardLogos flexCenter">
                      <img src={reactLogo} alt="React.js" />
                      <img src={HTML5Logo} alt="HTML5" />
                      <img src={cssLogo} alt="CSS" />
                    </div>
                  </div>
                </fieldset>
              </li>
              <li className="flexCenter">
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-arrows-alt"></span>
                  </legend>
                  <div className="cardHeader">
                    <h3>Responsive</h3>
                  </div>
                  <div className="cardContent cardBGGray">
                    <h5>One design to fit them all</h5>
                    <p>
                      Seamless transition between all screen sizes
                      <br />
                      Your product needs to look perfect on all devices!
                    </p>
                    <div className="cardLogos flexCenter">
                      <img src={bootstrapLogo} alt="bootstrap" />
                      <img src={cssLogo} alt="css" />
                    </div>
                  </div>
                </fieldset>
              </li>
              <li className="flexCenter">
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-theater-masks"></span>
                  </legend>
                  <div className="cardHeader">
                    <h3>{"UX & UI"}</h3>
                  </div>
                  <div className="cardContent cardBGGray">
                    <h5>UX/UI is in the eye of the customer</h5>
                    <p>
                      Great style and design don't just happen by themselves.
                      <br />
                      Get your very own style and design line to make everyone
                      recognize you!
                    </p>
                    <div className="cardLogos flexCenter">
                      <img src={sassLogo} alt="sass" />
                      <img src={cssLogo} alt="css" />
                    </div>
                  </div>
                </fieldset>
              </li>
              <li className="flexCenter">
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-cloud"></span>
                  </legend>
                  <div className="cardHeader">
                    <h3>Migrations</h3>
                  </div>
                  <div className="cardContent cardBGGray">
                    <h5>Updating...</h5>
                    <p>
                      Updating to TypeScript from vanilla JavaScript. Updating
                      to SASS from CSS.
                    </p>
                    <p>Move your code to a cloud service.</p>
                    <div className="cardLogos flexCenter">
                      <img src={typeScriptLogo} alt="TypeScript" />
                      <img src={sassLogo} alt="sass" />
                      <img src={awsLogo} alt="aws" />
                    </div>
                  </div>
                </fieldset>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="servicesMidPic"></div>
      <div></div>
      {/* Style sub section */}
      <div className="subSection flexCenter skills" id={"servicesStyleSkills"}>
        <div className="container">
          <div className="subSectionHeading">
            <h1>Alon's Style & Design</h1>
            <p>As a Graphic designer, I can offer a lot of services</p>
          </div>
          <div className={"servicesProg"}>
            <ul id="servicesCards">
              <li className="flexCenter">
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-palette"></span>
                  </legend>
                  <div className="cardHeader">
                    <h3>{"Custom art"}</h3>
                  </div>
                  <div className="cardContent">
                    <h5>Unique artwork</h5>
                    <p>
                      Using Adobe Illustrator and more, I can create graphics
                      that are custom to your product.
                    </p>
                    <div className="cardLogos flexCenter">
                      {/* <img src={illustratorLogo} alt="illustrator" /> */}
                    </div>
                  </div>
                </fieldset>
              </li>
              <li className="flexCenter">
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-swatchbook"></span>
                  </legend>
                  <div className="cardHeader">
                    <h3>{"Styling"}</h3>
                  </div>
                  <div className="cardContent">
                    <h5>You look ,gorgeous darling!</h5>
                    <p>
                      Developing a unique style that fits your product and will
                      be recognized immediately.
                    </p>
                    <div className="cardLogos flexCenter"></div>
                  </div>
                </fieldset>
              </li>
              <li className="flexCenter">
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-user-edit"></span>
                  </legend>
                  <div className="cardHeader">
                    <h3>{"UI/UX"}</h3>
                  </div>
                  <div className="cardContent">
                    <h5>I see what you did there..</h5>
                    <p>
                      Having an eye for design and a mind for programming <br />
                      I design and build products that people want to use!
                    </p>
                    <div className="cardLogos flexCenter"></div>
                  </div>
                </fieldset>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="subSection " id="formSection">
        <div className="container " id="formContainer">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Services;
