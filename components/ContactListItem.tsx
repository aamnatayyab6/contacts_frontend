import React, { useState } from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";
import AddEditContact from "./AddEditContact";
import { Contact } from "@/typings";

type Props = {
  contact: Contact;
  refreshContactList: () => void;
};

export default function ContactListItem({
  contact,
  refreshContactList,
}: Props) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);

  const handleEditClick = () => {
    setIsDropdownVisible(false); // Close the dropdown
    setIsEditClicked(true);
  };

  return (
    <div className="contact-item">
      <div className="contact-info">
        {/* pfp */}
        <span className="contact-pfp">
          <Image
            src={contact?.image || "/default-image.svg"}
            alt="Pfp Icon"
            width={40}
            height={40}
            className="contact-pfp-image"
            priority
          />
        </span>
        {/* card */}
        <span className="namecard">
          <h3>{contact?.name}</h3>
          <p className="message">{contact?.number}</p>
        </span>
      </div>

      {/* buttons on hover */}
      <div className="contact-item-buttons opacity-0 hover:opacity-100">
        <span className="contact-item-buttons-icon-holder">
          <Image
            src="/mute.svg"
            alt="Mute Icon"
            width={24}
            height={24}
            priority
          />
        </span>
        <span className="contact-item-buttons-icon-holder">
          <Image
            src="/call.svg"
            alt="Call Icon"
            width={24}
            height={24}
            priority
          />
        </span>
        <span
          className="contact-item-buttons-icon-holder more-icon"
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          <Image
            src="/more-3-dots.svg"
            alt="More Icon"
            width={24}
            height={24}
            priority
          />
          {isDropdownVisible && <Dropdown onEditClick={handleEditClick} />}
        </span>
      </div>

      {isEditClicked && (
        <AddEditContact
          isVisible={isEditClicked}
          onClose={() => {
            setIsEditClicked(false);
          }}
          mode="Edit" // Set the mode to "Edit"
          contact={contact}
          refreshContactList={refreshContactList}
        />
      )}
    </div>
  );
}
