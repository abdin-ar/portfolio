import React from "react";
import DarkSection from "../../../../primitives/layout/DarkSection";
import ContactCard from "../../../../primitives/other/ContactCard";
// import ContactForm from "../ContactForm";
import "./contact-me.css";

/**
 * @type {React.FC}
 */
const ContactSection = () => {
  return (
    <DarkSection isLast>
      <h2 className="h3 contact-me-intro" id="contact">
        Contact Me
      </h2>
      <p className="contact-me-intro">
        Have a project on your mind, or just want to say hello... I can't wait
        to hear from you.
      </p>
      <div className="contact-me-cards">
        <ContactCard
          icon="envelope"
          text="devabdin@gmail.com"
          title={"Email address. Click to copy to clipboard"}
          onClick={() => navigator.clipboard.writeText("devabdin@gmail.com")}
        />
      </div>
      {/* <ContactForm /> */}
    </DarkSection>
  );
};
export default ContactSection;
