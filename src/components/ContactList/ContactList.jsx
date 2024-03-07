import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactListContainer}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          contactId={contact.id}
          name={contact.name}
          phoneNumber={contact.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
