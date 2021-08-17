import React, { useEffect, useState } from "react";
import "./About.scss";
// Hooks
import { useEventListener } from "../../hooks/useEventListener";

import AlonHeroPhoto from "../../styles/img/about/mini Alon square.jpg";

// The trigger for the progressBar animation is triggered by a hard codded number, it needs to get its position and measure it next to the scrollY in the scrollDetect function

function About() {
  const [onLoad, setOnLoad] = useState("");
  const [inView, setInView] = useState("");
  useEffect(() => {
    setOnLoad("onLoad");
  }, []);
  const scrollDetect = () => {
    if (window.scrollY > 48) {
      setInView("in-view");
    }

    if (window.scrollY < 40) {
      setInView("");
    }
  };

  useEventListener({ type: "scroll", listener: scrollDetect });

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
      <div style={{ height: "100vh" }}></div>
      <div className="section skills" id={"skills"}>
        <h1>skills</h1>
        <div className="progressSection">
          <div className="progressContainerLang">
            <div className="progressBar">
              <div
                className={`animation-element progress-bar-inner javascript-present ${inView}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
