import React from "react";
import Image from "next/image";
import Head from "next/head";
import bgImage from "../public/image/backgroundImage.png";

function Content() {
  return (
    <div className="content">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Image className="content-img" src={bgImage} />
      <div className="content-text">
        <h1>Apps That Touch</h1>
        <h1>Your Life</h1>
      </div>
    </div>
  );
}

export default Content;
