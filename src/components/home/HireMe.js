import ContactCard from "../contact/ContactCard";

const HireMe = () => {
  return (
    <section className="hire-me">
      <div className="hire-me-bg"></div>
      <h2 className="h3 text-center" id="contact">
        Contact Me
      </h2>
      <p className="text-center">
        Have a project on your mind, or just want to say hello... I can't wait
        to hear from you.
      </p>
      <div className="mt-4 flex justify-center gap-2 wrap">
        <ContactCard
          icon="envelope"
          text="devabdin@gmail.com"
          title={"Email address. Click to copy to clipboard"}
          onClick={() => navigator.clipboard.writeText("devabdin@gmail.com")}
        />
      </div>
    </section>
  );
};
export default HireMe;
