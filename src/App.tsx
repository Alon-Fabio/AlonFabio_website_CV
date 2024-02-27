import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./styles/scss/App.scss";

// Components

import Contact from "./pages/contact/Contact";
import Photography from "./pages/Photography/Photography";
import Graphics from "./pages/Graphics/Graphics";
import Start from "./pages/Start/Start";
import RouterLayout from "./containers/RouterLayout/RouterLayout";
import LoadAni from "./components/LoadAni/LoadAni";
// import BasicErrorPage from "./components/Errors/BasicErrorPage";
// import ErrorBoundary from "./components/Errors/ErrorBoundary";

const Fadminbio = lazy(() => import("./pages/Fadminbio/Fadminbio"));
const Services = lazy(() => import("./pages/Services/Services"));
function App() {
  return (
    <div className="App">
      {/* <ErrorBoundary errorPage={<BasicErrorPage />}> */}
      <Suspense fallback={<LoadAni />}>
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

          <Route path="Fadminbio" element={<Fadminbio />} />
        </Routes>
      </Suspense>
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
