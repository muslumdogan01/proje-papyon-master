import React from "react";
import Image from "next/image";
import roosefyN from "../public/image/roosefyN.png";
import astrodiacP from "../public/image/astrodiactP.png";

function ContentItemAstrodiac() {
  return (
    <div className="items-box2">
      <span className="items-box2-header">AstroDiac</span>
      <p>Content design creation for social media</p>

      <div className="items-img">
        <Image className="roosefyP" src={astrodiacP} />
      </div>

      <div className="items-imgBg">
        <Image className="roosfyN" src={roosefyN} />
      </div>
    </div>
  );
}

export default ContentItemAstrodiac;
