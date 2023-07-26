import React from "react";
import "./photography.scss";

// Images
import AbandonedBW4Kw from "../../styles/img/backgrounds/B&WabandonedBuildings4Kw.jpg";
import AbandonedBW1080w from "../../styles/img/backgrounds/B&WabandonedBuildings1080w.jpg";
import AbandonedBW800w from "../../styles/img/backgrounds/B&WabandonedBuildings800w.jpg";

// Components
import GalleryGrid from "../../components/GalleryGrid/GalleryGrid";
// Containers
import PageHero from "../../containers/PageHero/PageHero";

const Photography = () => {
  return (
    <div id="Photography">
      <PageHero
        images={[
          { image: AbandonedBW800w, screenSize: "(max-width: 800px)" },
          { image: AbandonedBW1080w, screenSize: "(max-width: 1080px)" },
          { image: AbandonedBW4Kw, screenSize: "(min-width: 1080px)" },
        ]}
      >
        <div id="PhotographyHero">
          <h1 className="fade_ani">Photography</h1>
        </div>
      </PageHero>
      <GalleryGrid library="photos" />
    </div>
  );
};

export default Photography;
