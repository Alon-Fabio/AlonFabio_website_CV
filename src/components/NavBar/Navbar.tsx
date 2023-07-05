import React, { useState, useRef, useEffect } from "react";
// Style
import "./NavBar.scss";
import NavLogo from "../../styles/img/logos/NavLogo/NavLogo40";
// Components
import Burger from "../Burger/Burger";
// hooks

import { NavLink } from "react-router-dom";

interface NavBarT {
  routeList: Array<String>;
}

const Navbar: React.FC<NavBarT> = ({ routeList }) => {
  const NavBar = useRef<HTMLDivElement | null>(null);
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
    <nav id="main_nav" className={"navbar_Top"}>
      <div ref={NavBar} className=" navMain">
        <div className={"LogoContainer"}>
          {/*Left side home-logo, SVG format */}
          <NavLink to={"/"}>
            <NavLogo />
          </NavLink>
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
                <NavLink to={`${routeName.toString()}`}>
                  {routeName.toString()[0] === "/"
                    ? `${routeName.toString().slice(1)}`
                    : `${routeName.toString()}`}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Burger navStyle={navStyle} burgerClick={() => onBurgerClick()} />
      </div>
    </nav>
  );
};

export default Navbar;
