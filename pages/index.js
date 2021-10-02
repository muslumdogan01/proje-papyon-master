import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Content from "../components/Content";
import ContentItem from "../components/ContentItem";

function HomePage() {
  return (
    <Layout>
      <Head>
      <title>Ana Sayfa</title>
      </Head>
      <Content />
      <ContentItem />
    </Layout>
  );
}

export default HomePage;
