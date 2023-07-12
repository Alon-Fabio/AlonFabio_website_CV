import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/NavBar/Navbar";

import Footer from "../../components/footer/Footer";

const RouterLayout = () => {
  // React-router: For hash scrolling to anchor and manual URL change.
  const { pathname, hash, key } = useLocation();
  const BaseLocation = pathname.split("/")[1];
  useEffect(() => {
    // If hash in URL, scroll to top.
    if (hash === "") {
      window.scrollTo(0, 0);
      return;
    }
    // scroll to id
    else
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

  // Router list for Pro and Per
  const PersonalRouteList = ["/Pro", "Graphics", "Photography", "Contact"];
  const ProfessionalRouteList = ["/Per", "Services", "Contact"];

  return (
    <>
      <header>
        {BaseLocation.search(/per/i) !== -1 ? (
          <>
            <Navbar routeList={PersonalRouteList} />
          </>
        ) : BaseLocation.search(/pro/i) !== -1 ? (
          <Navbar routeList={ProfessionalRouteList} />
        ) : (
          <></>
        )}
      </header>
      <main>
        <div className="mainContainer ">
          <Outlet />
        </div>
      </main>
      <footer>
        <Footer
          routerLinkArr={[
            {
              siteName: "Pro",
              routeList: ProfessionalRouteList.filter(
                (link) => link[0] !== "/" && link !== "Contact"
              ),
            },
            {
              siteName: "Per",
              routeList: PersonalRouteList.filter(
                (link) => link[0] !== "/" && link !== "Contact"
              ),
            },
          ]}
        />
      </footer>
    </>
  );
};
export default RouterLayout;
