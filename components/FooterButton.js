import React from "react";
import Link from "next/link";

function FooterButton() {
  return (
  
      <Link href="/Contact" className="contact">
          <div className="button">
        <a>Contact Us</a>
        </div>
      </Link>

  );
}

export default FooterButton;
