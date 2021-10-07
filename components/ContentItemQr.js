import React from "react";
import Image from "next/image";
import roosefyN from "../public/image/roosefyN.png";
import roosefyP from "../public/image/astrodiactP.png";

function ContentItemQr() {
  return (
    <div className="qrScan">
      <span className="items-box-header">Qr Scan </span>
      <p>Content design creation for social media</p>
        <div className="items-img-dot">
        <Image className="roosfyN" src={roosefyN} />
        </div>
      <div className="items-img-phone">
        <Image className="roosefyP" src={roosefyP} />
      </div>
    </div>
  );
}

export default ContentItemQr;
