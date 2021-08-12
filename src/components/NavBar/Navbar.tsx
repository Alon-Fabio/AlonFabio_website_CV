import React, { useEffect, useState } from "react";

// Style
import "./NavBar.scss";
import NavLogo from "../../styles/img/logos/NavLogo/NavLogo";

import Burger from "../Burger/Burger";

const Navbar: React.FC<{ onRouteChange: Function }> = ({ onRouteChange }) => {
  const [scrollTop, setScrollTop] = useState(true);
  const [navStyle, setNavStyle] = useState({
    burger: "",
    navLinks: "",
  });
  const [logoColor, setLogoColor] = useState("black");
  useEffect(() => {
    const scrollDetect = () => {
      if (window.innerWidth >= 786) {
        if (window.scrollY >= 20) {
          setScrollTop(false);
          setLogoColor("#F26944");
        } else if (window.scrollY <= 20) {
          setScrollTop(true);
          setLogoColor("#000");
        }
      }
    };
    window.addEventListener("scroll", scrollDetect);
    return () => {
      window.removeEventListener("scroll", scrollDetect);
      console.log("removed");
    };
  }, []);

  const onBurgerClick = (): void => {
    setNavStyle((prvState) => {
      if (prvState.burger === "burgerAni") {
        return { burger: "", navLinks: "" };
      } else {
        return {
          burger: "burgerAni",
          navLinks: "navLinksShow",
        };
      }
    });
  };

  return (
    <nav className={scrollTop ? "navbarTop" : ""}>
      <div
        className={"LogoContainer"}
        onClick={() => {
          onRouteChange("About");
        }}
      >
        <NavLogo color={logoColor} className={"NavLogo"} />
      </div>
      <div className="navLinksMain">
        <ul className={`navLinks ${navStyle.navLinks}`}>
          <li
            onClick={() => {
              onBurgerClick();
              onRouteChange("Contact");
            }}
          >
            Contact
          </li>
          <li
            onClick={() => {
              onBurgerClick();
              onRouteChange("Dox");
            }}
          >
            Dox
          </li>
          <li
            onClick={() => {
              onBurgerClick();
              onRouteChange("Projects");
            }}
          >
            Projects
          </li>
          <li
            onClick={() => {
              onBurgerClick();
              onRouteChange("About");
            }}
          >
            About
          </li>
        </ul>
      </div>
      <Burger navStyle={navStyle} burgerClick={onBurgerClick} />
    </nav>
  );
};

export default Navbar;
