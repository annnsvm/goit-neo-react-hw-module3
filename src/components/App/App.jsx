import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
//import defaultContacts from "../../contacts.json";

const App = () => {
  const INITIAL_STATE = []; //defaultContacts; // for local testing

  const [searchString, setSearchString] = useState("");

  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return INITIAL_STATE;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (values, actions) => {
    actions.resetForm();
    setContacts((prevContacts) => {
      return [...prevContacts, { id: nanoid(), ...values }];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact_i) => contact_i.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact_i) =>
    contact_i.name.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm callbackOnSubmit={addContact} />
      <SearchBox value={searchString} callbackOnChange={setSearchString} />
      <ContactList
        contacts={visibleContacts}
        callbackOnDelete={deleteContact}
      />
    </>
  );
};

export default App;
