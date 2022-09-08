import styled from "styled-components";
import { Flex } from "../../../ui";

export const MessageFormContainer = styled(Flex)({
  borderTop: "1px solid lightgray",
  margin: "0 1.5rem",
  padding: "1rem 0",
});

export const MessageInput = styled.input({
  backgroundColor: "transparent",
  flex: 1,
  marginRight: "1rem",
  padding: ".25rem 0",
  border: "none",
  fontSize: "1rem",
  lineHeight: "1.5",
  ":focus": {
    outline: "none",
  },
});
