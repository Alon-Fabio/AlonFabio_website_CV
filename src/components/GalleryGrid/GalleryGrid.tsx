import React, { useEffect, useRef, useState, createRef } from "react";
// Style
import "./galleryGrid.scss";
// Components
import FullScreenGallery from "../FullScreenGallery/FullScreenGallery";
import LoadAni from "../LoadAni/LoadAni";
// Functions
import { CloudinaryURLBuilder } from "../../functions/general";
import FullscreenContainerBtn from "../FullscreenContainerBtn/FullscreenContainerBtn";
import { useObserver } from "../../hooks/useObserver";

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

type images = Array<{
  id: number;
  folder: string;
  img_format: string;
  name: string;
  width: number;
  height: number;
  version: string;
  created_at: string;
}>;

type imagesBackup = {
  URLStart: string;
  owner: string;
  type: string;
  action: string;
  images: images;
};

interface IBackupFiles {
  [key: string]: imagesBackup;
}

const GalleryGrid: React.FC<{ library: string }> = ({ library }) => {
  const [showModal, setShowModal] = useState(false);
  const [imageList, setImagesList] = useState<IImageList>();
  const [isPending, setPending] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [Fullscreen, setFullscreen] = useState(false);

  let imagesRef = useRef([]);

  useEffect(() => {
    async function getImagesUrl(
      folder: string,
      AbortController?: AbortController
    ) {
      setPending(true);
      fetch(`https://multitasker.alonfabio.com/api/gallery/${folder}`, {
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
          imagesRef.current = response.map(
            (_: Object, i: number) => imagesRef.current[i] ?? createRef()
          );

          setPending(false);

          //  return console.error("Looks like we are having a lite problem.. please try again later");
        })
        .catch((err) => {
          const backup = async (folder: string) => {
            const allFolders: IBackupFiles = await import(`./imageFallback`);
            const backupFolder = allFolders[folder];
            setImagesList(() => {
              return {
                images: backupFolder.images,
                URLStart: [
                  backupFolder.URLStart,
                  backupFolder.owner,
                  backupFolder.type,
                  backupFolder.action,
                ].join("/"),
              };
            });
            imagesRef.current = backupFolder.images.map(
              (_, i: number) => imagesRef.current[i] ?? createRef()
            );
          };

          backup(folder);

          console.log("Something went wrong, loading local assets.");
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
  }, []);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  const intersectionObserverCallback: IntersectionObserverCallback = (
    entries,
    observer
  ) => {
    entries.forEach((entry) => {
      // Onload all images are in view (isIntersecting === true). Checking height signify the element has loaded.
      // If client screen is below 250px some elements will be too small, I've decided to load normally on small screens.
      if (
        (entry.isIntersecting && entry.target.clientHeight > 200) ||
        window.innerWidth < 400
      ) {
        entry.target.classList.remove("AF_op0");
        entry.target.classList.add("flip_scale_forward_ani");
        observer.unobserve(entry.target);
        // console.log("trigger > 150");
      }
    });
  };
  // useEffect(() => {
  useObserver(options, imagesRef.current, intersectionObserverCallback);
  // }, []);

  const showImg = (imageIndex: number): void => {
    setImageIndex(imageIndex);
    setShowModal(true);
  };
  return (
    <section className="GalleryGrid">
      {imageList?.images !== undefined ? (
        <div
          className={
            Fullscreen
              ? `gallery_container container fullscreen_container`
              : "gallery_container container"
          }
        >
          <FullscreenContainerBtn
            setFullscreen={setFullscreen}
            Fullscreen={Fullscreen}
            LR={"left"}
          />
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
                  ref={imagesRef.current[index]}
                  className="AF_op0"
                  loading="lazy"
                  src={CloudinaryURLBuilder(
                    ImageOBJForBuilder,
                    imageList.URLStart,
                    300,
                    0
                  )}
                  alt={image.name}
                />
              </div>
            );
          })}
        </div>
      ) : isPending ? (
        <LoadAni />
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
