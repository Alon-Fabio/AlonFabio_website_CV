import React from "react";
// Components
import GalleryGrid from "../../components/GalleryGrid/GalleryGrid";
import PageHero from "../../containers/PageHero/PageHero";
// Style
import "./graphics.scss";
// Images
import Ribbon4K from "../../styles/img/backgrounds/Ribbon4Kw.jpg";
import Ribbon1080 from "../../styles/img/backgrounds/Ribbon1080w.jpg";

const Graphics = () => {
  return (
    <div id="Graphics">
      <PageHero
        images={[
          { image: Ribbon1080, screenSize: "(max-width: 1080px)" },
          { image: Ribbon4K, screenSize: "(min-width:1080px)" },
        ]}
      >
        <h1>Graphics</h1>
      </PageHero>
      <GalleryGrid library="graphics" />
    </div>
  );
};

export default Graphics;
