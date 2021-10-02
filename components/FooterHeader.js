import React from "react";
import FooterButton from "./FooterButton";
import FooterContent from "./FooterContent";

function FooterHeader() {
  return (
    <>
      <div className="footerHeader">
        <FooterContent />
      </div>
      <div className="footerHeader-button">
        <FooterButton />
      </div>
    </>
  );
}

export default FooterHeader;
