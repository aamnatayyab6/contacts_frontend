import React from "react";
import Image from "next/image";

type Props = {};

export default function ContactListItem({}: Props) {
  return (
    <div className="contact-item">
      <div className="contact-info">
        {/* pfp */}
        <span className="contact-pfp">
          <Image
            src="/timmylewis.svg"
            alt="Pfp Icon"
            width={40}
            height={40}
            className="contact-pfp-image"
            priority
          />
        </span>
        {/* card */}
        <span className="namecard">
          <h3>Timothy Lewis</h3>
          <p className="message">+36 01 234 5678</p>
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
        <span className="contact-item-buttons-icon-holder"
        >
          <Image
            src="/more-3-dots.svg"
            alt="More Icon"
            width={24}
            height={24}
            priority
          />
        </span>
      </div>
    </div>
  );
}
