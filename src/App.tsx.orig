import React, { useState, useRef } from "react";
import "./styles/scss/App.scss";

// Components
import NavBar from "./components/NavBar/Navbar";
<<<<<<< HEAD
import Services from "./components/services/Services";
=======
import Services from "./components/Services/Services";
>>>>>>> 6343b2546e9faeae2a7aad94504a209f2077b4e3
import Contact from "./components/contact/Contact";
import Dox from "./components/dox/Dox";
import Project from "./components/project/Projects";
import Footer from "./components/footer/Footer";

function App() {
<<<<<<< HEAD
=======
  const scrollPXref = useRef<HTMLDivElement>(null);
  // On load go to page:
>>>>>>> 6343b2546e9faeae2a7aad94504a209f2077b4e3
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
<<<<<<< HEAD
    <div className="App">
      <NavBar onRouteChange={onRouteChange} />
      <div className="mainContainer">
=======
    <div className="App" id="scrollingPXcon" ref={scrollPXref}>
      <header>
        <NavBar onRouteChange={onRouteChange} scrollRef={scrollPXref} />
      </header>

      <div className="mainContainer perspective3d">
>>>>>>> 6343b2546e9faeae2a7aad94504a209f2077b4e3
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
