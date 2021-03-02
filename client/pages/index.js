import Head from "next/head";
import React, { useEffect } from "react";
import Router from "next/router";

import Footer from "../components/common/Footer";

const IndexPage = () => {
  useEffect(() => {
    if (localStorage.getItem("user")) Router.replace("/user/chat");
    else Router.replace("/user/login");
  });

  return (
    <div className="container">
      <Head>
        <title>Realtime Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Footer />
    </div>
  );
};

export default IndexPage;
