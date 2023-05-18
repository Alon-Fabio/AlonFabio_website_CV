import React, { useState, useRef } from "react";
// Style
import "./NavBar.scss";
import NavLogo from "../../styles/img/logos/NavLogo/NavLogo40";
// Components
import Burger from "../Burger/Burger";
// hooks
import { useEventListener } from "../../hooks/useEventListener";
import { NavLink as Link } from "react-router-dom";

type NavBarT = {
  scrollRef: React.RefObject<HTMLDivElement>;
  routeList: Array<String>;
};
const Navbar: React.FC<NavBarT> = ({ scrollRef, routeList }) => {
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
    <nav ref={NavBar} id="main_nav" className={"navbarTop"}>
      <div className="container navMain">
        <div className={"LogoContainer"}>
          {/*Left side home-logo, SVG format */}
          <Link to={"Services"}>
            <NavLogo />
          </Link>
        </div>
        <div className="navLinksMain">
          <ul ref={NavLi} className={`navLinks ${navStyle.navLinks}`}>
            {routeList.map((routeName) => (
              <li
                key={`NavLink-${routeName}`}
                onClick={() => {
                  onBurgerClick();
                }}
              >
                <Link to={`/${routeName.toString()}`}>{routeName}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Burger navStyle={navStyle} burgerClick={onBurgerClick} />
      </div>
    </nav>
  );
};

export default Navbar;
