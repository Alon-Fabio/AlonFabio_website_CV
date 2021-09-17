import React, { useState, useRef } from "react";
// Style
import "./NavBar.scss";
import NavLogo from "../../styles/img/logos/NavLogo/NavLogo";
// Components
import Burger from "../Burger/Burger";
// hooks
import { useEventListener } from "../../hooks/useEventListener";

const Navbar: React.FC<{ onRouteChange: Function }> = ({ onRouteChange }) => {
  const NavBar = useRef<HTMLAnchorElement | null>(null);
  const [navStyle, setNavStyle] = useState({
    burger: "",
    navLinks: "",
  });

  // Fun for the eventListener
  const scrollDetect = () => {
    // Changes the NavBars background and the fill color of the SVG logo.
    if (window.scrollY <= 20 && NavBar.current !== null) {
      NavBar.current.classList.add("navbarTop");
      NavBar.current.style.fill = "#000";
    }
    if (window.scrollY >= 20 && NavBar.current !== null) {
      NavBar.current.classList.remove("navbarTop");
      NavBar.current.style.fill = "#F26944";
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
    <nav ref={NavBar} className={"navbarTop"}>
      <div className="container navMain">
        <div
          className={"LogoContainer"}
          onClick={() => {
            onRouteChange("About");
          }}
        >
          {/*Left side home-logo, SVG format */}
          <NavLogo />
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
      </div>
    </nav>
  );
};

export default Navbar;
