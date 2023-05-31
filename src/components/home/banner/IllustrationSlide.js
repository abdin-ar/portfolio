import MoneyRain from "./MoneyRain";

const IllustrationSlide = ({
  id,
  images,
  slideIndex,
  illustrationDataLength,
  IllustrationSlideTiming,
}) => {
  return (
    <>
      {images.map((image) => {
        return (
          <img
            key={image.alt}
            src={`/images/banner/${image.src}`}
            alt={image.alt}
            className={`illustration-img ${image.class} ${
              id === slideIndex
                ? "current"
                : id === slideIndex + 1 ||
                  (id === 0 && slideIndex === illustrationDataLength)
                ? "prev"
                : id === slideIndex - 1 ||
                  (id === illustrationDataLength && slideIndex === 0)
                ? "next"
                : "hidden"
            }`}
          />
        );
      })}
      {id === 3 ? (
        <MoneyRain
          MoneyItems={[
            "./images/banner/banknote.png",
            "./images/banner/coin.png",
          ]}
          rotationRange={120}
          createEach={80}
          forDuration={IllustrationSlideTiming - 500}
          appear={slideIndex === 3}
        />
      ) : null}
    </>
  );
};
export default IllustrationSlide;
