import React from "react";
import "./contact-card.css";

/**
 * @type {React.FC<{icon:string,text:string,title:string} & React.AllHTMLAttributes>}
 */
const ContactCard = ({ icon, text, title, ...props }) => {
  return (
    <div className="contact-card" title={title} {...props}>
      <i className={`fas fa-${icon}`}></i>
      <p>{text}</p>
    </div>
  );
};
export default ContactCard;
