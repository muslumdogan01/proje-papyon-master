import React from "react";
import Image from "next/image";
import roosefyN from "../public/image/roosefyN.png";
import roosefyP from "../public/image/roosefyP.png";

function ContentItemRoosefy() {
  return (
    <div className="roosefy">
      <span className="items-box-header">Roosefy</span>
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

export default ContentItemRoosefy;
