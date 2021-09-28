import React from "react";
// components
import ContactForm from "../ContactForm/ContactForm";
// Style:
import "./About.scss";
// logos:
import mongoLogo from "../../styles/img/logos/aboutLogos/MongoDB_Logo_Black_RGB.png";
import awsLogo from "../../styles/img/logos/aboutLogos/aws.png";
import nodeLogo from "../../styles/img/logos/aboutLogos/nodejs-new-pantone-black.png";
import dockerLogo from "../../styles/img/logos/aboutLogos/horizontal-logo-monochromatic-white.png";
import redisLogo from "../../styles/img/logos/aboutLogos/redis.png";
import typeScriptLogo from "../../styles/img/logos/aboutLogos/ts-logo-128.png";
import reactLogo from "../../styles/img/logos/aboutLogos/React_logo.png";
import sassLogo from "../../styles/img/logos/aboutLogos/sass.png";
import bootstrapLogo from "../../styles/img/logos/aboutLogos/bootstrap.png";
import cssLogo from "../../styles/img/logos/aboutLogos/css.png";
import HTML5Logo from "../../styles/img/logos/aboutLogos/HTML5.png";
// import illustratorLogo from "../../styles/img/logos/aboutLogos/Adobe_illustrator.png";

function About() {
  return (
    <section className={"about"}>
      <div className="pageHero aboutHero">
        <div className={"aboutTextContainer"}>
          <h1>Hello</h1>
          <div className={"AboutDescription text-shadow"}>
            <p>
              My name is <span>Alon Fabishevich</span>, welcome to my website.
            </p>
            <p>
              I"m a <span>Developer</span>, a <span>Graphic Designer</span>, a{" "}
              <span>Photographer</span>, <br />
              and much more then that{" "}
              <span className="fas fa-smile-wink"></span>.
            </p>
            <p>Have a look around...</p>
          </div>
        </div>
      </div>

      {/* Code sub section */}
      <div className="subSection flexCenter skills" id={"skills"}>
        <div className="container">
          <div className="subSectionHeading">
            <h1>Code</h1>
            <p>As a programmer I can offer a lot of services</p>
          </div>
          <div className={"AboutProg"}>
            <ul id="aboutCards">
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
                    <h5>There's no UI without you and I</h5>
                    <p>
                      Building an intuitive interface with a smart design is key
                      to any and all successful products.
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
                    <h5>UX/UI are in the eye of the customer</h5>
                    <p>
                      Great style and design don't just happen by themselves.
                      <br />
                      Get your very own style and design line to make every one
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
                      Updating to TypeScript form vanilla JavaScript. Updating
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
      {/* Style sub section */}
      <div className="subSection flexCenter skills">
        <div className="container">
          <div className="subSectionHeading">
            <h1>Style & Design</h1>
            <p>As a Graphic designer I can offer a lot of services</p>
          </div>
          <div className={"AboutProg"}>
            <ul id="aboutCards">
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
                      Using adobe illustrator and more, I can creat graphics
                      that are tailored to your product.
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
                    <h5>You look gorgeous darling!</h5>
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
      <div className="subSection flexCenter">
        <div className="container">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default About;
