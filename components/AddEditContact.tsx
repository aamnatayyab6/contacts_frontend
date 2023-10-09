import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Contact } from "@/typings";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  mode?: "Add" | "Edit";
  contact?: Contact;
  refreshContactList: () => void;
};

const AddEditContact = ({
  isVisible,
  onClose,
  mode = "Add",
  contact,
  refreshContactList,
}: Props) => {
  const [formData, setFormData] = useState({
    name: mode === "Add" ? "" : contact?.name || "",
    number: mode === "Add" ? "" : contact?.number || "",
    email: mode === "Add" ? "" : contact?.email || "",
  });

  useEffect(() => {
    if (contact && mode === "Edit") {
      setFormData({
        name: contact.name || "",
        number: contact.number || "",
        email: contact.email || "",
      });
    }
  }, [contact, mode]);

  if (!isVisible) return null;
  const handleCancelClick = () => {
    onClose();
  };

  const handleDoneClick = async () => {
    // Construct the JSON data for the new contact
    const newContactData = {
      name: formData.name,
      number: formData.number,
      email: formData.email,
    };

    if (mode === "Add") {
      try {
        // Send a POST request to the "Add Contact" API endpoint
        const response = await fetch("/api/routes/addContact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newContactData),
        });

        if (response.ok) {
          // Contact added successfully
          onClose();
          refreshContactList();
        } else {
          // Handle error cases, e.g., show an error message
        }
      } catch (error) {
        console.error("Error adding contact:", error);
        // Handle error cases, e.g., show an error message
      }
    } else if (mode === "Edit") {
      // Handle updating an existing contact using the "Edit Contact" API
      // Submit formData to the API endpoint for editing an existing contact
      // Use the contact.id to identify the contact to be updated
      // onContactAddedOrEdited();
      onClose();
    }
    onClose();
  };

  const headingText = mode === "Add" ? "Add Contact" : "Edit Contact";

  return (
    <>
      {isVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-info">
              <h1>{headingText}</h1>

              {/* frame pfp*/}
              <div className="frame">
                <span className="modal-pfp">
                  <Image
                    src={contact?.image || "/default-image.svg"}
                    alt="pfp"
                    width={88}
                    height={88}
                    priority
                    className="modal-pfp-image"
                  />
                </span>

                <span className="add-pic-buttons">
                  <span className="icon-label">
                    <Image
                      src="/plusIcon.svg"
                      alt="Add New Button"
                      width={24}
                      height={24}
                      className="add-button"
                      priority
                    />
                    <p className="add-pic">Add picture</p>
                  </span>
                </span>
              </div>

              {/* form */}
              {/* name card */}
              <div className="add-info">
                <p className="add-info-label">Name</p>
                <div className="input-field">
                  <input
                    className="input-area"
                    placeholder={
                      mode === "Add"
                        ? "Jamie Wright"
                        : contact?.name || "Unknown"
                    }
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                    }}
                  />
                </div>
              </div>

              {/* phone */}
              <div className="add-info">
                <p className="add-info-label">Phone number</p>
                <div className="input-field">
                  <input
                    className="input-area"
                    placeholder={
                      mode === "Add"
                        ? "+01 234 5678"
                        : contact?.number || "Add your phone number"
                    }
                    value={formData.number}
                    onChange={(e) => {
                      setFormData({ ...formData, number: e.target.value });
                    }}
                  />
                </div>
              </div>

              {/* email */}
              <div className="add-info">
                <p className="add-info-label">Email address</p>
                <div className="input-field">
                  <input
                    className="input-area"
                    placeholder={
                      mode === "Add"
                        ? "jamie.wright@mail.com"
                        : contact?.email || "Add your email address"
                    }
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>

            {/* footer */}
            <div className="modal-footer">
              {/* cancel button */}
              <div className="modal-cancel-button" onClick={handleCancelClick}>
                <p className="modal-cancel-done-text">Cancel</p>
              </div>

              {/* done button */}
              <div className="modal-done-button" onClick={handleDoneClick}>
                <p className="modal-cancel-done-text">Done</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddEditContact;
