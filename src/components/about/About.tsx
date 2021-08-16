import React, { useEffect, useState } from "react";
import "./About.scss";

import AlonHeroPhoto from "../../styles/img/about/mini Alon square.jpg";
function About() {
  const [onLoad, setOnLoad] = useState("");
  useEffect(() => {
    setOnLoad("onLoad");
    console.log("changed");
  }, []);

  return (
    <div className={"about"}>
      <div className="pageHero aboutHero">
        <div className={"aboutTextContainer"}>
          <h1>Welcome</h1>
          <div className={"AboutDescription text-shadow"}>
            <p>
              My name is <span>Alon</span>, and this is my website.
            </p>
            <p>
              I"m a <span>Developer</span>, a <span>Designer</span>, a{" "}
              <span>Photographer</span>, and I"m a <span>Doer</span>.
            </p>
            <p>Have a look around</p>
          </div>
        </div>
        <div className={`${onLoad} photoContainer`}>
          <img src={`${AlonHeroPhoto}`} alt={"to Alon Fabio About page"} />
        </div>
      </div>
      <div className="section skills">
        <h1>skills</h1>
        <div className="progressSection">
          <div className="progressContainerLang">
            <div className="progressBar">
              <div className="animation-element progress-bar-inner javascript-present in-view"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
