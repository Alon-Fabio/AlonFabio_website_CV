import React from "react";
import "./About.scss";
// Style:
// logos:
// Back
import mongoLogo from "../../styles/img/logos/aboutLogos/MongoDB_Logo_Black_RGB.png";
import nodeLogo from "../../styles/img/logos/aboutLogos/nodejs-new-pantone-black.png";
import dockerLogo from "../../styles/img/logos/aboutLogos/horizontal-logo-monochromatic-white.png";
import redisLogo from "../../styles/img/logos/aboutLogos/redis.png";
// Front
import reactLogo from "../../styles/img/logos/aboutLogos/React_logo.png";
import sassLogo from "../../styles/img/logos/aboutLogos/sass.png";
import bootstrapLogo from "../../styles/img/logos/aboutLogos/bootstrap.png";
import cssLogo from "../../styles/img/logos/aboutLogos/css.png";

function About() {
  // interface ILogoObj {
  //   [index: string]: string;
  // }

  // const progLogos: ILogoObj = {
  //   mongoLogo,
  //   nodeLogo,
  //   dockerLogo,
  //   redisLogo,
  // };
  // const frontLogos: ILogoObj = {
  //   reactLogo,
  //   sassLogo,
  //   bootstrapLogo,
  // };

  return (
    <section className={"about"}>
      <div className="pageHero aboutHero">
        <div className={"aboutTextContainer"}>
          <h1>Hello</h1>
          <div className={"AboutDescription text-shadow"}>
            <p>
              My name is <span>Alon</span>, and this is my website.
            </p>
            <p>
              I"m a <span>Developer</span>, a <span>Designer</span>, a{" "}
              <span>Photographer</span>, welcome to my site.
            </p>
            <p>Have a look around</p>
          </div>
        </div>
      </div>
      <div className="subSection flexCenter skills" id={"skills"}>
        <div className="container">
          <div className={"AboutProg"}>
            <ul id="aboutCards">
              <li>
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-coins"></span>
                  </legend>
                  <div className="cardHeader">
                    <h3>Data handling</h3>
                  </div>
                  <div className="cardContent">
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
                  <div className="cardHeader">
                    <h3>Back-end</h3>
                  </div>
                  <div className="cardContent">
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
                  <div className="cardHeader">
                    <h3>Front-end</h3>
                  </div>
                  <div className="cardContent">
                    <h5>There's no UI without you and I</h5>
                    <p>
                      Building an intuitive interface with a smart design is key
                      to any and all successful products.
                    </p>
                    <div className="cardLogos flexCenter">
                      <img src={reactLogo} alt="React.js" />
                    </div>
                  </div>
                </fieldset>
              </li>
              <li>
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-arrows-alt"></span>
                  </legend>
                  <div className="cardHeader">
                    <h3>Responsive</h3>
                  </div>
                  <div className="cardContent">
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
                    <span className="fas fa-paint-brush"></span>
                  </legend>
                  <div className="cardHeader">
                    <h3>{"Style & Design"}</h3>
                  </div>
                  <div className="cardContent">
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
              <li>
                <fieldset className="card">
                  <legend>
                    <span className="fas fa-cloud"></span>
                  </legend>
                  <div className="cardHeader">
                    <h3>Front</h3>
                  </div>
                  <div className="cardContent">
                    <h5>Let someone else cary the load</h5>
                    <p>
                      Move your server to a cloud service, and make it fester
                      around the world.
                      <br />
                    </p>
                    <div className="cardLogos flexCenter">
                      <img src={reactLogo} alt="React.js" />
                    </div>
                  </div>
                </fieldset>
              </li>
            </ul>

            {/* <h1>What do I do?</h1>
            <h4>I"m a full-stack programmer and designer, at your service!</h4>
            <p>
            I can help you build up your <span>server</span> or{" "}
            <span>REST API</span> or maybe you have a <span>SaaS</span> to
            develop.
            </p>
            <div className="aboutLogos">
            {Object.keys(progLogos).map((key) => {
              return <img src={progLogos[key]} alt={key} key={key} />;
            })}
            </div>
            <p>
            I can help you improve your <span>design</span> or create a brand
            new one made just for you!
            </p>
            <div className="aboutLogos">
              {Object.keys(frontLogos).map((logo) => (
                <img src={frontLogos[logo]} alt={logo} key={logo} />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
