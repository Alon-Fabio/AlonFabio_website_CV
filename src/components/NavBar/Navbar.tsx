import React, { useState } from "react";
import { useEventListener } from "../../hooks/useEventListener";
// Style
import "./NavBar.scss";
import NavLogo from "../../styles/img/logos/NavLogo/NavLogo";
// Components
import Burger from "../Burger/Burger";

const Navbar: React.FC<{ onRouteChange: Function }> = ({ onRouteChange }) => {
  const [scrollTop, setScrollTop] = useState(true);
  const [logoColor, setLogoColor] = useState("black");
  const [navStyle, setNavStyle] = useState({
    burger: "",
    navLinks: "",
  });
  const scrollDetect = () => {
    if (window.scrollY <= 20) {
      setScrollTop(true);
      setLogoColor("#000");
    }
    if (window.scrollY >= 20) {
      setScrollTop(false);
      setLogoColor("#F26944");
    }
  };
  useEventListener({ type: "scroll", listener: scrollDetect });

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
