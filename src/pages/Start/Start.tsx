import React from "react";
import { Link } from "react-router-dom";
// Containers
import PageHero from "../../containers/PageHero/PageHero";
// Style
// Photos
import ProfilePic from "../../styles/img/assets/Alon1631w.jpg";

// ToDo

// Design page layout: Hero > left Pro Right Pre
// Design the UI

const Start = () => {
  return (
    <div id="Start">
      <PageHero>
        <div>
          <div id="start_welcome_texts">
            <h1>Welcome my site</h1>
            <h3>{"This is me >>"}</h3>
            <h2>My name is Alon Fabio, and I'm a pro web designer</h2>
            <h3>
              Here you need to choose if you want to visit my Professional site
              or my Personal site
            </h3>
            <h2>Pro web dev and graphic designer</h2>
            <h2>Per Photography and graphics</h2>
          </div>

          <img src={ProfilePic} alt="profile_picture" />
        </div>
      </PageHero>
      <section>
        <ol id="start_ol">
          <li key="Professional">
            <Link to={"/Pro"}>Professional</Link>
          </li>
          <li key="Personal">
            <Link to={"/Per"}>Personal</Link>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Start;
