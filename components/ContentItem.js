import React from "react";
import Head from "next/head";
import ContentItemRoosefy from "./ContentItemRoosefy";
import ContentItemAstrodiac from "./ContentItemAstrodiac";
import ContentItemNaricon from "./ContentItemNaricon";
import ContentItemQr from "./ContentItemQr";

function ContentItem() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="contentItem">
        <div className="items">
          <span>
            <ContentItemRoosefy />
          </span>
          <span>
            <ContentItemAstrodiac />
          </span>
          <span>
            {" "}
            <ContentItemNaricon />
          </span>
          <span>
            {" "}
            <ContentItemQr />
          </span>
        </div>
      </div>
      
    </>
  );
}

export default ContentItem;
