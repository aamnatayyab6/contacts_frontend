import React from "react";
import Image from "next/image";

type Props = {};

const Dropdown = (props: Props) => {
  return (
    <div className="dropdown-container">
      <div className="dropdown">
        {/* Edit */}
        <div className="dropdown-menu-item">
          <span className="contact-item-buttons-icon-holder">
            <Image
              src="/settings.svg"
              alt="settings Icon"
              width={20}
              height={20}
              priority
              className="dropdown-icon-img"
            />
          </span>
          <span className="dropdown-icon-text">Edit</span>
        </div>

        {/* favourite */}
        <div className="dropdown-menu-item">
          <span className="contact-item-buttons-icon-holder">
            <Image
              src="/favorite.svg"
              alt="favorite Icon"
              width={20}
              height={20}
              priority
              className="dropdown-icon-img"
            />
          </span>
          <span className="dropdown-icon-text">Favourite</span>
        </div>

        {/* remove */}
        <div className="dropdown-menu-item">
          <span className="contact-item-buttons-icon-holder">
            <Image
              src="/delete.svg"
              alt="delete Icon"
              width={20}
              height={20}
              priority
              className="dropdown-icon-img"
            />
          </span>
          <span className="dropdown-icon-text">Remove</span>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;