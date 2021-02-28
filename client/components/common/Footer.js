import styled from "@emotion/styled";

const Footer = styled("footer")`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <Footer>
    Powered by{" "}
    <a
      href="https://twitter.com/AlejandroPla98"
      target="_blank"
      rel="noopener noreferrer"
    >
      Alex Pla
    </a>
  </Footer>
);
