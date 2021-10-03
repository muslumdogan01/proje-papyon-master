import React from "react";
import Link from "next/link";
import Head from "next/head";

function Navigation() {
  return (
    <nav>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div class="hamburger-menu">
        <ul class="menu__box">
          <li>
            {" "}
            <Link href="/Product">
              <a className="menu__item">Product</a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/Blog">
              <a className="menu__item">Blog</a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/About">
              <a className="menu__item">About</a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/Contact">
              <a className="menu__item">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
