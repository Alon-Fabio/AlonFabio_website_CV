import React from "react";
import ImageGallery from "react-image-gallery";

// Functions
import { CloudinaryURLBuilder } from "../../functions/general";
// Modal
import ModalBase from "../Modals/ModalBase/ModalBase";

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

interface IFullScreenGallery {
  imageList: IImageList;
  imageIndex: number;
  showModal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const FullScreenGallery: React.FC<IFullScreenGallery> = ({
  imageList,
  imageIndex,
  showModal,
  setModal,
}) => {
  return (
    <div>
      <ModalBase
        setShowModal={setModal}
        showModal={showModal}
        clickOutSide={false}
      >
        <div id="ImageGalleryContainer">
          <ImageGallery
            items={
              imageList?.images.map((image) => {
                const ImageOBJForBuilder = {
                  img_format: image.img_format,
                  name: image.name,
                  version: image.version,
                  folder: image.folder,
                };
                return {
                  original: CloudinaryURLBuilder(
                    ImageOBJForBuilder,
                    imageList.URLStart
                  ),
                  thumbnail: CloudinaryURLBuilder(
                    ImageOBJForBuilder,
                    imageList.URLStart,
                    0,
                    100
                  ),
                  thumbnailWidth: 50,
                };
              }) || []
            }
            lazyLoad
            startIndex={imageIndex}
            thumbnailPosition={"right"}
            renderCustomControls={() => {
              return (
                <button
                  className="image-gallery-custom-action exit_gallery"
                  onClick={() => setModal(false)}
                >
                  <span className="fa-solid fa-arrow-right-from-bracket fa-rotate-180"></span>
                </button>
              );
            }}
          />
        </div>
      </ModalBase>
    </div>
  );
};

export default FullScreenGallery;
