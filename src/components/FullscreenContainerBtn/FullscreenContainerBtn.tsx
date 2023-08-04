import React from "react";
import "./FullscreenContainerBtn.scss";

// Needs to manual set the media query to container width +200px

interface ISetFullscreen {
  setFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
  Fullscreen: boolean;
  LR: "right" | "left";
}

const FullscreenContainerBtn: React.FC<ISetFullscreen> = ({
  setFullscreen,
  Fullscreen,
  LR,
}) => {
  return (
    <button
      className="gallery_fullscreen_btn"
      style={{ float: LR }}
      onClick={() => setFullscreen((prv) => !prv)}
    >
      <div className="gallery_fullscreen_chevrons">
        <p className="gallery_fullscreen_btn_left">
          <i className="fa-solid fa-angle-left"></i>
        </p>
        {Fullscreen ? (
          <p className="chevron_text__min chevron_text">Minimize</p>
        ) : (
          <p className="chevron_text__max chevron_text">Enlarge</p>
        )}
        <p className="gallery_fullscreen_btn_right">
          <i className="fa-solid fa-angle-right"></i>
        </p>
      </div>
    </button>
  );
};

export default FullscreenContainerBtn;
