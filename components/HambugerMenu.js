import React, {useState} from "react";
import HamburgerMenuLinks from "./HamburgerMenuLinks";
import Image from "next/image";
import menu from "../public/image/menu.png";

function HambugerMenu() {

    const [isMobile, setisMobile] = useState(false);



  return (
    <>
      <div className="toggle-icon">
        <button onClick={()=> setisMobile(!isMobile)}>
        <Image
              
              width={30}
              height={30}
              src={menu}
            />
        </button>
      
      
      </div>

      <div className="toggle-menu">
       {isMobile && <HamburgerMenuLinks/>}
      </div>
    </>
  );
}

export default HambugerMenu;
