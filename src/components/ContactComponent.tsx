import "../styles/contacts.css"

export interface ContactProps {
    title: string;
    details: string;
    icon: string;
}

function ContactComponent({title, details, icon}: ContactProps) {
  return (
    <div className="contacts-box">
        <img src={icon} alt={title} className="contacts-icon"/>
        <p className="contacts-title">{title}</p>
        <p className="contacts-details">{details}</p>
    </div>
  )
}

export default ContactComponent