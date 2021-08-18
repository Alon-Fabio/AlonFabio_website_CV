import React, { useState } from "react";
// Style
import "./NavBar.scss";
import NavLogo from "../../styles/img/logos/NavLogo/NavLogo";
// Components
import Burger from "../Burger/Burger";

const Navbar: React.FC<{ onRouteChange: Function; navBarScroll: boolean }> = ({
  onRouteChange,
  navBarScroll,
}) => {
  const [navStyle, setNavStyle] = useState({
    burger: "",
    navLinks: "",
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
    <nav className={navBarScroll ? "navbarTop" : ""}>
      <div
        className={"LogoContainer"}
        onClick={() => {
          onRouteChange("About");
        }}
      >
        <NavLogo
          color={navBarScroll ? "#000" : "#F26944"}
          className={"NavLogo"}
        />
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
