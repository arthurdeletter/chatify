import styled from "styled-components";
import { Flex } from "../../../ui";

export const UserListContainer = styled.div({
  padding: "0 .5rem",
  display: "grid",
  gap: ".5rem",
  height: "fit-content",
});

export const UnreadBadge = styled.div({
  marginLeft: "auto",
  width: ".5rem",
  height: ".5rem",
  backgroundColor: "var(--clr-primary)",
  borderRadius: "50%",
});
