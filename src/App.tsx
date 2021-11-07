import React, { useState } from "react";
import "./styles/scss/App.scss";

// Components
import NavBar from "./components/NavBar/Navbar";
import Services from "./components/Services/Services";
import Contact from "./components/contact/Contact";
import Dox from "./components/dox/Dox";
import Project from "./components/project/Projects";
import Footer from "./components/footer/Footer";

function App() {
  const [route, setRoute] = useState("About");

  const onRouteChange = (route: string) => {
    setRoute(route);
  };
  return (
    <div className="App">
      <NavBar onRouteChange={onRouteChange} />
      <div className="mainContainer">
        {route === "About" ? <Services /> : null}
        {route === "Dox" ? <Dox /> : null}
        {route === "Contact" ? <Contact /> : null}
        {route === "Projects" ? <Project /> : null}
      </div>
      <Footer onRouteChange={onRouteChange} />
    </div>
  );
}

export default App;
