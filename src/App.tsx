import React, { useState } from "react";
import "./styles/scss/App.scss";

// Containers
import NavBar from "./components/NavBar/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Dox from "./components/dox/Dox";
import Project from "./components/project/Project";

function App() {
  const [route, setRoute] = useState("About");

  const onRouteChange = (route: string) => {
    setRoute(route);
    console.log(route);
  };
  return (
    <div className="App">
      <NavBar onRouteChange={onRouteChange} />
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
