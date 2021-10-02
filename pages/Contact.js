import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";

function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="contact">
        <h1>
          If you have any question about the apps, please dont't hesitate to
          contact us.
        </h1>
        <h1>Contact: papyonlab@gmail.com</h1>
      </div>
    </Layout>
  );
}

export default Contact;
