const BannerText = () => {
  return (
    <div className="flex column align-start justify-center gap-3 flex-1 overflow-hidden">
      <h1 className="h3 my-banner-h1">
        Improve the{" "}
        <span className="b larger-text txt-primary txt-50">Connection</span>{" "}
        with your{" "}
        <span className="b larger-text txt-primary txt-50">Customers</span>
      </h1>
      <h2 className="h5 txt-grey txt-30 uppercase my-banner-h2">
        Create a stunning website!
      </h2>
      <p className="text-justify-start my-banner-p">
        Hi. I'm Abdul-Rahman Abdin, a web developer. I help you build a better
        relationship with customers by creating an eye-catching website for your
        business.
      </p>
    </div>
  );
};
export default BannerText;
