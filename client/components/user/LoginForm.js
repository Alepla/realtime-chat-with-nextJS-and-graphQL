import React from "react";
import styled from "@emotion/styled";
import { useMutation } from "react-apollo";
import { gql } from "apollo-boost";
import { withApollo } from "react-apollo";
import cookie from "cookie";

import redirect from "../../lib/utils/redirect";

const Continer = styled("div")`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  height: 100vh;
  background: #e9e9e9;
`;

const Card = styled("div")`
  max-width: 360px;
  width: 100%;
  margin: 0 auto 100px;
  position: relative;
  background: #ffffff;
  border-radius: 5px;
  padding: 60px 0 40px 0;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: 0.3s ease;
  top: 25%;
`;

const Title = styled("h1")`
  position: relative;
  z-index: 1;
  border-left: 5px solid #ed2553;
  margin: 0 0 35px;
  padding: 10px 0 10px 50px;
  font-size: 32px;
  font-weight: 600;
  text-transform: uppercase;
  color: #ed2553;
`;

const Input = styled("input")`
  outline: none;
  z-index: 1;
  background: none;
  width: 240px;
  height: 60px;
  border: 0;
  color: #757575;
  font-size: 24px;
  font-weight: 100;
  line-height: 60px;
  position: relative;
  margin: 0 60px;
`;

const Bar = styled("div")`
  left: 0;
  bottom: 0;
  background: #757575;
  width: 100%;
  height: 1px;
  margin: 0 60px 50px;
  width: 240px;
`;

const Button = styled("button")`
  outline: 0;
  cursor: pointer;
  position: relative;
  display: inline-block;
  background: 0;
  width: 240px;
  border: 2px solid #e3e3e3;
  padding: 20px 0;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.3s ease;
  color: #e3e3e3;
  margin: 0 60px;
  text-align: center;
  :hover {
    color: #ed2553;
    border-color: #ed2553;
  }
`;

const LOG_USER = gql`
  mutation signup($username: String!) {
    signup(username: $username) {
      token
      user {
        id
        username
      }
    }
  }
`;

const LoginForm = ({ client }) => {
  const [userName, setUserName] = React.useState("");
  const [logUser] = useMutation(LOG_USER);

  const handleUserChange = React.useCallback(
    (e) => setUserName(e.target.value),
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userName !== "") {
      logUser({ variables: { username: userName } }).then((res) => {
        document.cookie = cookie.serialize("token", res.data.signup.token, {
          maxAge: 30 * 24 * 60 * 60,
        });
        setUserName("");
        redirect({}, "/");
      });
    } else {
      alert("Please, type a username.");
    }
  };

  return (
    <>
      <Continer className="continer">
        <Card className="card">
          <Title className="title">Login</Title>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={handleUserChange}
            />
            <Bar />
            <Button>Go</Button>
          </form>
        </Card>
      </Continer>
    </>
  );
};

export default withApollo(LoginForm);
