import React from "react";
import "./imageStack.scss";

// This component has no hight.
// It's an absolute position comp', meant to be used in menus.

const ImageStack: React.FC<{ images: Array<string> }> = ({ images }) => {
  const imageLength = images.length;

  return (
    <div
      id="ImageStack"
      className="flexCenter"
      style={{ width: imageLength * 15 * 2 + "px" }}
    >
      {images
        .filter(
          (img) =>
            typeof img === "string" && img.slice(0, 14) === "/static/media/"
        )
        .map((img, index) => {
          return (
            <div
              key={"ImageStack" + index}
              className={"imageSq"}
              // style={{ left: index * 15 }}
            >
              <img src={img} alt="well shit.." />
            </div>
          );
        })}
    </div>
  );
};

export default ImageStack;
