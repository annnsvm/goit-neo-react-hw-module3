import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const Contact = ({ data: { id, name, number }, callbackOnDelete }) => {
  return (
    <div className={css.contactContainer}>
      <div className={css.contactInfoContainer}>
        <p>
          <FaUser />
          <span className={css.contactInfoText}>{name}</span>
        </p>
        <p>
          <FaPhoneAlt />
          <span className={css.contactInfoText}>{number}</span>
        </p>
      </div>
      <button className={css.deleteBtn} onClick={() => callbackOnDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
