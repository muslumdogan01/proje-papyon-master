import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";

function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <h1 className="blog">Blog</h1>
    </Layout>
  );
}

export default Blog;
