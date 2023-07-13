import React, { useEffect, useState } from "react";
// Style
import "./galleryGrid.scss";
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

const GalleryGrid: React.FC<{ library: string }> = ({ library }) => {
  const [showModal, setShowModal] = useState(false);
  const [imageList, setImagesList] = useState<IImageList>();
  const [isPending, setPending] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    async function getImagesUrl(
      folder: string,
      AbortController?: AbortController
    ) {
      setPending(true);
      fetch(`https://44.204.229.83/gallery/${folder}`, {
        signal: AbortController?.signal,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          if ("error" in response || response.images?.length <= 0) return;
          if ("URLStart" in response) {
            setImagesList(() => {
              return {
                images: response.images,
                URLStart: [
                  response.URLStart,
                  response.owner,
                  response.type,
                  response.action,
                ].join("/"),
              };
            });
          }
          setPending(false);

          //  return console.error("Looks like we are having a lite problem.. please try again later");
        })
        .catch((err) => {
          const backup = async (folder: string) => {
            const list = await import(`./imageFallback`);
            if (folder === "photos") {
              setImagesList(() => {
                return {
                  images: list.photos.images,
                  URLStart: [
                    list.photos.URLStart,
                    list.photos.owner,
                    list.photos.type,
                    list.photos.action,
                  ].join("/"),
                };
              });
            }
            if (folder === "graphics") {
              setImagesList(() => {
                return {
                  images: list.graphics.images,
                  URLStart: [
                    list.graphics.URLStart,
                    list.graphics.owner,
                    list.graphics.type,
                    list.graphics.action,
                  ].join("/"),
                };
              });
            }
          };

          backup(folder);

          console.error(err, "<================");
          setPending(false);

          // console.error(
          //   "Looks like we are having a lite problem.. please try again later"
          // );
        })
        .finally(() => {
          setPending(false);
        });
    }

    const FetchImagesController = new AbortController();

    getImagesUrl(library, FetchImagesController);

    return () => {
      FetchImagesController.abort("aborted by user (useEffect)");
    };
  }, [library, setPending]);

  const showImg = (imageIndex: number): void => {
    setImageIndex(imageIndex);
    setShowModal(true);
  };
  return (
    <section className="GalleryGrid">
      {imageList?.images !== undefined ? (
        <div className="gallery_container container">
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
      ) : isPending ? (
        <div>
          {/* Add loading component */}
          <h1 className="flexCenter">Loading...</h1>
        </div>
      ) : (
        <fieldset className="gallery_grid_no_images container">
          <legend>
            <span className="fa-solid fa-face-grin-beam-sweat"></span>
          </legend>
          <h1>No images </h1>
          <div>
            <p>Sorry, something most have gone wrong..</p>
            <p>Please try us again later</p>
          </div>
        </fieldset>
      )}
    </section>
  );
};

export default GalleryGrid;
