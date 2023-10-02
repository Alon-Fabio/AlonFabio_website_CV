import React, { useEffect, useRef } from "react";
// Hooks
import { useObserver } from "../../hooks/useObserver";
// components
import ContactForm from "../../components/ContactForm/ContactForm";
import PageHero from "../../containers/PageHero/PageHero";
// Style:
import "./style/CSS/Services.scss";
// Hero images:

import CloverW1080 from "../../styles/img/backgrounds/CloverW1080.jpg";
import Cables from "../../styles/img/backgrounds/cables900w-min.jpg";
import Pipes from "../../styles/img/backgrounds/pipes-min.jpg";

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
// Service middle section:
import MessiPic from "../../styles/img/backgrounds/Lionel-Messi.webp";
import AlonLogoSvg from "./style/images/BackgroundLogo.svg";

const Services = () => {
  // Card animations. using useObserver.
  const card1 = useRef<HTMLFieldSetElement | null>(null);
  const card2 = useRef<HTMLFieldSetElement | null>(null);
  const card3 = useRef<HTMLFieldSetElement | null>(null);
  const card4 = useRef<HTMLFieldSetElement | null>(null);
  const card5 = useRef<HTMLFieldSetElement | null>(null);
  const card6 = useRef<HTMLFieldSetElement | null>(null);
  const card7 = useRef<HTMLFieldSetElement | null>(null);
  const card8 = useRef<HTMLFieldSetElement | null>(null);
  const card9 = useRef<HTMLFieldSetElement | null>(null);

  const cardsRef = [
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
  ];

  useEffect(() => {
    cardsRef.forEach((card) => card.current?.classList.add("AF_op0"));
  });

  const options = {
    root: null,
    rootMargin: "50px",
    threshold: 1,
  };

  useObserver(options, cardsRef, "flip_scale_forward_ani", true);

  // <==============================================================================================>

  return (
    <section id="Services">
      <PageHero
        images={[
          {
            image: Cables,
            screenSize: "(max-width: 768px)",
          },
          {
            image: CloverW1080,
            screenSize: "(max-width: 1024px)",
          },
          {
            image: Pipes,
            screenSize: "(max-width: 2000px)",
          },
        ]}
      >
        <div id="Services_Hero" className=" servicesHero  ">
          <div id="serviceHeaderContainer">
            <h1 className={"slideLeftAni"}>Alon Fabio</h1>
            <h2 className={"slideLeftAni"}>Web Design</h2>
            <h2 className={"slideLeftAni"}>Programming</h2>
            <h2 className={"slideLeftAni"}>Graphic Design</h2>
          </div>
        </div>
      </PageHero>
      {/* <ScrollDown /> */}

      {/* Skill section */}
      <div className="subSection flexCenter skills " id="servicesCodeSkills">
        <div className="container ">
          <div className="subSectionHeading">
            <h1>
              Web <span className="h1_smaller">&</span> Mobile
            </h1>
            <p>As a programmer, I can offer a lot of services</p>
          </div>
          <div className="servicesProg  ">
            <ul id="servicesCards" className=" cardsContainer">
              <li>
                <fieldset ref={card1} className="card">
                  <legend>
                    <span className="fas fa-coins"></span>
                  </legend>
                  <div className="cardHeader ">
                    <h2>Data handling</h2>
                  </div>
                  <div className="cardContent cardBGGray">
                    <h3>SQL or NoSQL, that is the question</h3>
                    <p>
                      Manage your data with the latest technology and improve
                      your performance and security.
                    </p>
                    <div className="cardLogos ">
                      <img src={mongoLogo} alt="MongoDB" />
                      <img src={redisLogo} alt="Redis" />
                    </div>
                  </div>
                </fieldset>
              </li>
              <li>
                <fieldset ref={card2} className="card">
                  <legend>
                    <span className="fas fa-server"></span>
                  </legend>
                  <div className="cardHeader ">
                    <h2>Back-end</h2>
                  </div>
                  <div className="cardContent cardBGGray">
                    <h3>Fester, stronger, better!</h3>
                    <p>
                      We have the technology!
                      <br /> Improve, add, or build a brand new server for your
                      every need.
                    </p>
                    <div className="cardLogos ">
                      <img src={nodeLogo} alt="node.JS" />
                      <img src={dockerLogo} alt="Docker" />
                    </div>
                  </div>
                </fieldset>
              </li>
              <li>
                <fieldset ref={card3} className="card">
                  <legend>
                    <span className="fas fa-money-check"></span>
                  </legend>
                  <div className="cardHeader ">
                    <h2>Front-end</h2>
                  </div>
                  <div className="cardContent cardBGGray">
                    <h3>There's no UI without you & I</h3>
                    <p>
                      Building an intuitive interface with smart design is key
                      to all successful products.
                    </p>
                    <div className="cardLogos ">
                      <img src={reactLogo} alt="React.js" />
                      <img src={HTML5Logo} alt="HTML5" />
                      <img src={cssLogo} alt="CSS" />
                    </div>
                  </div>
                </fieldset>
              </li>
              <li>
                <fieldset ref={card4} className="card">
                  <legend>
                    <span className="fas fa-arrows-alt"></span>
                  </legend>
                  <div className="cardHeader ">
                    <h2>Responsive</h2>
                  </div>
                  <div className="cardContent cardBGGray">
                    <h3>One design to fit them all</h3>
                    <p>
                      Seamless transition between all screen sizes
                      <br />
                      Your product needs to look perfect on all devices!
                    </p>
                    <div className="cardLogos ">
                      <img src={bootstrapLogo} alt="bootstrap" />
                      <img src={cssLogo} alt="css" />
                    </div>
                  </div>
                </fieldset>
              </li>
              <li>
                <fieldset ref={card5} className="card">
                  <legend>
                    <span className="fa-solid fa-tachograph-digital"></span>
                  </legend>

                  <div className="cardHeader ">
                    <h2>{"UX & UI"}</h2>
                  </div>
                  <div className="cardContent cardBGGray">
                    <h3>UX/UI is in the eye of the customer</h3>
                    <p>
                      Great style and design don't just happen by themselves.
                      <br />
                      Get your very own style and design line to make everyone
                      recognize you!
                    </p>
                    <div className="cardLogos ">
                      <img src={sassLogo} alt="sass" />
                      <img src={cssLogo} alt="css" />
                    </div>
                  </div>
                </fieldset>
              </li>
              <li>
                <fieldset ref={card6} className="card">
                  <legend>
                    <span className="fas fa-cloud"></span>
                  </legend>
                  <div className="cardHeader ">
                    <h2>Migrations</h2>
                  </div>
                  <div className="cardContent cardBGGray">
                    <h3>Updating...</h3>
                    <p>
                      Updating to TypeScript from vanilla JavaScript. Updating
                      to SASS from CSS.
                    </p>
                    <p>Move your code to a cloud service.</p>
                    <div className="cardLogos ">
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
      <div className="subSection  skills " id={"servicesStyleSkills"}>
        <div className="container ">
          <div className="subSectionHeading">
            <h1>
              Style <span className="h1_smaller">&</span> Design
            </h1>
            <p>As a Graphic designer, I can offer a lot of services</p>
          </div>
          <div className="servicesProg ">
            <ul id="servicesCards" className=" cardsContainer">
              <li>
                <fieldset ref={card7} className="card">
                  <legend>
                    <span className="fas fa-palette"></span>
                  </legend>
                  <div className="cardHeader ">
                    <h2>{"Custom art"}</h2>
                  </div>
                  <div className="cardContent">
                    <h3>Unique artwork</h3>
                    <p>
                      Using Adobe Illustrator and more, I can create graphics
                      that are custom to your product.
                    </p>
                    <div className="cardLogos ">
                      {/* <img src={illustratorLogo} alt="illustrator" /> */}
                    </div>
                  </div>
                </fieldset>
              </li>
              <li>
                <fieldset ref={card8} className="card">
                  <legend>
                    <span className="fas fa-swatchbook"></span>
                  </legend>
                  <div className="cardHeader ">
                    <h2>{"Styling"}</h2>
                  </div>
                  <div className="cardContent">
                    <h3>You look ,gorgeous darling!</h3>
                    <p>
                      Developing a unique style that fits your product and will
                      be recognized immediately.
                    </p>
                    <div className="cardLogos "></div>
                  </div>
                </fieldset>
              </li>
              <li>
                <fieldset ref={card9} className="card">
                  <legend>
                    <span className="fas fa-user-edit"></span>
                  </legend>
                  <div className="cardHeader ">
                    <h2>{"UI/UX"}</h2>
                  </div>
                  <div className="cardContent">
                    <h3>I see what you did there..</h3>
                    <p>
                      Having an eye for design and a mind for programming <br />
                      I design and build products that people want to use!
                    </p>
                    <div className="cardLogos "></div>
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
