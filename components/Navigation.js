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
      <ul>
        <li>
          <Link href="/Product">
            <a>Product</a>
          </Link>
        </li>
        <li>
          <Link href="/Blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/About">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/Contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
