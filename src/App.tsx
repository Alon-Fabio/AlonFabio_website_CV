import { useEffect, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./styles/scss/App.scss";

// Components
import NavBar from "./components/NavBar/Navbar";
import Footer from "./components/footer/Footer";
// Pages
import Contact from "./pages/contact/Contact";
import Main from "./pages/main/Main";
import Photography from "./pages/gallery/Gallery";

// Create a nice loading component.
const Loading = () => {
  return <p>Loading...</p>;
};

const Fadminbio = lazy(() => import("./pages/Fadminbio/Fadminbio"));
const Services = lazy(() => import("./pages/Services/Services"));
function App() {
  // Lazy (big) components to load on demand.

  // A base for the parallax scrolling affect.
  // const scrollPXref = useRef<HTMLDivElement>(null);

  // List of routes for the navigation-bar:
  const routeList = ["Main", "Services", "Graphics", "Photography", "Contact"];

  // React-router: For hash scrolling to anchor.
  const { pathname, hash, key } = useLocation();
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
    <div className="App">
      <header>
        <NavBar routeList={routeList} />
      </header>

      <div className="mainContainer ">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="*" element={<Main />} />
            <Route path="Services" element={<Services />} />
            <Route
              path="Photography"
              element={<Photography library="photos" />}
            />
            <Route
              path="Graphics"
              element={<Photography library="graphics" />}
            />
            <Route path="Contact" element={<Contact />} />
            <Route
              path="Fadminbio"
              element={<Fadminbio stage={"localhost"} />}
            />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
