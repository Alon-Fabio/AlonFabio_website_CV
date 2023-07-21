import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./styles/scss/App.scss";

// Components
// import NavBar from "./components/NavBar/Navbar";
// import Footer from "./components/footer/Footer";
// Pages
// import Main from "./pages/main/Main";
import Contact from "./pages/contact/Contact";
import Photography from "./pages/Photography/Photography";
import Graphics from "./pages/Graphics/Graphics";
import Start from "./pages/Start/Start";
import RouterLayout from "./containers/RouterLayout/RouterLayout";

// Create a nice loading component.
const Loading = () => {
  return (
    <div style={{ minHeight: "70dvh" }}>
      <p>Loading...</p>;
    </div>
  );
};

const Fadminbio = lazy(() => import("./pages/Fadminbio/Fadminbio"));
const Services = lazy(() => import("./pages/Services/Services"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="*" index element={<Start />} />

          <Route path="/Pro" element={<RouterLayout />}>
            {/* Add an About Pro page */}
            <Route index path="*" element={<Services />} />
            <Route path="Services" element={<Services />} />
            <Route path="Contact" element={<Contact />} />
          </Route>

          <Route path="/Per" element={<RouterLayout />}>
            {/* Add an About Pro page */}
            <Route index path="*" element={<Photography />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Photography" element={<Photography />} />
            <Route path="Graphics" element={<Graphics />} />
          </Route>

          <Route path="Fadminbio" element={<Fadminbio stage={"localhost"} />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
