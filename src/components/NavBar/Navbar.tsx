import React, { useState, useRef, useEffect } from "react";
// Style
import "./NavBar.scss";
import NavLogo from "../../styles/img/logos/NavLogo/NavLogo40";
// Components
import Burger from "../Burger/Burger";
// hooks

import { NavLink as Link } from "react-router-dom";

type NavBarT = {
  routeList: Array<String>;
};
const Navbar: React.FC<NavBarT> = ({ routeList }) => {
  const NavBar = useRef<HTMLAnchorElement | null>(null);
  const NavLi = useRef<HTMLUListElement | null>(null);
  const [navStyle, setNavStyle] = useState({
    burger: "",
    navLinks: "",
  });

  useEffect(() => {
    window.addEventListener("scroll", scrollDetect);
    return () => {
      window.removeEventListener("scroll", scrollDetect);
    };
  }, []);

  // Fun for the eventListener
  const scrollDetect = () => {
    const scrollYTop = window.scrollY;
    // Changes the NavBars background and the fill color of the SVG logo.
    if (
      typeof scrollYTop !== "number" ||
      NavBar.current === null ||
      NavLi.current === null
    )
      return;
    if (scrollYTop <= 20) {
      NavBar.current.classList.add("navbar_Top");
      NavBar.current.classList.remove("nav_Not_Top");
      NavLi.current.classList.remove("nav_li_not_top");
    }
    if (scrollYTop >= 20 && NavBar.current.className !== "navbarNotTop") {
      NavBar.current.classList.remove("navbar_Top");
      NavBar.current.classList.add("nav_Not_Top");
      NavLi.current.classList.add("nav_li_not_top");
    }
  };

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
    <nav ref={NavBar} id="main_nav" className={"navbar_Top"}>
      <div className="container navMain">
        <div className={"LogoContainer"}>
          {/*Left side home-logo, SVG format */}
          <Link to={"Services"}>
            <NavLogo />
          </Link>
        </div>
        <div className="navLinksMain">
          <ul ref={NavLi} className={`nav_links ${navStyle.navLinks}`}>
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
