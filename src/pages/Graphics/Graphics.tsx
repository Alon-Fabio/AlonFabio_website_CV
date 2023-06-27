import React from "react";
import "./graphics.scss";
// Components
import GalleryGrid from "../../components/GalleryGrid/GalleryGrid";
import PageHero from "../../containers/PageHero/PageHero";

const Graphics = () => {
  return (
    <div>
      <PageHero>
        <h1>Graphics</h1>
      </PageHero>
      <GalleryGrid library="graphics" />
    </div>
  );
};

export default Graphics;
