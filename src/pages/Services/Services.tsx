import React from "react";
// components
import ContactForm from "../../components/ContactForm/ContactForm";
import ScrollDown from "../../components/AddOnsCom/ScrollDown/ScrollDown";
// Style:
import "./style/CSS/Services.scss";
// Hero images:
import Clover from "./style/images/Clover.webp";
import Bohke from "./style/images/Bohke.webp";
import BlueSky from "./style/images/BlueSky-min.webp";
// logos:
import mongoLogo from "./style/images/servicesLogos/MongoDB_Logo_Black_RGB.webp";
import awsLogo from "./style/images/servicesLogos/aws.webp";
import nodeLogo from "./style/images/servicesLogos/nodejs-new-pantone-black.webp";
import dockerLogo from "./style/images/servicesLogos/horizontal-logo-monochromatic-white.webp";
import redisLogo from "./style/images/servicesLogos/redis.webp";
import typeScriptLogo from "./style/images/servicesLogos/ts-logo-128.webp";
import reactLogo from "./style/images/servicesLogos/React_logo.webp";
import sassLogo from "./style/images/servicesLogos/sass.webp";
import bootstrapLogo from "./style/images/servicesLogos/bootstrap.webp";
import cssLogo from "./style/images/servicesLogos/css.webp";
import HTML5Logo from "./style/images/servicesLogos/HTML5.webp";
// import illustratorLogo from "./style/images/servicesLogos/Adobe_illustrator.png";
// Service middle section:
import MessiPic from "../../styles/img/Lionel-Messi.webp";
import AlonLogoSvg from "./style/images/BackgroundLogo.svg";

const Services = () => {
  return (
    <section className="services ">
      <div className="pageHero servicesHero ParallaxContainer perspective3d">
        <img
          src={BlueSky}
          alt="Beautiful blue sky"
          id="ParallaxBG"
          className="ParallaxElement"
        />
        <img
          src={Bohke}
          alt="Little bohke"
          id="ParallaxBohke"
          className="ParallaxElement"
        />
        <img
          src={Clover}
          alt="A big lovely three leaf clover"
          id="parallaxClover"
          className="ParallaxElement"
        />
        <div id="serviceHeaderContainer">
          <h1 className={"slideLeftAni"}>Alon Fabio</h1>
          <h2 className={"slideLeftAni"}>Programing</h2>
          <h2 className={"slideLeftAni"}>Web Design</h2>
          <h2 className={"slideLeftAni"}>Graphic Design</h2>
          <h2 className={"slideLeftAni"}>Photography</h2>
        </div>
        <ScrollDown />
      </div>
      {/* Skill section */}
      <div className="subSection flexCenter skills " id="servicesCodeSkills">
        <div className="container ">
          <div className="subSectionHeading">
            <h1>Alon's Code services</h1>
            <p>As a programmer, I can offer a lot of services</p>
          </div>
          <div className="servicesProg  ">
            <ul id="servicesCards" className=" cardsContainer">
              <li>
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-coins"></span>
                  </legend>
                  <div className="cardHeader flexCenter">
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
              <li>
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-server"></span>
                  </legend>
                  <div className="cardHeader flexCenter">
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
              <li>
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-money-check"></span>
                  </legend>
                  <div className="cardHeader flexCenter">
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
              <li>
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-arrows-alt"></span>
                  </legend>
                  <div className="cardHeader flexCenter">
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
              <li>
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-theater-masks"></span>
                  </legend>
                  <div className="cardHeader flexCenter">
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
              <li>
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-cloud"></span>
                  </legend>
                  <div className="cardHeader flexCenter">
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

      <div
        id="servicesMidPic"
        style={{ backgroundImage: `url(${MessiPic}), url(${AlonLogoSvg})` }}
      ></div>
      <div></div>
      {/* Style sub section */}
      <div className="subSection flexCenter skills " id={"servicesStyleSkills"}>
        <div className="container ">
          <div className="subSectionHeading">
            <h1>Alon's Style & Design</h1>
            <p>As a Graphic designer, I can offer a lot of services</p>
          </div>
          <div className="servicesProg ">
            <ul id="servicesCards" className=" cardsContainer">
              <li>
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-palette"></span>
                  </legend>
                  <div className="cardHeader flexCenter">
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
              <li>
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-swatchbook"></span>
                  </legend>
                  <div className="cardHeader flexCenter">
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
              <li>
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-user-edit"></span>
                  </legend>
                  <div className="cardHeader flexCenter">
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
