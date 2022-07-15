import React from "react";
import "./Burger.scss";

const Burger: React.FC<{
  burgerClick: Function;
  navStyle: { burger: string; navLinks: string };
}> = ({ burgerClick, navStyle }): JSX.Element => {
  return (
    <div
      className={`burger ${navStyle.burger}`}
      onClick={() => {
        burgerClick();
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burger;
