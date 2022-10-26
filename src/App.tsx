import React, { useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";

import "./styles/scss/App.scss";

// Components
import NavBar from "./components/NavBar/Navbar";
import Footer from "./components/footer/Footer";
// Pages
import Services from "./pages/Services/Services";
import Contact from "./pages/contact/Contact";
import Main from "./pages/main/Main";

function App() {
  const scrollPXref = useRef<HTMLDivElement>(null);
  // On load go to page:
  const [routeObj] = useState({
    current: "Main",
    routes: ["Services", "Contact", "Main"],
  });

  return (
    <div className="App" id="scrollingPXcon" ref={scrollPXref}>
      <header>
        <NavBar scrollRef={scrollPXref} routeList={routeObj.routes} />
      </header>

      <div className="mainContainer perspective3d">
        <Routes>
          <Route path="Main" element={<Main links={routeObj.routes} />} />
          <Route path="Services" element={<Services />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
