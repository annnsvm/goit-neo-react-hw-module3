import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, callbackOnDelete }) => {
  return (
    <ul className={css.conatactListContainer}>
      {contacts.map((contact_i) => (
        <li key={contact_i.id}>
          <Contact data={contact_i} callbackOnDelete={callbackOnDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
