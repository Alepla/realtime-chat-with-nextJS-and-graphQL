import Head from "next/head";
import React, { useEffect } from "react";

import Footer from "../components/common/Footer";
import redirect from "../lib/utils/redirect";
//import checkLogin from "../lib/utils/checkLogin";

const IndexPage = () => {
  useEffect(() => {
    //Improve this in a future
    if (document.cookie) {
      redirect({}, "/user/chat");
    } else {
      redirect({}, "/user/login");
    }
  }, []);

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
