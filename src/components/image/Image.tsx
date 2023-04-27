import React from "react";

interface IImage {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

const Image: React.FC<IImage> = ({ src, alt, style = {} }) => {
  return <img src={src.toString()} alt={alt.toString()} style={style} />;
};

export default Image;
