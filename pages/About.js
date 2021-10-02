import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";

function about() {
  return (
    <>
      <Layout>
        <Head>
          <title>About</title>
        </Head>
        <div className="about">
          <h1>Apps That Touch Your Life</h1>
          <p>
            Ut ex lacus, pulvinar eget dolor sit amet, pellentesque porttitor
            turpis. Mauris vel rutrum magna. Nunc non nibh sit amet tortor
            varius feugiat vel et justo. Sed sagittis sit amet est sit amet
            sodales. Nunc imperdiet turpis ex, ut efficitur nisi laoreet eu.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            fringilla, ante non ullamcorper convallis, eros sem blandit enim, ut
            sodales magna felis sed est. Nunc in iaculis odio, quis gravida
            libero. Aliquam at felis non elit mollis vulputate. In malesuada
            lorem in elit blandit interdum. Fusce leo mauris, commodo vitae erat
            id, accumsan gravida erat. Donec arcu sem, bibendum et enim ac,
            consectetur ullamcorper nisi.
          </p>
        </div>
      </Layout>
    </>
  );
}

export default about;
