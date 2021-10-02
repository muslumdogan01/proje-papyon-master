import React from "react";
import Navigation from "./Navigation";
import Head from "next/head";
import Logo from "./Logo";
// import FooterHeader from "./FooterHeader";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Logo />
        <Navigation />
      </header>
      <main>{children}</main>
      {/* <footer>
        <FooterHeader />
      </footer> */}
    </div>
  );
}

export default Layout;
