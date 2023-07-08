import React from "react";
import { Link } from "react-router-dom";
// Containers
import PageHero from "../../containers/PageHero/PageHero";
// Style
import "./start.scss";
// Photos
import ProfilePic from "../../styles/img/assets/Alon1631w.jpg";

// ToDo

// Design page layout: Hero > left Pro Right Pre
// Design the UI

const Start = () => {
  return (
    <div id="Start">
      <PageHero>
        {/* <PageHero images={[{ image: Logo, screenSize: "" }]}> */}
        <div id="start_hero_container">
          <h1>
            <span>Welcome</span> to my site
          </h1>
          <div id="start_h_img_con" className="">
            {/* <h3>{"That's me >>"}</h3> */}
            <div className="start_img_clip">
              <img
                src={ProfilePic}
                alt="profile_picture"
                id="start_profile_picture"
              />
            </div>

            {/* <h3>
              Here you need to choose if you want to visit my Professional site
              or my Personal site
              </h3>
              <h2>Pro web dev and graphic designer</h2>
            <h2>Per Photography and graphics</h2> */}
          </div>
          <h3>
            I am <span>Alon Fabio</span>
          </h3>
        </div>
      </PageHero>
      <section id="start_proper_sec">
        {/* <h1>My two sits</h1> */}
        <ol id="start_ol" className="flexCenter">
          <li key="Professional">
            <h3>
              <Link to={"/Pro/Services"}>Services</Link>
            </h3>
            <Link className="start_li_link" to={"/Pro"}>
              <h1>
                <span>Pro</span>
                <p>fessional</p>
              </h1>
            </Link>
          </li>
          <li id="start_li_dash">/</li>
          <hr />
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
};

export default Start;
