const ContactCard = ({ icon, text, title }) => {
  return (
    <div className="contact-card" title={title}>
      <i className={`fas fa-${icon}`}></i>
      <p>{text}</p>
    </div>
  );
};
export default ContactCard;
