import React, { useState, useRef } from "react";
// Style
import "./NavBar.scss";
import NavLogo from "../../styles/img/logos/NavLogo/NavLogo40";
// Components
import Burger from "../Burger/Burger";
// hooks
import { useEventListener } from "../../hooks/useEventListener";

const Navbar: React.FC<{ onRouteChange: Function }> = ({ onRouteChange }) => {
  const NavBar = useRef<HTMLAnchorElement | null>(null);
  const NavLi = useRef<HTMLUListElement | null>(null);
  const [navStyle, setNavStyle] = useState({
    burger: "",
    navLinks: "",
  });

  // Fun for the eventListener
  const scrollDetect = () => {
    // Changes the NavBars background and the fill color of the SVG logo.
    if (
      window.scrollY <= 20 &&
      NavBar.current !== null &&
      NavLi.current !== null
    ) {
      NavBar.current.classList.add("navbarTop");
      NavLi.current.style.color = "#000";
      NavBar.current.style.fill = "#000";
    }
    if (
      window.scrollY >= 20 &&
      NavBar.current !== null &&
      NavLi.current !== null
    ) {
      NavBar.current.classList.remove("navbarTop");
      NavLi.current.style.color = "#F26944";
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
            onRouteChange("Services");
          }}
        >
          {/*Left side home-logo, SVG format */}
          <NavLogo />
        </div>
        <div className="navLinksMain">
          <ul ref={NavLi} className={`navLinks ${navStyle.navLinks}`}>
            <li
              onClick={() => {
                onBurgerClick();
                onRouteChange("Contact");
              }}
            >
              Contact
            </li>
            {/* <li
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
            </li> */}
            <li
              onClick={() => {
                onBurgerClick();
                onRouteChange("Services");
              }}
            >
              Services
            </li>
          </ul>
        </div>
        <Burger navStyle={navStyle} burgerClick={onBurgerClick} />
      </div>
    </nav>
  );
};

export default Navbar;
