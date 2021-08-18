import React, { useState } from "react";
import "./styles/scss/App.scss";

// Components
import NavBar from "./components/NavBar/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Dox from "./components/dox/Dox";
import Project from "./components/project/Project";
// Hooks
import { useEventListener } from "./hooks/useEventListener";

function App() {
  const [route, setRoute] = useState("About");
  // Triggers the color change of the navBar and logo.
  const [navBarScroll, setNavBarScroll] = useState(false);
  // Triggers the progressBar in the about page.
  const [aboutProgBar, setAboutProgBar] = useState(false);

  const scrollTrigger = (
    offset: number,
    event: React.Dispatch<React.SetStateAction<boolean>>,
    elId?: string,
    element?: HTMLElement
  ) => {
    if (typeof elId !== "string" && element === undefined)
      console.error(
        "scrollTrigger needs a elId (string of the elements ID) or element (an HTML element)"
      );
    let el;
    let bodyEl = document.getElementById("body")?.scrollHeight;
    if (!bodyEl)
      return console.error("scrollTrigger add Id 'body' to the body element");
    if (elId) el = document.getElementById(elId);
    el = element || el;
    if (el === undefined || el === null)
      return console.error("scrollTrigger messed up");
    let trigger =
      (el.getBoundingClientRect().top +
        el.getBoundingClientRect().height +
        window.pageYOffset) /
      2;
    trigger = Math.round(trigger);
    if ((trigger - bodyEl + window.scrollY) * -1 <= trigger && !aboutProgBar) {
      console.log("animate!");
      event((prv) => !prv);
    }
  };

  const scrollDetect = () => {
    if (window.scrollY <= 20 && !navBarScroll) {
      setNavBarScroll(true);
    }
    if (window.scrollY >= 20 && navBarScroll) {
      setNavBarScroll(false);
    }
    // Trigger the progress bar in the About page
    if (route === "About" && !navBarScroll && !aboutProgBar) {
      scrollTrigger(100, setAboutProgBar, "skills");
    }
  };

  useEventListener({ type: "scroll", listener: scrollDetect });

  const onRouteChange = (route: string) => {
    setRoute(route);
    console.log(route);
  };
  return (
    <div className="App">
      <NavBar onRouteChange={onRouteChange} navBarScroll={navBarScroll} />
      <div className="mainContainer">
        {route === "About" ? <About aboutProgBar={aboutProgBar} /> : null}
        {route === "Dox" ? <Dox /> : null}
        {route === "Contact" ? <Contact /> : null}
        {route === "Projects" ? <Project /> : null}
      </div>
    </div>
  );
}

export default App;
