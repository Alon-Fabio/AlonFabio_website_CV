import React, { useEffect, useRef, useState } from "react";

import { useEventListener } from "../../../hooks/useEventListener";

import "./ScrollDown.scss";

import scrollGif from "../../../styles/img/gif/scrollDown.gif";

function ScrollDown() {
  const ScrollRef = useRef<HTMLDivElement | null>(null);
  const [onLoad, setOnLoad] = useState("");

  const onLoadTimeOut = () => {
    console.log(window.scrollY);
    setTimeout(() => {
      if (window.scrollY <= 20) {
        setOnLoad("onLoad");
      }
    }, 2500);
  };
  useEffect(() => {
    onLoadTimeOut();
  }, []);
  const scrollDetect = () => {
    if (window.scrollY <= 20 && ScrollRef.current !== null) {
      ScrollRef.current.classList.remove("removeScroll");
    }
    if (window.scrollY >= 20 && ScrollRef.current !== null) {
      ScrollRef.current.classList.add("removeScroll", "onLoad");
    }
  };

  useEventListener({ type: "scroll", listener: scrollDetect });
  return (
    <div
      id="ScrollDown"
      ref={ScrollRef}
      className={onLoad ? "onLoad" : undefined}
    >
      <img src={scrollGif} alt="Scroll down" />
    </div>
  );
}

export default ScrollDown;
