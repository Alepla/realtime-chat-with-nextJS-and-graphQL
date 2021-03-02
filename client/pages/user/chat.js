import styled from "@emotion/styled";

import checkLogin from "../../lib/utils/checkLogin";
import ControlPanel from "../../components/user/ControlPanel";
import Chat from "../../components/user/Chat";
import ChatsList from "../../components/user/ChatsList";
import SearchChat from "../../components/user/SearchChat";
import redirect from "../../lib/utils/redirect";

const BodyWrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

const LeftMiddle = styled("div")`
  grid-column: 1 / 3;
  grid-row: 2;
  border: 1px solid #eaeaea;
`;

const RightDown = styled("div")`
  grid-column: 3 / 6;
  grid-row: 1 / 8;
  border: 1px solid #eaeaea;
`;

const LeftDown = styled("div")`
  grid-column: 1 / 3;
  grid-row: 3 / 8;
  border: 1px solid #eaeaea;
`;

const LeftUp = styled("div")`
  grid-column: 1 / 3;
  grid-row: 1;
  border: 1px solid #eaeaea;
`;

const ChatPage = () => {
  return (
    <BodyWrapper>
      <LeftUp>
        <ControlPanel />
      </LeftUp>
      <LeftDown>
        <ChatsList />
      </LeftDown>
      <RightDown>
        <Chat />
      </RightDown>
      <LeftMiddle>
        <SearchChat />
      </LeftMiddle>
    </BodyWrapper>
  );
};

ChatPage.getInitialProps = async (ctx) => {
  const { me } = await checkLogin(ctx.apolloClient);

  if (!me) redirect(ctx, "/user/login");

  return { me };
};

export default ChatPage;
