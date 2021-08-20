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
    offset = 0,
    className: string,
    element: HTMLElement | string,
    callback?: (
      data?: any
    ) => void | React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (typeof element !== "string" && element === undefined)
      return console.error(
        "scrollTrigger: needs the elements Id (string of the elements ID) or an element (an HTML element)."
      );
    let el;
    console.log(typeof element);
    if (typeof element === "string") el = document.getElementById(element);
    el = el || element;
    if (typeof el !== "object")
      return console.error(
        "scrollTrigger: Element is null/undefined. Insert the Id of the element."
      );
    console.log(element, typeof el);
    let trigger = el.offsetTop;
    console.log(trigger, window.pageYOffset + window.innerHeight);

    if (
      window.pageYOffset + window.innerHeight + offset >= trigger &&
      !aboutProgBar
    ) {
      if (el.className.includes(` ${className} `)) return;
      el.className += ` ${className} `;
      if (callback) callback();
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
      console.log("scrollEvent");

      scrollTrigger(0, "in-view", "JS-Progress", () => setAboutProgBar(true));
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
        {route === "About" ? <About /> : null}
        {route === "Dox" ? <Dox /> : null}
        {route === "Contact" ? <Contact /> : null}
        {route === "Projects" ? <Project /> : null}
      </div>
    </div>
  );
}

export default App;
