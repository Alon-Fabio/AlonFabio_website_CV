import React, { useEffect, useState } from "react";

// Containers
import PageHero from "../../containers/PageHero/PageHero";
// Components
import GalleryGrid from "../../components/GalleryGrid/GalleryGrid";
// Style
import "./gallery.scss";
// Images
import AbandonedBW4Kw from "../../styles/img/backgrounds/B&WabandonedBuildings4Kw.jpg";
import AbandonedBW1080w from "../../styles/img/backgrounds/B&WabandonedBuildings1080w.jpg";
import AbandonedBW800w from "../../styles/img/backgrounds/B&WabandonedBuildings800w.jpg";

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

// const Photography: React.FC<{ library: string }> = React.memo(({ library }) => {
const Photography: React.FC<{ library: string }> = ({ library }) => {
  const [imageList, setImagesList] = useState<IImageList>();
  const [isPending, setPending] = useState(false);

  useEffect(() => {
    async function getImagesUrl(
      folder: string,
      AbortController?: AbortController
    ) {
      setPending(true);
      fetch(`http://localhost/gallery/${folder}`, {
        signal:
          AbortController?.signal !== undefined ? AbortController.signal : null,
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

  return (
    <section className="Gallery">
      <PageHero
        images={[
          { image: AbandonedBW800w, screenSize: "(max-width: 800px)" },
          { image: AbandonedBW1080w, screenSize: "(max-width: 1080px)" },
          { image: AbandonedBW4Kw, screenSize: "(min-width: 1080px)" },
        ]}
      >
        {/* <PageHero> */}
        {library === "photos" ? (
          <div id="PhotographyHero">
            <h1 className="slideDownAni">Photography</h1>
            {/* <img id="Photography_H1_BG" src={SunSet} alt="Clover" /> */}
          </div>
        ) : (
          <div>
            <h1>Graphics</h1>
          </div>
        )}
      </PageHero>
      <div className="container">
        {imageList?.images !== undefined ? (
          // <GalleryGrid imageList={imageList} />
          <div></div>
        ) : isPending ? (
          <div>
            {/* Add loading component */}
            <h1 className="flexCenter">Loading...</h1>
          </div>
        ) : (
          <div className="flexCenter" style={{ flexFlow: "column" }}>
            <h1>No images</h1>
            <div>
              <p>Sorry, something most have gone wrong..</p>
              <p>
                Please try us again later{" "}
                <span className="fa-regular fa-face-grin-beam-sweat"></span>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
// React memo↓
// )

export default Photography;
