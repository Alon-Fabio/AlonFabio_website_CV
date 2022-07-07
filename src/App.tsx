import React, { useState, useRef } from "react";
import "./styles/scss/App.scss";

// Components
import NavBar from "./components/NavBar/Navbar";
import Services from "./components/Services/Services";
import Contact from "./components/contact/Contact";
import Dox from "./components/dox/Dox";
import Project from "./components/project/Projects";
import Footer from "./components/footer/Footer";

function App() {
  const scrollPXref = useRef<HTMLDivElement>(null);
  // On load go to page:
  const [route, setRoute] = useState("Services");

  const onRouteChange = (route: string) => {
    setRoute(route);
  };
  return (
    <div className="App" id="scrollingPXcon" ref={scrollPXref}>
      <NavBar onRouteChange={onRouteChange} scrollRef={scrollPXref} />

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
