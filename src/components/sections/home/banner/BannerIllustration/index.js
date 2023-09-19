import React, { useState, useEffect } from "react";
import illustrationData from "../../../../../data/illustrationData";
import IllustrationSlide from "../IllustrationSlide";
import "./banner-illustration.css";

const IllustrationSlideTiming = 6500;

/**
 * @type {React.FC}
 */
const BannerIllustration = () => {
  const [slideIndex, setSlideIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => {
        if (prev === illustrationData.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, IllustrationSlideTiming);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="banner-illustration">
      <div className="my-illustration-slides">
        {illustrationData.map((slide) => {
          const { id, images } = slide;
          return (
            <IllustrationSlide
              key={id}
              id={id}
              images={images}
              slideIndex={slideIndex}
              illustrationDataLength={illustrationData.length - 1}
              IllustrationSlideTiming={IllustrationSlideTiming}
            />
          );
        })}
      </div>
      <div className="my-illustration-text">
        {illustrationData.map((slide) => {
          return (
            <p
              key={slide.id}
              className={`h5 my-illustration-text-content ${
                slide.id === slideIndex
                  ? "current"
                  : slide.id === slideIndex + 1 ||
                    (slide.id === 0 &&
                      slideIndex === illustrationData.length - 1)
                  ? "prev"
                  : slide.id === slideIndex - 1 ||
                    (slide.id === illustrationData.length - 1 &&
                      slideIndex === 0)
                  ? "next"
                  : "hidden"
              }`}
            >
              <span>{slide.id + 1}. </span>
              {slide.text}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default BannerIllustration;
