import Image from "next/image";
import React, { useState } from "react";
import AddEditContact from "@/components/AddEditContact";

type Props = {
  isVisible: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  isEditMode: boolean;
};

export default function Header({ isVisible, setShowModal, isEditMode }: Props) {
  const handleAddNewClick = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className="header-box">
        {/* left header */}
        <div className="left-header ">
          <span className="button-icon-back">
            <Image
              src="/back-arrow.svg"
              alt="back arrow Icon"
              // className=""
              width={24}
              height={24}
              priority
            />
          </span>
        </div>

        {/* middle contacts sec */}
        <div className="contacts-box ">
          {!isEditMode && !isVisible && (
            <div className="contacts-headline">
              {/* title */}
              <h1>Contacts</h1>

              {/* buttons */}

              <span className="header-buttons">
                {/* settings */}
                <span className="buttons-icon">
                  <Image
                    src="/settings.svg"
                    alt="settings Icon"
                    width={24}
                    height={24}
                    priority
                  />
                </span>

                {/* pfp */}
                <span className="buttons-icon">
                  <Image
                    src="/photo.svg"
                    alt="Pfp Icon"
                    width={24}
                    height={24}
                    className="pfp-image"
                    priority
                  />
                </span>

                {/* add new */}

                <span className="add-new-icon" onClick={handleAddNewClick}>
                  <Image
                    src="/plusIcon.svg"
                    alt="Add New Button"
                    width={24}
                    height={24}
                    className="add-button"
                    priority
                  />
                  <h2 className="add-new-text">Add new</h2>
                </span>
              </span>
            </div>
          )}
        </div>

        {/* right header */}
        <div className="right-header">
          <span className="light-mode-button">
            <Image
              src="/light-mode-icon.svg"
              alt="Light Mode Button"
              width={24}
              height={24}
              priority
            />
          </span>
        </div>
      </div>
      <div className="modal-container">
        {isVisible && (
          <AddEditContact
            isVisible={isVisible}
            onClose={() => setShowModal(false)}
            mode="Add"
          />
        )}
      </div>
    </>
  );
}
