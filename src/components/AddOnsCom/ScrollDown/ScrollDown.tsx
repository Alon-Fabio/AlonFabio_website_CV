import React, { useRef } from "react";

import { useEventListener } from "../../../hooks/useEventListener";

import "./ScrollDown.scss";

import scrollGif from "../../../styles/img/gif/scrollDown.gif";

function ScrollDown() {
  const ScrollRef = useRef<HTMLDivElement | null>(null);
  const scrollDetect = () => {
    if (window.scrollY <= 20 && ScrollRef.current !== null) {
      ScrollRef.current.classList.remove("removeScroll");
    }
    if (window.scrollY >= 20 && ScrollRef.current !== null) {
      ScrollRef.current.classList.add("removeScroll");
    }
  };

  useEventListener({ type: "scroll", listener: scrollDetect });
  return (
    <div id="ScrollDown" ref={ScrollRef}>
      <img src={scrollGif} alt="Scroll down" />
    </div>
  );
}

export default ScrollDown;
