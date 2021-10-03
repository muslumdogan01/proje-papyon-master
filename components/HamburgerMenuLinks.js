import React from 'react'
import Link from "next/link";


function HamburgerMenuLinks() {
    return (
        <>

              <ul class="mobil-menu">
          <li>
            <Link href="/Product">
              <a className="mobil_menu__item">Product</a>
            </Link>
          </li>
          <li>

            <Link href="/Blog">
              <a className="mobil_menu__item">Blog</a>
            </Link>
          </li>
          <li>

            <Link href="/About">
              <a className="mobil_menu__item">About</a>
            </Link>
          </li>
          <li>
 
            <Link href="/Contact">
              <a className="mobil_menu__item">Contact</a>
            </Link>
          </li>
        </ul>
    
        </>
    )
}

export default HamburgerMenuLinks
