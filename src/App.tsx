import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

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
  const routeObj = ["Main", "Services", "Graphics", "Contact"];

  const { pathname, hash, key } = useLocation();

  // React-router: For hash scrolling to anchor.
  useEffect(() => {
    // If hash in URL, scroll to top.
    if (hash === "") {
      window.scrollTo(0, 0);
      return;
    }
    // else scroll to id
    (function scrollHashIntoView() {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
        return;
      }
      window.scrollTo(0, 0);
    })();
  }, [pathname, hash, key]);

  return (
    <div className="App" id="scrollingPXcon" ref={scrollPXref}>
      <header>
        <NavBar scrollRef={scrollPXref} routeList={routeObj} />
      </header>

      <div className="mainContainer perspective3d">
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="Services" element={<Services />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
