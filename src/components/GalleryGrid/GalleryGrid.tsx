import React, { useState } from "react";
// Components
import FullScreenGallery from "../FullScreenGallery/FullScreenGallery";
// Functions
import { CloudinaryURLBuilder } from "../../functions/general";

type IImageList =
  | {
      images: Array<{
        img_format: string;
        version: string;
        name: string;
        folder: string;
      }>;
      URLStart: string;
    }
  | undefined;

const GalleryGrid: React.FC<{ imageList: IImageList }> = ({ imageList }) => {
  const [showModal, setShowModal] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const showImg = (imageIndex: number): void => {
    setImageIndex(imageIndex);
    setShowModal(true);
  };
  return (
    <div className="gallery_container">
      <FullScreenGallery
        imageList={imageList}
        imageIndex={imageIndex}
        showModal={showModal}
        setModal={setShowModal}
      />

      {imageList?.images.map((image, index) => {
        const ImageOBJForBuilder = {
          img_format: image.img_format,
          name: image.name,
          version: image.version,
          folder: image.folder,
        };

        return (
          <div
            className="gallery_image"
            key={index}
            onClick={() => showImg(index)}
          >
            <img
              loading="lazy"
              style={{ width: "350px", minHeight: "200px" }}
              src={CloudinaryURLBuilder(
                ImageOBJForBuilder,
                imageList.URLStart,
                0,
                350
              )}
              alt={image.name}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GalleryGrid;
