import React, { useState, useRef } from "react";
import "./styles/scss/App.scss";

// Components
import NavBar from "./components/NavBar/Navbar";
import Contact from "./components/contact/Contact";
import Dox from "./components/dox/Dox";
import Project from "./components/project/Projects";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";

function App() {
  const scrollPXref = useRef<HTMLDivElement>(null);
  // On load go to page:
  const [route, setRoute] = useState("Services");

  const onRouteChange = async (route: string) => {
    switch (route) {
      case "Services":
        await setRoute("Services");
        await document?.getElementById("servicesCodeSkills")?.scrollIntoView();
        break;
      case "Contact":
        await setRoute("Contact");
        await document?.getElementById("formSection")?.scrollIntoView();
        break;

      default:
        setRoute("Services");
    }
  };

  return (
    <div className="App" id="scrollingPXcon" ref={scrollPXref}>
      <header>
        <NavBar onRouteChange={onRouteChange} scrollRef={scrollPXref} />
      </header>

      <div className="mainContainer perspective3d">
        {route === "Services" ? <Services /> : null}
        {route === "Dox" ? <Dox /> : null}
        {route === "Contact" ? <Contact /> : null}
        {route === "Projects" ? <Project /> : null}
      </div>
      <Footer onRouteChange={onRouteChange} />
    </div>
  );
}

export default App;
