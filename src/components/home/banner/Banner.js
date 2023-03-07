import BannerText from "./BannerText";
import BannerIllustration from "./BannerIllustration";

const Banner = () => {
  return (
    <>
      <section
        className="flex justify-between align-center to-row-md row-gap-4 column-gap-4 my-banner"
        id="home"
      >
        <BannerText />
        <BannerIllustration />
      </section>
      <div className="btn-container gap-2 mt-4 my-banner-cta">
        <a
          href="#contact"
          className="text-center btn spacing-l bg-primary bg-50 h-bg-primary h-bg-30 txt-grey txt-90 h-txt-grey h-txt-90 dm-h-bg-primary dm-h-bg-70 dm-txt-grey dm-txt-10 dm-h-txt-grey dm-h-txt-10 pill"
        >
          Start Building Your Great Website
        </a>
        <a
          href="#projects"
          className="text-center btn spacing-l bg-grey bg-80 h-bg-grey h-bg-70 txt-grey txt-10 h-txt-grey h-txt-10 dm-h-bg-grey dm-h-bg-90 pill"
        >
          View Sample Projects
        </a>
      </div>
    </>
  );
};
export default Banner;
