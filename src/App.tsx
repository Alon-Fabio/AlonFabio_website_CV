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
  const [routeObj, setRouteObj] = useState({
    current: "Services",
    routes: ["Services", "Contact"],
  });

  const onRouteChange = async (switchRoute: string) => {
    switch (switchRoute) {
      case "Services":
        await setRouteObj({ ...routeObj, current: "Services" });
        await document?.getElementById("servicesCodeSkills")?.scrollIntoView();
        break;
      case "Contact":
        await setRouteObj({ ...routeObj, current: "Contact" });
        await document?.getElementById("formSection")?.scrollIntoView();
        break;
      case "Dox":
        await setRouteObj({ ...routeObj, current: "Dox" });
        // await document?.getElementById("formSection")?.scrollIntoView();
        break;

      default:
        setRouteObj({ ...routeObj, current: "Services" });
    }
  };

  return (
    <div className="App" id="scrollingPXcon" ref={scrollPXref}>
      <header>
        <NavBar
          onRouteChange={onRouteChange}
          scrollRef={scrollPXref}
          routeList={routeObj.routes}
        />
      </header>

      <div className="mainContainer perspective3d">
        {routeObj.current === "Services" ? <Services /> : null}
        {routeObj.current === "Dox" ? <Dox /> : null}
        {routeObj.current === "Contact" ? <Contact /> : null}
        {routeObj.current === "Projects" ? <Project /> : null}
      </div>
      <Footer onRouteChange={onRouteChange} />
    </div>
  );
}

export default App;
