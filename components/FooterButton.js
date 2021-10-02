import React from "react";
import Link from "next/link";

function FooterButton() {
  return (
    <div className="button">
      <Link href="/Contact" className="contact">
        <a>Contact Us</a>
      </Link>
    </div>
  );
}

export default FooterButton;
