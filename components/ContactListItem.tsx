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
    </div>
  );
}
