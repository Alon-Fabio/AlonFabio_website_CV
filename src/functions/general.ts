import { RefObject } from "react";

export const isSSR: boolean = !(
  typeof window !== "undefined" && window.document?.createElement
);

export const getRefElement = <T>(
  element?: RefObject<Element> | T
): Element | T | undefined | null => {
  if (typeof element === "object" || typeof element === "function") {
    if (element && "current" in element) {
      return element.current;
    }
  }

  return element;
};

type IImageURLBuilder = (
  images: {
    img_format: string;
    version: string;
    name: string;
    folder: string;
  },
  URLStart: string,
  height?: number,
  width?: number
) => string;

export const CloudinaryURLBuilder: IImageURLBuilder = (
  images,
  URLStart,
  height = 0,
  width = 0
) => {
  let imageURL = "";
  const ImageURLEnd =
    [images.version, images.folder, images.name].join("/") +
    "." +
    images.img_format;
  if (height !== 0) imageURL = "h_" + height.toString() + imageURL;
  if (width !== 0) imageURL = "w_" + width.toString() + imageURL;
  if (height !== 0 || width !== 0) imageURL = "/" + imageURL + ",c_scale";
  return URLStart + imageURL + "/" + ImageURLEnd;
};
