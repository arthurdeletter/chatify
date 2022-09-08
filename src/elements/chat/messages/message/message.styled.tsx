import styled from "styled-components";
import { Flex } from "../../../../ui";

export const MessageContainer = styled(Flex)({
  padding: ".5rem",
});

export const MessageContent = styled.div<{ owner?: boolean }>(
  ({ owner = false }) => ({
    backgroundColor: owner ? "var(--clr-primary)" : "#fff",
    color: owner ? "#fff" : "#000",
    borderRadius: ".5em",
    ...(owner
      ? { borderBottomRightRadius: "0" }
      : { borderBottomLeftRadius: "0" }),
    padding: ".5rem",
    "> p": {
      maxWidth: "50ch",
      lineHeight: "1.5",
    },
  })
);
