import styled from "@emotion/styled";
import cookie from "cookie";
import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";

import redirect from "../../lib/utils/redirect";

const ME_QUERY = gql`
  query me {
    me {
      id
      username
    }
  }
`;

const BodyWrapper = styled("div")`
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

const UserName = styled("div")`
  float: left;
  width: 80px;
`;

const Options = styled("div")`
  float: right;
  width: 80px;
  cursor: pointer;
`;

const ControlPanel = () => {
  const { loading, error, data } = useQuery(ME_QUERY);

  const logout = (apolloClient) => {
    document.cookie = cookie.serialize("token", "", { maxAge: -1 });
    //Check this in a future to improve it
    //apolloClient.cache.reset().then(() => redirect({}, "/"));
    redirect({}, "/user/login");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data.me) {
    return (
      <>
        <BodyWrapper>
          <UserName>{data.me.username}</UserName>
          <Options onClick={logout}>···</Options>
        </BodyWrapper>
      </>
    );
  }
};

export default ControlPanel;
