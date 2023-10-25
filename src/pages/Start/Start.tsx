import React from "react";
import { Link } from "react-router-dom";
// Containers
import PageHero from "../../containers/PageHero/PageHero";
// Style
import "./start.scss";
// Photos
import ProfilePic1000 from "../../styles/img/assets/Alon-Orange-mini-1000W&H.jpg";
import ProfilePic2300 from "../../styles/img/assets/Alon-Orange-mini-2300W&H.jpg";

const Start = () => (
  <div id="Start">
    <PageHero>
      <div id="start_hero_container">
        <h1>
          <span>Welcome</span> to my site
        </h1>
        <div id="start_h_img_con" className="">
          <div className="start_img_clip">
            {/* <img
              src={ProfilePic}
              alt="profile_picture"
              id="start_profile_picture"
            /> */}
            <picture>
              <source
                key={`Alon1000`}
                srcSet={ProfilePic1000}
                media={"(max-width: 1000px)"}
              />
              <source
                key={`Alon2300w`}
                srcSet={ProfilePic2300}
                media={"(max-width: 2000px)"}
              />

              <img
                id="start_profile_picture"
                srcSet={ProfilePic1000}
                alt="Full Profile Pic"
              />
            </picture>
          </div>
        </div>
        <h3>
          I am <span>Alon Fabio</span>
        </h3>
      </div>
    </PageHero>
    <section id="start_proper_sec">
      <ol id="start_ol" className="flexCenter">
        <li key="Professional" id="start_menu_pro">
          <Link className="start_li_link" to={"/Pro"}>
            <h1>
              <span>Pro</span>
              <p>fessional</p>
            </h1>
          </Link>
          <h3>
            <Link to={"/Pro/Services"}>Services</Link>
          </h3>
        </li>
        <li id="start_li_dash">
          <hr />
        </li>

        <li key="Personal">
          <Link className="start_li_link" to={"/Per"}>
            <h1>
              <span>Per</span>
              <p>sonal</p>
            </h1>
          </Link>
          <h3>
            <Link to={"/Per/Photography"}>Photography</Link>
            <br />
            <Link to={"/Per/Graphics"}>Graphics</Link>
            <br />
            {/* Articles <sub>soon</sub>
            <br /> */}
          </h3>
        </li>
      </ol>
    </section>
  </div>
);

export default Start;
