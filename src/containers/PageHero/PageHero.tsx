import React from "react";
import PropTypes from "prop-types";

// Style
import "./pageHero.scss";
type HeroProps = {
  children: React.ReactNode;
  images?: Array<{ image: string; screenSize: string }>;
};
const PageHero: React.FC<HeroProps> = ({ children, images = [] }) => {
  return (
    <section className="PageHero ">
      {images.length === 0 ? (
        <></>
      ) : (
        <picture>
          {images.map((imageObject, index) => (
            <source
              key={`HeroImage ${index}`}
              srcSet={`${imageObject.image} ${index + 1}x`}
              media={imageObject.screenSize}
            />
          ))}

          <img
            style={{
              position: "absolute",
              bottom: "0",
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            srcSet={`${images[images?.length - 1]?.image} ${
              images?.length + 1
            }x`}
            alt="Full Logo"
          />
        </picture>
      )}
      {children}
    </section>
  );
};

PageHero.propTypes = {
  children: PropTypes.element,
  images: PropTypes.array,
};

export default PageHero;
