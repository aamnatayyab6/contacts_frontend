import React from "react";
import Image from "next/image";

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

const AddEditContact = ({ isVisible, onClose }: Props) => {
  if (!isVisible) return null;
  const handleCancelClick = () => {
    onClose();
  };

  const handleDoneClick = () => {
    // Handle adding the contact here
    // Then, close the modal using onClose()
    onClose();
  };
  return (
    <>
      {isVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-info">
              <h1>Add Contact</h1>

              {/* frame pfp*/}
              <div className="frame">
                <span className="modal-pfp">
                  <Image
                    src="/photo.svg"
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
                  <input className="input-area" placeholder="Jamie Wright" />
                </div>
              </div>

              {/* phone */}
              <div className="add-info">
                <p className="add-info-label">Phone number</p>
                <div className="input-field">
                  <input className="input-area" placeholder="+36 20 556 2828" />
                </div>
              </div>

              {/* email */}
              <div className="add-info">
                <p className="add-info-label">Email address</p>
                <div className="input-field">
                  <input
                    className="input-area"
                    placeholder="jamie.wright@mail.com"
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
