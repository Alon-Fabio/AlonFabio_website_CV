import React, { useEffect, useState } from "react";
import "./About.scss";
// Style
import AlonHeroPhoto from "../../styles/img/about/mini Alon square.jpg";
// logos:
// Back
import mongoLogo from "../../styles/img/logos/about_prog_logos/MongoDB_Logo_Black_RGB.png";
import nodeLogo from "../../styles/img/logos/about_prog_logos/nodejs-new-pantone-black.png";
import dockerLogo from "../../styles/img/logos/about_prog_logos/horizontal-logo-monochromatic-white.png";
import redisLogo from "../../styles/img/logos/about_prog_logos/redis.png";
// Front
import reactLogo from "../../styles/img/logos/about_front_logos/react.png";
import sassLogo from "../../styles/img/logos/about_front_logos/sass.png";
import bootstrapLogo from "../../styles/img/logos/about_front_logos/bootstrap.png";

function About() {
  const [onLoad, setOnLoad] = useState("");
  useEffect(() => {
    setOnLoad("onLoad");
  }, []);

  interface ILogoObj {
    [index: string]: string;
  }

  const progLogos: ILogoObj = {
    mongoLogo,
    nodeLogo,
    dockerLogo,
    redisLogo,
  };
  const frontLogos: ILogoObj = {
    reactLogo,
    sassLogo,
    bootstrapLogo,
  };

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
        <div className={`${onLoad} photoContainer`}>
          <img src={`${AlonHeroPhoto}`} alt={"to Alon Fabio About page"} />
        </div>
      </div>

      <div className="subSection flexCenter skills" id={"skills"}>
        <div className="container">
          <div className={"AboutProg"}>
            <h1>Programming</h1>
            <h4>Full-stack programmer, at your service.</h4>
            <p>
              Build up your <span>server</span> or <span>REST API</span> or
              maybe you have a <span>SaaS</span> to develop.
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
            </div>
          </div>
          {/* <div className="progressSection">
            <div className="progressContainerLang">
              <div className="progressBar">
                <div
                  id="JS-Progress"
                  className={
                    "animation-element progress-bar-inner javascript-present"
                  }
                ></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default About;
