import React from "react";
import "./About.scss";
// Style:
// logos:
// Back
import mongoLogo from "../../styles/img/logos/about_prog_logos/MongoDB_Logo_Black_RGB.png";
import nodeLogo from "../../styles/img/logos/about_prog_logos/nodejs-new-pantone-black.png";
import dockerLogo from "../../styles/img/logos/about_prog_logos/horizontal-logo-monochromatic-white.png";
import redisLogo from "../../styles/img/logos/about_prog_logos/redis.png";
// Front
import reactLogo from "../../styles/img/logos/about_front_logos/React_logo.png";
import sassLogo from "../../styles/img/logos/about_front_logos/sass.png";
import bootstrapLogo from "../../styles/img/logos/about_front_logos/bootstrap.png";

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
              <li className="card">
                <div className="cardHeader">
                  <span className="fas fa-coins fa-2x"></span>
                  <h3>Data handling</h3>
                </div>
                <div className="cardContent">
                  <h5>SQL or NoSQL, that is the question.</h5>
                  <p>
                    Manage your data with the latest technology and improve your
                    performance and security.
                  </p>
                  <div className="cardLogos flexCenter">
                    <img src={mongoLogo} alt="MongoDB" />
                    <img src={redisLogo} alt="Redis" />
                  </div>
                </div>
              </li>
              <li className="card">
                <div className="cardHeader">
                  <span className="fas fa-server fa-2x"></span>
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
              </li>
              <li className="card">
                <div className="cardHeader">
                  <span className="fas fa-money-check fa-2x"></span>
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
              </li>
              <li className="card">
                <div className="cardHeader">
                  <span className="fas fa-arrows-alt fa-2x"></span>
                  <h3>Responsive</h3>
                </div>
                <div className="cardContent">
                  <h5>One design to rule them all</h5>
                  <p>
                    Building an intuitive interface with a smart design is key
                    to any and all successful products.
                  </p>
                  <div className="cardLogos flexCenter">
                    {/* <img src={reactLogo} alt="React.js" /> */}
                    {/* <img src={dockerLogo} alt="Docker" /> */}
                  </div>
                </div>
              </li>
              <li className="card">
                <div className="cardHeader">
                  <span className="fas fa-money-check fa-2x"></span>
                  <h3>Front</h3>
                </div>
                <div className="cardContent">
                  <h5>Fester, stronger, better!</h5>
                  <p>
                    Improve, add, or build a brand new server for your every
                    need.
                  </p>
                  <div className="cardLogos flexCenter">
                    <img src={reactLogo} alt="React.js" />
                    {/* <img src={dockerLogo} alt="Docker" /> */}
                  </div>
                </div>
              </li>
              <li className="card">
                <div className="cardHeader">
                  <span className="fas fa-money-check fa-2x"></span>
                  <h3>Front</h3>
                </div>
                <div className="cardContent">
                  <h5>Fester, stronger, better!</h5>
                  <p>
                    Improve, add, or build a brand new server for your every
                    need.
                  </p>
                  <div className="cardLogos flexCenter">
                    <img src={reactLogo} alt="React.js" />
                    {/* <img src={dockerLogo} alt="Docker" /> */}
                  </div>
                </div>
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
