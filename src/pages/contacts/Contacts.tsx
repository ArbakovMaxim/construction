import { ContactsForm } from "../../components/contactsForm/ContactsForm";
import { ContactsOffices } from "../../components/contactsOffices/ContactsOffices";
import { ContsctsSocial } from "../../components/contsctsSocial/ContsctsSocial";
import { HeroContacts } from "../../components/hero/heroContacts/HeroContacts";

const Contacts = () => {
  return (
    <>
      <HeroContacts />
      <ContactsForm />
      <ContactsOffices />
      <ContsctsSocial />
    </>
  );
};

export default Contacts;
