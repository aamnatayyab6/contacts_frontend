import React from "react";
import ContactListItem from "./ContactListItem";

type Props = {};

export default function ContactsList({}: Props) {
  return (
    <div className="contacts-container">
      <div className="contacts-list">
        <ContactListItem />
        <ContactListItem />
        <ContactListItem />
      </div>
    </div>
  );
}
