import React, { useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";

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

  return (
    <div className="App" id="scrollingPXcon" ref={scrollPXref}>
      <header>
        <NavBar scrollRef={scrollPXref} routeList={routeObj.routes} />
      </header>

      <div className="mainContainer perspective3d">
        <Routes>
          <Route path="Services" element={<Services />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
