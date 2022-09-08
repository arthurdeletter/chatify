import styled from "styled-components";
import { Flex } from "../../ui";

export const HomeContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
});

export const AppLayout = styled(Flex)({
  flex: "1 1 0%",
  overflow: "hidden",
});
