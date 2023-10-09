import React, { useEffect, useState } from "react";
import ContactListItem from "./ContactListItem";
import { getContacts } from "@/pages/api/contacts";
import { Contact } from "@/typings";

type Props = {};

export default function ContactsList({}: Props) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  useEffect(() => {
    async function fetchContacts() {
      try {
        const data = await getContacts();
        setContacts(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchContacts();
  }, []);

  return (
    <div className="contacts-container">
      <div className="contacts-list">
        {contacts.map((contact) => (
          <ContactListItem key={contact?.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}
