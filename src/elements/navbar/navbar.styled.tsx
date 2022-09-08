import styled from "styled-components";
import { Flex } from "../../ui";

export const NavbarContainer = styled.nav({
  padding: "1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "> h3": {
    fontSize: "1.5rem",
  },
});

export const UserWrapper = styled(Flex)({
  span: {
    fontWeight: "700",
    color: "var(--clr-dark)",
    "@media (max-width: 35rem)": {
      display: "none",
    },
  },
});
