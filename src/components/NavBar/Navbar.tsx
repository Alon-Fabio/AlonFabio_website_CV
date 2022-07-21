import React, { useState, useRef } from "react";
// Style
import "./NavBar.scss";
import NavLogo from "../../styles/img/logos/NavLogo/NavLogo40";
// Components
import Burger from "../Burger/Burger";
// hooks
import { useEventListener } from "../../hooks/useEventListener";

const Navbar: React.FC<{
  onRouteChange: Function;
  scrollRef: React.RefObject<HTMLDivElement>;
}> = ({ onRouteChange, scrollRef }) => {
  const NavBar = useRef<HTMLAnchorElement | null>(null);
  const NavLi = useRef<HTMLUListElement | null>(null);
  const [navStyle, setNavStyle] = useState({
    burger: "",
    navLinks: "",
  });

  // Fun for the eventListener
  const scrollDetect = () => {
    const scrollYTop = scrollRef.current?.scrollTop;
    // Changes the NavBars background and the fill color of the SVG logo.
    if (
      typeof scrollYTop !== "number" ||
      NavBar.current === null ||
      NavLi.current === null
    )
      return;
    if (scrollYTop <= 20) {
      NavBar.current.classList.add("navbarTop");
      NavBar.current.classList.remove("navNotTop");
      NavLi.current.classList.remove("navNotTop");
    }
    if (scrollYTop >= 20 && NavBar.current.className !== "navbarNotTop") {
      NavBar.current.classList.remove("navbarTop");
      NavBar.current.classList.add("navNotTop");
      NavLi.current.classList.add("navNotTop");
    }
  };
  useEventListener({
    type: "scroll",
    listener: scrollDetect,
    element: scrollRef,
  });

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
    <nav ref={NavBar} className={"navbarTop"} aria-label="hide">
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
