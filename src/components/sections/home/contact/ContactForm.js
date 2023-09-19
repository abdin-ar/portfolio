import React from "react";
import FormInput from "../../../primitives/forms/FormInput";
import Form from "../../../primitives/forms/Form";
import FormColumns from "../../../primitives/forms/FormColumns";
import FormAlert from "../../../primitives/forms/FormAlert";
import SubmitButton from "../../../primitives/forms/SubmitButton";
import useFormValidation from "../../../../hooks/useFormValidation";
import useFormAlert from "../../../../hooks/useFormAlert";

const ContactForm = () => {
  /**
   * @type {import('../../../../utils/validator').formFields}
   */
  const fields = {
    fName: {
      value: "",
      validation: [
        { type: "notEmpty", message: "Please Enter Your First Name" },
      ],
    },
    lName: {
      value: "",
      validation: [
        { type: "notEmpty", message: "Please Enter Your Last Name" },
      ],
    },
    email: {
      value: "",
      validation: [
        { type: "notEmpty", message: "Please Enter Your Email" },
        { type: "isEmail", message: "Please Enter a Valid Email" },
      ],
    },
    subject: {
      value: "",
      validation: [
        {
          type: "notEmpty",
          message: "Please Write the Subject of your Message",
        },
      ],
    },
    textmessage: {
      value: "",
      validation: [
        { type: "notEmpty", message: "Please Write a Message" },
        {
          type: "maxLength",
          message:
            "Your Message is too Long. Please Limit it to 1000 characters",
          limit: 1000,
        },
      ],
    },
  };

  const contactForm = useFormValidation(fields);
  const contactFormAlert = useFormAlert(10000);

  /**
   * @param {React.ChangeEvent<React.InputHTMLAttributes>} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = contactForm.validate();
    if (errors === 0) {
      const myMessage = contactForm.getFormValues();
      const finalMessage = { ...myMessage };
      finalMessage.timeSent = new Date();
      console.log(`Time Sent: ${finalMessage.timeSent}
First Name: ${finalMessage.fName}
Last Name: ${finalMessage.lName}
Email: ${finalMessage.email}
Subject: ${finalMessage.subject}
Message: ${finalMessage.textmessage}`);
      contactForm.resetForm();
      contactFormAlert.alert("success", "Your Message Was Sent Successfully");
    } else {
      contactFormAlert.alert(
        "error",
        `${errors} Field${errors > 1 ? "s Have Errors" : " Has an Error"} !`
      );
    }
  };

  return (
    <Form isWide={true} onSubmit={handleSubmit}>
      <p>Please note that all the fields are required.</p>
      <FormColumns>
        <div>
          <FormInput
            isValidated={true}
            label="First Name"
            labelClassName="h6"
            name="fName"
            type="text"
            maxLength={30}
            autoComplete="off"
            placeholder="John"
            onChange={contactForm.handleChange}
            value={contactForm.formData.fName.value}
            validState={contactForm.formData.fName}
          />
          <FormInput
            isValidated={true}
            label="Last Name"
            labelClassName="h6"
            name="lName"
            type="text"
            maxLength={30}
            autoComplete="off"
            placeholder="Doe"
            onChange={contactForm.handleChange}
            value={contactForm.formData.lName.value}
            validState={contactForm.formData.lName}
          />
          <FormInput
            isValidated={true}
            label="Email"
            labelClassName="h6"
            name="email"
            type="email"
            autoComplete="off"
            placeholder="example@email.com"
            onChange={contactForm.handleChange}
            value={contactForm.formData.email.value}
            validState={contactForm.formData.email}
          />
        </div>
        <div>
          <FormInput
            isValidated={true}
            label="Subject"
            labelClassName="h6"
            name="subject"
            type="text"
            maxLength={100}
            autoComplete="off"
            placeholder="Subject of your Query"
            onChange={contactForm.handleChange}
            value={contactForm.formData.subject.value}
            validState={contactForm.formData.subject}
          />
          <FormInput
            isValidated={true}
            label="Message"
            labelClassName="h6"
            name="textmessage"
            type="textarea"
            maxLength={1000}
            autoComplete="off"
            placeholder="Write your message here"
            onChange={contactForm.handleChange}
            value={contactForm.formData.textmessage.value}
            validState={contactForm.formData.textmessage}
          />
        </div>
      </FormColumns>
      <FormAlert status={contactFormAlert.state}>
        {contactFormAlert.message}
      </FormAlert>
      <SubmitButton isFullWidth>Send Message</SubmitButton>
    </Form>
  );
};

export default ContactForm;
