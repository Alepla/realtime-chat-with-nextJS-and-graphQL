import React from "react";
import App from "next/app";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/utils/withApollo";

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    );
  }
}

export default withApollo(MyApp);
