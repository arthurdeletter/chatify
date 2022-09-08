import styled from "styled-components";
import { Flex } from "../../../ui";

export const UserBox = styled(Flex)({
  cursor: "pointer",
  padding: ".5rem",
  borderRadius: ".5rem",
  transition: "background-color .25s ease",
  ":hover": {
    backgroundColor: "whitesmoke",
  },
});

export const UserInfo = styled.div({
  span: {
    fontWeight: 700,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  p: {
    color: "#666",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});
