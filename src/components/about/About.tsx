import React from "react";
import "./About.scss";
import background from "../../styles/img/header-bg.jpg";

function About() {
  return (
    <div className={"about"} style={{ backgroundImage: `url(${background})` }}>
      <h1>About</h1>
    </div>
  );
}

export default About;
