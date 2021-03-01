import Head from "next/head";
import React from "react";
import styled from "@emotion/styled";

import checkLogin from "../lib/utils/checkLogin";
import redirect from "../lib/utils/redirect";
import Footer from "../components/common/Footer";

const BodyWrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

const UserInfo = styled("div")`
  grid-column: 3 / 6;
  grid-row: 1;
  border: 1px solid #eaeaea;
`;

const Chat = styled("div")`
  grid-column: 3 / 6;
  grid-row: 2 / 8;
  border: 1px solid #eaeaea;
`;

const ChatsList = styled("div")`
  grid-column: 1 / 3;
  grid-row: 2 / 8;
  border: 1px solid #eaeaea;
`;

const Search = styled("div")`
  grid-column: 1 / 3;
  grid-row: 1;
  border: 1px solid #eaeaea;
`;

class IndexPage extends React.Component {
  static async getInitialProps(ctx) {
    const { me } = await checkLogin(ctx.apolloClient);

    if (!me) redirect(ctx, "/user/login");

    return { me };
  }

  render() {
    return (
      <div className="container">
        <Head>
          <title>Realtime Chat</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <BodyWrapper>
          <UserInfo></UserInfo>
          <Search></Search>
          <ChatsList></ChatsList>
          <Chat></Chat>
        </BodyWrapper>
        <Footer />
      </div>
    );
  }
}

export default IndexPage;
