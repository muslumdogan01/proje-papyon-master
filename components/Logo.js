import React from "react";
import Link from "next/link";
import Image from "next/image";
import papLogo from "../public/image/Logo.png";

function Logo() {
  return (
    <div className="logo">
      <Link href="/">
        <Image className="logo" src={papLogo} />
      </Link>
    </div>
  );
}

export default Logo;
