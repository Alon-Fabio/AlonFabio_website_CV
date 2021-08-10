import React from "react";
import "./Burger.scss";

const Burger: React.FC<{
  burgerClick: Function;
  burgerStyle: { burger: string; navLinks: string };
}> = ({ burgerClick, burgerStyle }): JSX.Element => {
  return (
    <div
      className={`burger ${burgerStyle.burger}`}
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
